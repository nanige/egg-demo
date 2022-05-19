'use strict';

const Controller = require('egg').Controller;
const list = [
  '苹果',
  '香蕉'
]
class HomeController extends Controller {
  async index() {
    await this.ctx.render('index', {list})
  }
}

module.exports = HomeController;
