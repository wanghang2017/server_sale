module.exports= app=>{
    const {router,controller} = app;
    router.post('/user/login',controller.user.login);
    router.post('/user/signin',controller.user.signin);
    router.get('/product/list',controller.product.list);    
    router.get('/product/detail',controller.product.find);
    router.post("/cart/add",controller.cart.add);
    router.get("/cart/list",controller.cart.list)
}