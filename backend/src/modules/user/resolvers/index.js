const Mutation = require('../mutations');
const Query = require('../queries');

const users = [
    {
        id: 1,
        name: "Wellington",
        email: "wellington@customer.com",
        password: "12345678",
        tasks: [
            {
                id: 1,
                title: "Task #1",
                description: "It's a sample task"
            }
        ]
    }
]

module.exports = { Mutation, Query };