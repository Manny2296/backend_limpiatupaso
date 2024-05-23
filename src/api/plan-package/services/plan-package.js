'use strict';

/**
 * plan-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::plan-package.plan-package');
