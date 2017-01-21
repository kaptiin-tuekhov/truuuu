const rq = require('request');
const fsRead = require('fs-readfile-promise');
const base64encode = require('./base64encode');
const {
  baseUrl,
  headers,
  vaultId,
  schemaId } = require('./truVaultinfo');

fsRead('./test.json').then((buffer) => {
  JSON.parse(buffer.toString()).forEach((doc) => {
    rq.post({
      url: `${baseUrl}/vaults/${vaultId}/documents`,
      headers,
      formData: {
        document: base64encode(JSON.stringify(doc)),
        schema_id: schemaId } },
      (error, response, body) => {
        console.log(body);
      });
  });
}).catch(err => console.error(err));
