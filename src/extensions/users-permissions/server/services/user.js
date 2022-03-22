"use strict";

module.exports = {
  fetchAuthenticatedUser(id) {
    return strapi
      .query("plugin::users-permissions.user")
      .findOne({ where: { id }, populate: ["role"] });
  },
};
