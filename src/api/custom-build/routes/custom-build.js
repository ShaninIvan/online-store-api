'use strict';

/**
 * custom-build router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-build.custom-build');
