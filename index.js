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
    },
    {
      type: 'confirm',
      name: 'fix',
      message: 'Will this commit close the tickets? (Tickets will be moved to closed on push)',
      default: false
    }
  ]).then((answers) => {
    formatCommit(commit, answers)
  })
}

const formatCommit = (commit, answers) => {
  const singleTickets = answers.tickets.split(', ')
  const updatedTickets = singleTickets.map((ticket) => {
    const string = (answers.fix) ? 'fix #' + ticket : '#' + ticket
    return string
  })

  commit([
    `[${answers.type}]`,
    answers.message + ' |',
    `${updatedTickets.join(' ')}`,
  ].join(' '))
}

module.exports = {
  prompter,
  formatCommit
}