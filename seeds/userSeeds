const { User } = require('../models');

const userData = [
  {
    username: 'Christopher Russsian',
    email: 'ChristopherRusssian@gmail.com',
    password: 'password1'
  },
  {
    username: 'Disguised Rat',
    email: 'DisguisedRat@gmail.com',
    password: 'password2'
  },
  {
    username: 'DrStingy',
    email: 'DrStingy@gmail.com',
    password: 'password3'
  },
  {
    username: 'TheodoraasaurusRex',
    email: 'TheodoraasaurusRex@gmail.com',
    password: 'password4'
  },
  {
    username: 'Yaroslav Welsh',
    email: 'YaroslavWelsh@gmail.com',
    password: 'password5'
  },

];

const seedCategories = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedCategories;