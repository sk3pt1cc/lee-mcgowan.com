exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: "Omg this works!",
  })
}