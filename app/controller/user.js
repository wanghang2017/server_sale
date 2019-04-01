const Controller = require("egg").Controller;



class UserController extends Controller{
    async login(){
        let {ctx} = this;
        let {uname,psw }= ctx.request.body;
        const user = await ctx.service.user.find(uname);
        console.log(user);
        if(user&&user.userpassword===psw){
            ctx.body={
                code:0,
                message:"登陆成功",
                data:user
            }
        }else{
            ctx.body={
                code:-1,
                message:"账号或者密码错误"
            }
        } 
    }
    async signin(){
        let {ctx} = this;
        let {uname,psw }= ctx.request.body;
        await ctx.service.user.add(uname,psw);
        ctx.body={
            code:0,
            message:"注册成功!!"
        }
    }
}


module.exports = UserController;