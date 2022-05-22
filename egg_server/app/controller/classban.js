const Controller = require('egg').Controller

class ClassbanController extends Controller {
    // restful: index/ create / destroy / update
    async index(){
        const id = this.ctx.request.query.id
        const classList = await this.app.model.Classban.findAll({
            // where: {
            //     id
            // }
        })
        this.ctx.body = classList
    }

    async create(){
        const name = this.ctx.request.body.name;
        await this.app.model.Classban.create({
            name
        })
        this.ctx.body = '添加班级'
    }

    async destroy(){
        const id = this.ctx.request.body.id
        await this.app.model.Classban.destroy({
            where: {
                id
            }
        })
        this.ctx.body = '删除班级'
    }

    async update(){
        const query = this.ctx.request.body
        await this.app.model.Classban.update({
            name: query.name
        },{
            where: {
                id: query.id
            }
        })
        this.ctx.body = '修改成功!'
    }
}

module.exports = ClassbanController