module.exports = ({ env }) => ({
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 5, // Default is 5
      }
    },
    'google-auth': {
        enabled: false,
    },
  });
