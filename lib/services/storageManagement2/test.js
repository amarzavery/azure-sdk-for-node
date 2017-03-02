'use strict';

var msRestAzure = require('ms-rest-azure');
var storageManagementClient = require('./lib/storageManagementClient');

// Interactive Login
var spn = process.env['AZURE_CLIENT_ID'];
var domain = process.env['AZURE_DOMAIN'];
var secret = process.env['APP_SECRET'];
var subscriptionId = process.env['AZURE_SUBSCRIPTION_ID'];
msRestAzure.loginWithServicePrincipalSecret(spn, secret, domain, function (err, credentials) {
  var client = new storageManagementClient(credentials, subscriptionId);
  let name = 'foo';
  client.storageAccounts.checkNameAvailability(name, function (err, result, request, response) {
    if (err) console.log(err);
    console.log(result);
  });
});