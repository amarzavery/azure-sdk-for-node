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
 * The artifact properties definition.
 *
 */
class ArtifactProperties {
  /**
   * Create a ArtifactProperties.
   * @member {date} [createdTime] The artifact creation time.
   * @member {date} [changedTime] The artifact changed time.
   * @member {object} [metadata]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ArtifactProperties
   *
   * @returns {object} metadata of ArtifactProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArtifactProperties',
      type: {
        name: 'Composite',
        className: 'ArtifactProperties',
        modelProperties: {
          createdTime: {
            required: false,
            serializedName: 'createdTime',
            type: {
              name: 'DateTime'
            }
          },
          changedTime: {
            required: false,
            serializedName: 'changedTime',
            type: {
              name: 'DateTime'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = ArtifactProperties;