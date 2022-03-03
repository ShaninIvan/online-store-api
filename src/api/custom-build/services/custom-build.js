'use strict';

/**
 * custom-build service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-build.custom-build');
