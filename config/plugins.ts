export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3,
          updateAgeOnGet: false,
        },
      },
      strategy: {
        debug: true,
        maxAge: 3600,
        updateAgeOnGet: false,
        contentTypes: [
          { contentType: "api::product.product", maxAge: 60 * 60 * 100 },
          { contentType: "api::order.order", maxAge: 60 * 60 * 100 },
          { contentType: "api::tool.tool", maxAge: 60 * 60 * 100 },
        ],
      },
    },
  },
});
