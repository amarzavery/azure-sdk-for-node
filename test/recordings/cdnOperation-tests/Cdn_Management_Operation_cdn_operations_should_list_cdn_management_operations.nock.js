// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Cdn/operations?api-version=2017-04-02')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.Cdn/edgenodes/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/edgenodes/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/edgenodes/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/profiles/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '7430',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '94d47691-cb9b-4c77-b128-8b447f41823a',
  'x-ms-client-request-id': 'bdf07323-4a9c-49b9-9fda-7ae005368f28',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '1f686ad4-6a77-4b4b-9b89-57adf9b70f18',
  'x-ms-routing-request-id': 'CANADACENTRAL:20161027T232305Z:1f686ad4-6a77-4b4b-9b89-57adf9b70f18',
  date: 'Thu, 27 Oct 2016 23:23:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Cdn/operations?api-version=2017-04-02')
  .reply(200, "{\"value\":[{\"name\":\"Microsoft.Cdn/edgenodes/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/edgenodes/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/edgenodes/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"EdgeNode\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/profiles/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/customdomains/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/profiles/endpoints/origins/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"OperationResult\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GenerateSsoUri/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GenerateSsoUri\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/GetSupportedOptimizationTypes/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Profile\",\"operation\":\"GetSupportedOptimizationTypes\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Start/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Start\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Stop/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Stop\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Purge/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Purge\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/Load/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"Load\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/ValidateCustomDomain/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Endpoint\",\"operation\":\"ValidateCustomDomain\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/originresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"Origin\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/read\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"read\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/write\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"write\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/delete\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"delete\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/DisableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"DisableCustomHttps\"}},{\"name\":\"Microsoft.Cdn/operationresults/profileresults/endpointresults/customdomainresults/EnableCustomHttps/action\",\"display\":{\"provider\":\"Microsoft.Cdn\",\"resource\":\"CustomDomain\",\"operation\":\"EnableCustomHttps\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '7430',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '94d47691-cb9b-4c77-b128-8b447f41823a',
  'x-ms-client-request-id': 'bdf07323-4a9c-49b9-9fda-7ae005368f28',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14999',
  'x-ms-correlation-request-id': '1f686ad4-6a77-4b4b-9b89-57adf9b70f18',
  'x-ms-routing-request-id': 'CANADACENTRAL:20161027T232305Z:1f686ad4-6a77-4b4b-9b89-57adf9b70f18',
  date: 'Thu, 27 Oct 2016 23:23:05 GMT',
  connection: 'close' });
 return result; }]];