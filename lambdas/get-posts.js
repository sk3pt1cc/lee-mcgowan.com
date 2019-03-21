exports.handler = (event, context, callback) => {
  const posts = [{
    title: 'A test title!',
    content: 'Some test content!',
    preview: 'omg this works!',
  }];

  callback(null, {
    statusCode: 200,
    body: posts,
  });
};