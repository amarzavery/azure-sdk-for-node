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

const models = require('./index');

/**
 * Details of the Azure File Share to mount on the cluster.
 *
 */
class AzureFileShareReference {
  /**
   * Create a AzureFileShareReference.
   * @member {string} accountName Name of the storage account.
   * @member {string} azureFileUrl URL to access the Azure File.
   * @member {object} credentials Information of the Azure File credentials.
   * @member {string} [credentials.accountKey] One of accountKey or
   * accountKeySecretReference must be specified.
   * @member {object} [credentials.accountKeySecretReference] Users can store
   * their secrets in Azure KeyVault and pass it to the Batch AI Service to
   * integrate with KeyVault. One of accountKey or accountKeySecretReference
   * must be specified.
   * @member {object} [credentials.accountKeySecretReference.sourceVault]
   * @member {string} [credentials.accountKeySecretReference.sourceVault.id]
   * The ID of the resource
   * @member {string} [credentials.accountKeySecretReference.secretUrl]
   * @member {string} relativeMountPath Specifies the relative path on the
   * compute node where the Azure file share will be mounted. Note that all
   * cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT
   * location and all job level file shares will be mounted under
   * $AZ_BATCHAI_JOB_MOUNT_ROOT.
   * @member {string} [fileMode] Specifies the file mode. Default value is
   * 0777. Valid only if OS is linux. Default value: '0777' .
   * @member {string} [directoryMode] Specifies the directory Mode. Default
   * value is 0777. Valid only if OS is linux. Default value: '0777' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureFileShareReference
   *
   * @returns {object} metadata of AzureFileShareReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureFileShareReference',
      type: {
        name: 'Composite',
        className: 'AzureFileShareReference',
        modelProperties: {
          accountName: {
            required: true,
            serializedName: 'accountName',
            type: {
              name: 'String'
            }
          },
          azureFileUrl: {
            required: true,
            serializedName: 'azureFileUrl',
            type: {
              name: 'String'
            }
          },
          credentials: {
            required: true,
            serializedName: 'credentials',
            type: {
              name: 'Composite',
              className: 'AzureStorageCredentialsInfo'
            }
          },
          relativeMountPath: {
            required: true,
            serializedName: 'relativeMountPath',
            type: {
              name: 'String'
            }
          },
          fileMode: {
            required: false,
            serializedName: 'fileMode',
            defaultValue: '0777',
            type: {
              name: 'String'
            }
          },
          directoryMode: {
            required: false,
            serializedName: 'directoryMode',
            defaultValue: '0777',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureFileShareReference;
