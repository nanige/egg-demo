'use strict';
const Controller = require('egg').Controller

let fruitList = ['苹果']
class FruitsController extends Controller {
  // /fruits get
  async index(){
    this.ctx.body = fruitList
  }

  // post
  async create(){
    const fruit = this.ctx.request.body.fruit
    console.log(this.ctx.request.body)
    fruitList.push(fruit)
    this.ctx.body = '添加成功'
  }
  // delete
  async destroy(){
    let id = this.ctx.params.id
    console.log(this.ctx.params)
    fruitList.splice(id, 1)
    this.ctx.body = '删除成功'
  }
}

module.exports = FruitsController