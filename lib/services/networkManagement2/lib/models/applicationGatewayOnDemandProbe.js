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
 * Details of on demand test probe request
 *
 */
class ApplicationGatewayOnDemandProbe {
  /**
   * Create a ApplicationGatewayOnDemandProbe.
   * @property {string} [protocol] The protocol used for the probe. Possible
   * values include: 'Http', 'Https'
   * @property {string} [host] Host name to send the probe to.
   * @property {string} [path] Relative path of probe. Valid path starts from
   * '/'. Probe is sent to <Protocol>://<host>:<port><path>
   * @property {number} [timeout] The probe timeout in seconds. Probe marked as
   * failed if valid response is not received with this timeout period.
   * Acceptable values are from 1 second to 86400 seconds.
   * @property {boolean} [pickHostNameFromBackendHttpSettings] Whether the host
   * header should be picked from the backend http settings. Default value is
   * false.
   * @property {object} [match] Criterion for classifying a healthy probe
   * response.
   * @property {string} [match.body] Body that must be contained in the health
   * response. Default value is empty.
   * @property {array} [match.statusCodes] Allowed ranges of healthy status
   * codes. Default range of healthy status codes is 200-399.
   * @property {string} [backendPoolName] Name of backend pool of application
   * gateway to which probe request will be sent.
   * @property {string} [backendHttpSettingName] Name of backend http setting
   * of application gateway to be used for test probe
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationGatewayOnDemandProbe
   *
   * @returns {object} metadata of ApplicationGatewayOnDemandProbe
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewayOnDemandProbe',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewayOnDemandProbe',
        modelProperties: {
          protocol: {
            required: false,
            serializedName: 'protocol',
            type: {
              name: 'String'
            }
          },
          host: {
            required: false,
            serializedName: 'host',
            type: {
              name: 'String'
            }
          },
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          },
          timeout: {
            required: false,
            serializedName: 'timeout',
            type: {
              name: 'Number'
            }
          },
          pickHostNameFromBackendHttpSettings: {
            required: false,
            serializedName: 'pickHostNameFromBackendHttpSettings',
            type: {
              name: 'Boolean'
            }
          },
          match: {
            required: false,
            serializedName: 'match',
            type: {
              name: 'Composite',
              className: 'ApplicationGatewayProbeHealthResponseMatch'
            }
          },
          backendPoolName: {
            required: false,
            serializedName: 'backendPoolName',
            type: {
              name: 'String'
            }
          },
          backendHttpSettingName: {
            required: false,
            serializedName: 'backendHttpSettingName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewayOnDemandProbe;