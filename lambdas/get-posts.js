import { successResponse } from './services/response';

exports.handler = (event, context, callback) => {
  const posts = [{
    title: 'A test title!',
    content: 'Some test content!',
    preview: 'omg this works!',
  }];

  successResponse(posts, callback);
};