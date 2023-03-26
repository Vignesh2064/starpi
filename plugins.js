module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIAUUF2WNY4FLHPKJUU'),
        secretAccessKey: env('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'),
        region: env('us-east-1'),
        params: {
            Bucket: env('strapinew1'),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});
