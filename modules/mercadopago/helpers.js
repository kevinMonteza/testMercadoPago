import statusMessages from '~/modules/mercadopago/status-messages.json'

let getErrorCauseFromResponse = function (response) {
  console.log(response)
  return response.cause.pop()
}

export default {
  getMessage (actionName, response, lang = 'es') {

    let errorCause = getErrorCauseFromResponse(response)
    if (statusMessages[actionName] === undefined) {
      console.log('Action not found')
      return ''
    }

    let action = statusMessages[actionName].find(action => {
      let condition = action.code === errorCause.code.toString()
      if (errorCause.description) {
        condition &= action.description === errorCause.description.toString()
      }
      return condition
    })

    if (action === undefined) {
      console.log('Status code not found')
      return response.message
    }

    return action.message[lang]
  }
}