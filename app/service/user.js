const Service = require("egg").Service;


class UserService extends Service {
    async find (username){
        let {app } = this;
        const user = await app.mysql.get("users",{username}); 
        return user;
    }
    async add (uname,psw){
        let {app } = this;
        await app.mysql.insert("users",{
            username:uname,
            userpassword:psw,
            updatedAt:Date.now(),
            createdAt:Date.now()
        })
    }
}


module.exports = UserService;