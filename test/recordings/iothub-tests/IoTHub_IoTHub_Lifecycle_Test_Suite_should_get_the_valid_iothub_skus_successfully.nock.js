// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/skus?api-version=2017-07-01')
  .reply(200, "{\"value\":[{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S3\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":10,\"default\":1,\"scaleType\":\"Manual\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '475',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '49dfb25b-966f-4c08-b742-5c5c3f6592f2',
  'x-ms-correlation-request-id': '49dfb25b-966f-4c08-b742-5c5c3f6592f2',
  'x-ms-routing-request-id': 'WESTUS:20170502T195220Z:49dfb25b-966f-4c08-b742-5c5c3f6592f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/skus?api-version=2017-07-01')
  .reply(200, "{\"value\":[{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":200,\"default\":1,\"scaleType\":\"Manual\"}},{\"resourceType\":\"Microsoft.Devices/IotHubs\",\"sku\":{\"name\":\"S3\",\"tier\":\"Standard\"},\"capacity\":{\"minimum\":1,\"maximum\":10,\"default\":1,\"scaleType\":\"Manual\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '475',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '49dfb25b-966f-4c08-b742-5c5c3f6592f2',
  'x-ms-correlation-request-id': '49dfb25b-966f-4c08-b742-5c5c3f6592f2',
  'x-ms-routing-request-id': 'WESTUS:20170502T195220Z:49dfb25b-966f-4c08-b742-5c5c3f6592f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:19 GMT',
  connection: 'close' });
 return result; }]];