// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc2604?api-version=2017-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/20328c1e-301f-43b8-bcb1-c0e41cd12bbf?monitor=true&api-version=2017-06-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f9c7dd85-4708-4fc0-9818-e1494003c8d8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'f9c7dd85-4708-4fc0-9818-e1494003c8d8',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024217Z:f9c7dd85-4708-4fc0-9818-e1494003c8d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup457/providers/Microsoft.Storage/storageAccounts/testacc2604?api-version=2017-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/20328c1e-301f-43b8-bcb1-c0e41cd12bbf?monitor=true&api-version=2017-06-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'f9c7dd85-4708-4fc0-9818-e1494003c8d8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'f9c7dd85-4708-4fc0-9818-e1494003c8d8',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024217Z:f9c7dd85-4708-4fc0-9818-e1494003c8d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/20328c1e-301f-43b8-bcb1-c0e41cd12bbf?monitor=true&api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup457/providers/Microsoft.Storage/storageAccounts/testacc2604\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc2604\",\"properties\":{\"creationTime\":\"2017-09-07T02:42:17.4085617Z\",\"networkAcls\":{\"bypass\":\"AzureServices\",\"defaultAction\":\"Allow\",\"ipRules\":[],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc2604.blob.core.windows.net/\",\"file\":\"https://testacc2604.file.core.windows.net/\",\"queue\":\"https://testacc2604.queue.core.windows.net/\",\"table\":\"https://testacc2604.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '854',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '74439b43-0854-460d-b24c-404fc0503058',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '74439b43-0854-460d-b24c-404fc0503058',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024248Z:74439b43-0854-460d-b24c-404fc0503058',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:42:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/20328c1e-301f-43b8-bcb1-c0e41cd12bbf?monitor=true&api-version=2017-06-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup457/providers/Microsoft.Storage/storageAccounts/testacc2604\",\"kind\":\"Storage\",\"location\":\"westus\",\"name\":\"testacc2604\",\"properties\":{\"creationTime\":\"2017-09-07T02:42:17.4085617Z\",\"networkAcls\":{\"bypass\":\"AzureServices\",\"defaultAction\":\"Allow\",\"ipRules\":[],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc2604.blob.core.windows.net/\",\"file\":\"https://testacc2604.file.core.windows.net/\",\"queue\":\"https://testacc2604.queue.core.windows.net/\",\"table\":\"https://testacc2604.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{\"tag1\":\"val1\",\"tag2\":\"val2\"},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '854',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '74439b43-0854-460d-b24c-404fc0503058',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '74439b43-0854-460d-b24c-404fc0503058',
  'x-ms-routing-request-id': 'JAPANEAST:20170907T024248Z:74439b43-0854-460d-b24c-404fc0503058',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Sep 2017 02:42:48 GMT',
  connection: 'close' });
 return result; }]];