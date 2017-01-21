module.exports = function base64encode(input) {
  return new Buffer(input).toString('base64');
};
