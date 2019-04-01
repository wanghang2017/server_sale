const Controller = require("egg").Controller;


class ProductController extends Controller{
    async find(){
        let {ctx}= this;
        let id = ctx.query.id;
        // console.log(id);
        let product = await ctx.service.product.find(id);
        // console.log(product);
        ctx.body={
            code:0,
            message:"ok",
            data:product
        }
    }
    async list(){
        let {ctx} = this;
        let pro_list = await ctx.service.product.list();
        ctx.body={
            code:0,
            message:"ok",
            data:pro_list
        }
    }
}


module.exports = ProductController;