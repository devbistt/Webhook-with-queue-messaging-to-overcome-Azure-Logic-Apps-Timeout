const { queueFunction } = require('./add-message-queue.js')
const { setLogLevel } = require('@azure/logger')

setLogLevel('info')

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')

  const queueName = (req.body.queueName || (req.body && req.body.queueName))
  const responseMessage = await queueFunction(queueName, req.body)

  // const url = req.body.callback_url
  context.res = {
    status: 200, /* Defaults to 200 */
    body: responseMessage
  }
}
