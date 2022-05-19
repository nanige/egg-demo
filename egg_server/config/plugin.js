'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  }
};
