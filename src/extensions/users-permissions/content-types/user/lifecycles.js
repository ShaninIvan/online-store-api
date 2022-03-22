module.exports = {
  async afterCreate({ result }) {
    strapi.db.query("api::cart.cart").create({
      data: {
        user: result.id,
        data: "[]",
      },
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
