export const successResponse = (body, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
  };

  if (process.env.NODE_ENV === 'development') {
    response.headers = {
      'Access-Control-Allow-Origin': '*',
    }
  }

  callback(null, response);
};