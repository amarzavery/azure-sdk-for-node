// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'eastus2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060?api-version=2017-05-10', '*')
  .reply(409, "{\"error\":{\"code\":\"MissingSubscriptionRegistration\",\"message\":\"The subscription registration is in 'Unregistered' state. The subscription must be registered to use namespace 'Microsoft.DataLakeStore'. See https://aka.ms/rps-not-found for how to register subscriptions.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ff2cb364-b7a2-4193-a91e-36f9f9b4c6f3',
  'x-ms-correlation-request-id': 'ff2cb364-b7a2-4193-a91e-36f9f9b4c6f3',
  'x-ms-routing-request-id': 'WESTUS:20170623T223146Z:ff2cb364-b7a2-4193-a91e-36f9f9b4c6f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:45 GMT',
  connection: 'close',
  'content-length': '270' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060?api-version=2017-05-10', '*')
  .reply(409, "{\"error\":{\"code\":\"MissingSubscriptionRegistration\",\"message\":\"The subscription registration is in 'Unregistered' state. The subscription must be registered to use namespace 'Microsoft.DataLakeStore'. See https://aka.ms/rps-not-found for how to register subscriptions.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'ff2cb364-b7a2-4193-a91e-36f9f9b4c6f3',
  'x-ms-correlation-request-id': 'ff2cb364-b7a2-4193-a91e-36f9f9b4c6f3',
  'x-ms-routing-request-id': 'WESTUS:20170623T223146Z:ff2cb364-b7a2-4193-a91e-36f9f9b4c6f3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:45 GMT',
  connection: 'close',
  'content-length': '270' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore/register?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1225',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2cd15333-bd67-4e0b-bad0-a56d3a135289',
  'x-ms-correlation-request-id': '2cd15333-bd67-4e0b-bad0-a56d3a135289',
  'x-ms-routing-request-id': 'WESTUS:20170623T223147Z:2cd15333-bd67-4e0b-bad0-a56d3a135289',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore/register?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1225',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2cd15333-bd67-4e0b-bad0-a56d3a135289',
  'x-ms-correlation-request-id': '2cd15333-bd67-4e0b-bad0-a56d3a135289',
  'x-ms-routing-request-id': 'WESTUS:20170623T223147Z:2cd15333-bd67-4e0b-bad0-a56d3a135289',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'dc06bdfc-b2b7-468f-ac54-a1feec0c6ba9',
  'x-ms-correlation-request-id': 'dc06bdfc-b2b7-468f-ac54-a1feec0c6ba9',
  'x-ms-routing-request-id': 'WESTUS:20170623T223148Z:dc06bdfc-b2b7-468f-ac54-a1feec0c6ba9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:47 GMT',
  connection: 'close',
  'content-length': '1225' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'dc06bdfc-b2b7-468f-ac54-a1feec0c6ba9',
  'x-ms-correlation-request-id': 'dc06bdfc-b2b7-468f-ac54-a1feec0c6ba9',
  'x-ms-routing-request-id': 'WESTUS:20170623T223148Z:dc06bdfc-b2b7-468f-ac54-a1feec0c6ba9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:31:47 GMT',
  connection: 'close',
  'content-length': '1225' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '719ef1fb-6b30-4d4b-a4a4-29a6ce71061f',
  'x-ms-correlation-request-id': '719ef1fb-6b30-4d4b-a4a4-29a6ce71061f',
  'x-ms-routing-request-id': 'WESTUS:20170623T223218Z:719ef1fb-6b30-4d4b-a4a4-29a6ce71061f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:32:18 GMT',
  connection: 'close',
  'content-length': '1225' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': '719ef1fb-6b30-4d4b-a4a4-29a6ce71061f',
  'x-ms-correlation-request-id': '719ef1fb-6b30-4d4b-a4a4-29a6ce71061f',
  'x-ms-routing-request-id': 'WESTUS:20170623T223218Z:719ef1fb-6b30-4d4b-a4a4-29a6ce71061f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:32:18 GMT',
  connection: 'close',
  'content-length': '1225' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'd94f1774-8419-4bff-83ee-060a7bca543f',
  'x-ms-correlation-request-id': 'd94f1774-8419-4bff-83ee-060a7bca543f',
  'x-ms-routing-request-id': 'WESTUS2:20170623T223248Z:d94f1774-8419-4bff-83ee-060a7bca543f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:32:48 GMT',
  connection: 'close',
  'content-length': '1225' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registering\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-request-id': 'd94f1774-8419-4bff-83ee-060a7bca543f',
  'x-ms-correlation-request-id': 'd94f1774-8419-4bff-83ee-060a7bca543f',
  'x-ms-routing-request-id': 'WESTUS2:20170623T223248Z:d94f1774-8419-4bff-83ee-060a7bca543f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:32:48 GMT',
  connection: 'close',
  'content-length': '1225' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '8362afa8-d5cb-481d-9f88-9f81c0bc01b1',
  'x-ms-correlation-request-id': '8362afa8-d5cb-481d-9f88-9f81c0bc01b1',
  'x-ms-routing-request-id': 'WESTUS2:20170623T223319Z:8362afa8-d5cb-481d-9f88-9f81c0bc01b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:18 GMT',
  connection: 'close',
  'content-length': '1224' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore?api-version=2016-02-01')
  .reply(200, "{\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore\",\"namespace\":\"Microsoft.DataLakeStore\",\"authorization\":{\"applicationId\":\"e9f49c6b-5ce5-44c8-925d-015017e9f7ad\",\"roleDefinitionId\":\"17eb9cca-f08a-4499-b2d3-852d175f614f\"},\"resourceTypes\":[{\"resourceType\":\"accounts\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"],\"capabilities\":\"CrossResourceGroupResourceMove, CrossSubscriptionResourceMove, SystemAssignedResourceIdentity\"},{\"resourceType\":\"accounts/firewallRules\",\"locations\":[\"East US 2\",\"North Europe\",\"Central US\"],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/operationresults\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/checkNameAvailability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"locations/capability\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]},{\"resourceType\":\"operations\",\"locations\":[],\"apiVersions\":[\"2016-11-01\",\"2015-10-01-preview\"]}],\"registrationState\":\"Registered\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-request-id': '8362afa8-d5cb-481d-9f88-9f81c0bc01b1',
  'x-ms-correlation-request-id': '8362afa8-d5cb-481d-9f88-9f81c0bc01b1',
  'x-ms-routing-request-id': 'WESTUS2:20170623T223319Z:8362afa8-d5cb-481d-9f88-9f81c0bc01b1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:18 GMT',
  connection: 'close',
  'content-length': '1224' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"d73968fe-785d-41c5-af74-5f3cb63f70ed\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060\",\"name\":\"xplattestadls4060\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourcegroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060/operationresults/0?api-version=2017-05-10',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d73968fe-785d-41c5-af74-5f3cb63f70ed0?api-version=2017-05-10&expanded=true',
  'x-ms-request-id': 'b253b5e9-3f8b-43ce-89d3-c138fb0d4e35',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b1371de6-3f60-42db-8ff2-f1047cfdc655',
  'x-ms-routing-request-id': 'WESTUS2:20170623T223321Z:b1371de6-3f60-42db-8ff2-f1047cfdc655',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060?api-version=2016-11-01', '*')
  .reply(201, "{\"properties\":{\"provisioningState\":\"Creating\",\"state\":null,\"endpoint\":null,\"accountId\":\"d73968fe-785d-41c5-af74-5f3cb63f70ed\",\"creationTime\":null,\"lastModifiedTime\":null},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060\",\"name\":\"xplattestadls4060\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '471',
  'content-type': 'application/json',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourcegroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060/operationresults/0?api-version=2017-05-10',
  'retry-after': '10',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d73968fe-785d-41c5-af74-5f3cb63f70ed0?api-version=2017-05-10&expanded=true',
  'x-ms-request-id': 'b253b5e9-3f8b-43ce-89d3-c138fb0d4e35',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b1371de6-3f60-42db-8ff2-f1047cfdc655',
  'x-ms-routing-request-id': 'WESTUS2:20170623T223321Z:b1371de6-3f60-42db-8ff2-f1047cfdc655',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d73968fe-785d-41c5-af74-5f3cb63f70ed0?api-version=2017-05-10&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'aed3d9b2-c88a-461f-82c4-bfcc5d09c3c4',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '5a954395-1127-41b2-bce5-487e652ebf54',
  'x-ms-routing-request-id': 'WESTUS:20170623T223352Z:5a954395-1127-41b2-bce5-487e652ebf54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/providers/Microsoft.DataLakeStore/locations/eastus2/operationResults/d73968fe-785d-41c5-af74-5f3cb63f70ed0?api-version=2017-05-10&expanded=true')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'aed3d9b2-c88a-461f-82c4-bfcc5d09c3c4',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '5a954395-1127-41b2-bce5-487e652ebf54',
  'x-ms-routing-request-id': 'WESTUS:20170623T223352Z:5a954395-1127-41b2-bce5-487e652ebf54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4060.azuredatalakestore.net\",\"accountId\":\"d73968fe-785d-41c5-af74-5f3cb63f70ed\",\"creationTime\":\"2017-06-23T22:33:26.3488784Z\",\"lastModifiedTime\":\"2017-06-23T22:33:26.3488784Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060\",\"name\":\"xplattestadls4060\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '832',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'db1af688-251b-4e53-a9e6-4c82e1af4a46',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b357e79d-bd02-4362-9dbb-36b41d725d54',
  'x-ms-routing-request-id': 'WESTUS:20170623T223352Z:b357e79d-bd02-4362-9dbb-36b41d725d54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"firewallRules\":[],\"trustedIdProviderState\":\"Disabled\",\"trustedIdProviders\":[],\"encryptionState\":\"Enabled\",\"encryptionConfig\":{\"type\":\"ServiceManaged\"},\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4060.azuredatalakestore.net\",\"accountId\":\"d73968fe-785d-41c5-af74-5f3cb63f70ed\",\"creationTime\":\"2017-06-23T22:33:26.3488784Z\",\"lastModifiedTime\":\"2017-06-23T22:33:26.3488784Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/0b1f6471-1bf0-4dda-aec3-cb9272f09590/resourceGroups/xplattestadlsrg01/providers/Microsoft.DataLakeStore/accounts/xplattestadls4060\",\"name\":\"xplattestadls4060\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '832',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'db1af688-251b-4e53-a9e6-4c82e1af4a46',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'b357e79d-bd02-4362-9dbb-36b41d725d54',
  'x-ms-routing-request-id': 'WESTUS:20170623T223352Z:b357e79d-bd02-4362-9dbb-36b41d725d54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 23 Jun 2017 22:33:52 GMT',
  connection: 'close' });
 return result; }]];