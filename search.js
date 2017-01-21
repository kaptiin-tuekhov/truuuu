const rq = require('request');
const base64encode = require('./base64encode');
const {
  baseUrl,
  headers,
  vaultId,
  schemaId } = require('./truVaultinfo');


const searchBody = {
  schema_id: schemaId,
  filter: {
    expiration: {
      type: 'range',
      value: {
        gte: '2017-04-01',
        lt: '2017-12-31' },
    } } };

rq.post({
  url: `${baseUrl}/vaults/${vaultId}/search`,
  headers,
  formData: {
    search_option: base64encode(JSON.stringify(searchBody)) } },
  (error, response, body) => console.log(body));
