'use strict';

/**
 * home-delivery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-delivery.home-delivery');
