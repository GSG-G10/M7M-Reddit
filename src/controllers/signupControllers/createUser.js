const { hashPassword } = require('../../utilities');
const { addUserQuery } = require('../../database/queries');

const createUser = (userName, email, firstName, lastName, password) => {
    return hashPassword(password)
        .then((hashedPassword) => addUserQuery(userName, email, firstName, lastName, hashedPassword))
};

module.exports = createUser;