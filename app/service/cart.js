const Service  = require("egg").Service;



class CartService extends Service{
    async add(uid,product_id){
        let {app} = this;
        await app.mysql.insert("user_product",{user_id:uid,product_id});
    }
    async list(uid){
        let {app} = this;
        let pro_list = await app.mysql.select("user_product",{
            colums:["product_id"],
            where:{user_id:uid},
            orders:[["product_id","desc"]],
            limit:10
        });
        return  pro_list.map(item=>item.product_id);
    }
}


module.exports = CartService;