const validateIfNotExists = (input, message) => {
  return (input) ? true : message
}

const validateMessage = (input) => {
  return validateIfNotExists(input, 'No commit message provided')
}

const validateTicketIds = (input) => {
  return validateIfNotExists(input, 'No Scrumpy Ticket IDs provided')
}

module.exports = {
  validateMessage,
  validateTicketIds
}