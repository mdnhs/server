export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  compression: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
