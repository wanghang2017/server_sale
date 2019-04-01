const Service = require("egg").Service;


class ProductService extends Service {
    async find (id){
        let {app } = this;
        console.log(id);
        const product = await app.mysql.select("products",{
            where:{id:id},
            limit:1,
            offset:0
        }); 
        return product ;
    }

    async findAll (list){
        let {app } = this;
        const pro_list = await app.mysql.select("products",{
            where:{id:list},
        }); 
        return pro_list ;
    }


    async list (){
        let {app} = this;
        const pro_list = await app.mysql.select("products",{
            orders:[["hot","desc"]],
            limit:10,
            offset:0
        }); 
        return pro_list
    }
}


module.exports= ProductService