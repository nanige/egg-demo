'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  // router.get('/home', controller.home.index);
  // router.get('/home/add', controller.home.add);
  // router.post('/home/add', controller.home.createfruit);
  // router.resources('home', '/', controller.home)
  // router.resources('fruit', '/fruit', controller.fruits)
  // router.get('/list', middleware.checktoken(), controller.jwt.list)
  // router.post('/login', controller.jwt.login)
  // router.resources('classban', '/classban', controller.classban)
  router.get('/classban/list', controller.classban.index);
  router.post('/classban/add', controller.classban.create);
  router.post('/classban/del', controller.classban.destroy);
  router.post('/classban/update', controller.classban.update);
};
