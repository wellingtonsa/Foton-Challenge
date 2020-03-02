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

module.exports = {
    Query:{
        userAuthenticate:() => users[0]
    },
    Mutation: {
        userAdd: () => users[0],
        taskAdd: () => users[0].tasks[0]
    }
}