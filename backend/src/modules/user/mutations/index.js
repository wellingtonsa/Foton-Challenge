const User = require('../../../model/User');
const Task = require('../../../model/Task');
module.exports = {
        userAdd: (_, {name, email, password }) =>  User.create({ name, email, password }),
        taskAdd: (_, { userId, title, description }) => {
            const user = User.findById(userId);
            // const task = Task.create({ title, description });
            // user.set({ tasks: [task, ...user.tasks] });
            // user.save();
            // return task;
        }
}