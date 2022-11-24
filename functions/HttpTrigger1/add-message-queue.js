const { DefaultAzureCredential } = require('@azure/identity')
const { QueueServiceClient } = require('@azure/storage-queue')
const path = require('path')

require('dotenv').config({ path: path.resolve(__dirname, '.env') })

/**
 * Function to add message to a queue
 * @param {*} queueName
 * @returns
 */
const queueFunction = async (queueName, requestBody) => {
  try {
    const storageAccount = process.env.AZURE_STORAGE_ACCOUNT
    if (!storageAccount) throw Error('Azure Storage accountName not found')
    const credential = new DefaultAzureCredential()
    const queueServiceClient = new QueueServiceClient(`https://${storageAccount}.queue.core.windows.net`,
      credential)
    const queueClient = queueServiceClient.getQueueClient(queueName)

    // Add a message to the queue
    const queueMessage = btoa(requestBody.callbackUrl)
    const sendMessageResponse = await queueClient.sendMessage(queueMessage)
    console.log('Sent message successfully, service assigned message Id:', sendMessageResponse.messageId, 'service assigned request Id:', sendMessageResponse.requestId)
    return sendMessageResponse
  } catch (err) {
    console.log(`error : ${err.message}`)
    throw new Error(err.message)
  }
}

module.exports = {
  queueFunction
}
