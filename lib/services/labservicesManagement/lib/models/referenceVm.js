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
 * Details of a Reference Vm
 *
 */
class ReferenceVm {
  /**
   * Create a ReferenceVm.
   * @property {string} userName The username of the virtual machine
   * @property {string} [password] The password of the virtual machine. This
   * will be set to null in GET resource API
   * @property {object} [vmStateDetails] The state details for the reference
   * virtual machine.
   * @property {string} [vmStateDetails.rdpAuthority] The RdpAuthority property
   * is a server DNS host name or IP address followed by the service port
   * number for RDP (Remote Desktop Protocol).
   * @property {string} [vmStateDetails.sshAuthority] The SshAuthority property
   * is a server DNS host name or IP address followed by the service port
   * number for SSH.
   * @property {string} [vmStateDetails.powerState] The power state of the
   * reference virtual machine.
   * @property {string} [vmStateDetails.lastKnownPowerState] Last known compute
   * power state captured in DTL
   * @property {string} [vmResourceId] VM resource Id for the environment
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReferenceVm
   *
   * @returns {object} metadata of ReferenceVm
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReferenceVm',
      type: {
        name: 'Composite',
        className: 'ReferenceVm',
        modelProperties: {
          userName: {
            required: true,
            serializedName: 'userName',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          vmStateDetails: {
            required: false,
            readOnly: true,
            serializedName: 'vmStateDetails',
            type: {
              name: 'Composite',
              className: 'VmStateDetails'
            }
          },
          vmResourceId: {
            required: false,
            readOnly: true,
            serializedName: 'vmResourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReferenceVm;