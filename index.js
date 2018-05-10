const inquirer = require('inquirer')
const { validateMessage, validateTicketIds } = require('./validations')

const prompter = (cz, commit) => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'message',
      message: 'Commit message (required):\n',
      validate: validateMessage
    },
    {
      type: 'input',
      name: 'tickets',
      message: 'Scrumpy Ticket IDs (required, split multiple via ", "):\n',
      validate: validateTicketIds
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type of commit:',
      choices: ['Feature', 'Bugfix', 'Refactor', 'Style Change', 'Documentation']
    }
  ]).then((answers) => {
    formatCommit(commit, answers)
  })
}

const formatCommit = (commit, answers) => {
  const singleTickets = answers.tickets.split(', ')
  const updatedTickets = singleTickets.map((ticket) => {
    return '#' + ticket
  })

  commit([
    `${updatedTickets.join(' ')}:`,
    `[${answers.type}]`,
    answers.message,
  ].join(' '))
}

module.exports = {
  prompter,
  formatCommit
}