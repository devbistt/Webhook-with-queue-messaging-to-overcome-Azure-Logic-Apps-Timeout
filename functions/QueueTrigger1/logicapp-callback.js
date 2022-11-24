const callBack = async (myQueueItem) => {
  try {
    const responseStatus = 200
    const responseMessage = 'Success from queue function'

    const data = {
      status: responseStatus,
      body: responseMessage
    }

    const response = await fetch(myQueueItem, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    console.log(myQueueItem)
    console.log(data)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = {
  callBack
}
