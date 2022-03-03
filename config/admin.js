module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa7376d7fa2ed3f4a0d14da73edaecc8'),
  },
});
