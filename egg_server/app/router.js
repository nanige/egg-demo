'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/home', controller.home.index);
  // router.get('/home/add', controller.home.add);
  // router.post('/home/add', controller.home.createfruit);
  // router.resources('home', '/', controller.home)
  router.resources('fruit', '/fruit', controller.fruits)
};