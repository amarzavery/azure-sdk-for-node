/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Parameters supplied to the Update OpenID Connect Provider operation.
 *
 */
class OpenidConnectProviderUpdateContract {
  /**
   * Create a OpenidConnectProviderUpdateContract.
   * @member {string} [displayName] User-friendly OpenID Connect Provider name.
   * @member {string} [description] User-friendly description of OpenID Connect
   * Provider.
   * @member {string} [metadataEndpoint] Metadata endpoint URI.
   * @member {string} [clientId] Client ID of developer console which is the
   * client application.
   * @member {string} [clientSecret] Client Secret of developer console which
   * is the client application.
   */
  constructor() {
  }

  /**
   * Defines the metadata of OpenidConnectProviderUpdateContract
   *
   * @returns {object} metadata of OpenidConnectProviderUpdateContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OpenidConnectProviderUpdateContract',
      type: {
        name: 'Composite',
        className: 'OpenidConnectProviderUpdateContract',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            constraints: {
              MaxLength: 50
            },
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          metadataEndpoint: {
            required: false,
            serializedName: 'properties.metadataEndpoint',
            type: {
              name: 'String'
            }
          },
          clientId: {
            required: false,
            serializedName: 'properties.clientId',
            type: {
              name: 'String'
            }
          },
          clientSecret: {
            required: false,
            serializedName: 'properties.clientSecret',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OpenidConnectProviderUpdateContract;