'use strict';

/**
 * analyse controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::analyse.analyse');
