'use strict';

/**
 * plan-package router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::plan-package.plan-package');
