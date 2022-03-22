module.exports = {
  async afterCreate({ result }) {
    strapi.db
      .query("api::cart.cart")
      .create({
        data: {
          user: result.id,
          data: "[]",
        },
      })
      .then((cart) => {
        strapi.db.query("plugin::users-permissions.user").update({
          where: {
            id: result.id,
          },
          data: {
            cart: cart.id,
          },
        });
      });
  },
  async beforeDelete({ params }) {
    strapi.db.query("api::cart.cart").delete({
      where: {
        user: params.where.id,
      },
    });
  },
};
