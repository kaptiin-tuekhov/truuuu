const base64encode = require('./base64encode');

module.exports = {
  baseUrl: 'https://api.truevault.com/v1',
  headers: {
    Authorization: `Basic ${base64encode('2d2a4cbe-26e8-4791-910f-d23aa47dc55d:')}`,
    'Content-Type': 'multipart/form-data' },
  vaultId: 'c9534f77-4f93-422d-91a5-308003ec114d',
  schemaId: '2c8f0bdb-1c0f-4975-ab72-6547a531adbf' };
