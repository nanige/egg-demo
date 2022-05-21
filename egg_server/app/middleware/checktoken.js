function checktoken () {
    return async function(ctx, next){
        try{
            if (ctx.request.url !== '/login') {
                const token = ctx.request.header.token
                const decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret)
                if (decode.username) {
                    await next()
                } else {
                    ctx.body = {
                        code: 500,
                        msg: '服务器错误'
                    }
                }
            } else {
                await next()
            }
            
        } catch(e){
            console.log(e)
        }
    }
}

module.exports = checktoken