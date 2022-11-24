const { callBack } = require('./logicapp-callback.js')

module.exports = async function (context, myQueueItem) {
  try {
    context.log('JavaScript queue trigger function processed work item', myQueueItem)
    context.log('insertionTime =', context.bindingData.insertionTime)
    context.log('id =', context.bindingData.id)
    sleep(240000)
    const response = await callBack(myQueueItem)
  } catch (error) {
    console.log(error)
    return error
  }
}

// delay
function sleep (milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}
