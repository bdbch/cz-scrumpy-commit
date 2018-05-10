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
      message: 'Scrumpy Ticket IDs (required):\n',
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
  commit(filter([
    `${answers.tickets}: `,
    `[${answers.type}] `,
    answers.message,
  ]))
}

const filter = (array) => {
  return array.filter((item) => {
    return !!item
  })
}

module.exports = {
  prompter,
  formatCommit
}