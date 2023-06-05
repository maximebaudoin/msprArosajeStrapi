'use strict';

/**
 * analyse router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::analyse.analyse');
