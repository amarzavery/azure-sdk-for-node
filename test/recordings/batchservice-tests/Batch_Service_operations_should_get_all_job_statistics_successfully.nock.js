// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://test3.westcentralus.batch.azure.com/lifetimejobstats\",\"startTime\":\"2018-12-11T17:38:45.439192Z\",\"lastUpdateTime\":\"2018-12-11T17:38:45.439192Z\",\"userCPUTime\":\"PT0S\",\"kernelCPUTime\":\"PT0S\",\"wallClockTime\":\"PT0S\",\"readIOps\":\"0\",\"writeIOps\":\"0\",\"readIOGiB\":0.0,\"writeIOGiB\":0.0,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"0\",\"numFailedTasks\":\"0\",\"waitTime\":\"PT0S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '025eca35-9e99-4971-93ff-7100ca85bf49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:48:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://test3.westcentralus.batch.azure.com/lifetimejobstats\",\"startTime\":\"2018-12-11T17:38:45.439192Z\",\"lastUpdateTime\":\"2018-12-11T17:38:45.439192Z\",\"userCPUTime\":\"PT0S\",\"kernelCPUTime\":\"PT0S\",\"wallClockTime\":\"PT0S\",\"readIOps\":\"0\",\"writeIOps\":\"0\",\"readIOGiB\":0.0,\"writeIOGiB\":0.0,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"0\",\"numFailedTasks\":\"0\",\"waitTime\":\"PT0S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '025eca35-9e99-4971-93ff-7100ca85bf49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:48:37 GMT',
  connection: 'close' });
 return result; }]];