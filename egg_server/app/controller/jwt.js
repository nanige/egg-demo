const Controller = require('egg').Controller

class JwtController extends Controller {
    async list(){
        // const token = this.ctx.request.header.token
        // try{
        //     this.app.jwt.verify(token, this.app.config.jwt.secret)
        //     this.ctx.body = {
        //         code: 200,
        //         msg: '获取成功！',
        //     }
        // } catch {
        //     this.ctx.body = {
        //         code: 500,
        //         msg: 'token已失效'
        //     }
        // }
            this.ctx.body = {
                code: 200,
                msg: '获取成功！',
            }
    }
    async login(){
        const user = this.ctx.request.body
        console.log(user)
        if (user.username === 'nanige' && user.password === '123') {
            let token = this.app.jwt.sign(user, this.app.config.jwt.secret)
            this.ctx.body = {
                code: 200,
                token
            }
        } else {
            this.ctx.body = {
                code: 500,
                msg: '用户或密码不正确！'
            }
        }
    }
}

module.exports = JwtController