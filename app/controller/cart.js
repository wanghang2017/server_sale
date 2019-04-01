let Controller = require("egg").Controller;


class CartController extends Controller {
    async add(){
        let {ctx} = this;
        let body = ctx.request.body;
        
        let {product_id,user_id} = body;
        await ctx.service.cart.add(user_id,product_id);
        ctx.body={
            code:0,
            message:"ok!"
        }
    }
    async list(){

        let uid = this.ctx.query.uid;
        let pro_list = await this.ctx.service.cart.list(uid);
        if(pro_list.length>0){
            let list = await this.ctx.service.product.findAll(pro_list);
            this.ctx.body={
                code:0,
                message:"ok",
                data:list
            }
        }else{
            this.ctx.body={
                code:0,
                message:"ok",
                data:[]
            }

        }
        
    }
}

module.exports = CartController;