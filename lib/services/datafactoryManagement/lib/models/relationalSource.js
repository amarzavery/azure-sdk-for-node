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
 * A copy activity source for various relational databases.
 *
 * @extends models['CopySource']
 */
class RelationalSource extends models['CopySource'] {
  /**
   * Create a RelationalSource.
   * @member {object} [query] Database query. Type: string (or Expression with
   * resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RelationalSource
   *
   * @returns {object} metadata of RelationalSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RelationalSource',
      type: {
        name: 'Composite',
        className: 'RelationalSource',
        modelProperties: {
          sourceRetryCount: {
            required: false,
            serializedName: 'sourceRetryCount',
            type: {
              name: 'Object'
            }
          },
          sourceRetryWait: {
            required: false,
            serializedName: 'sourceRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          query: {
            required: false,
            serializedName: 'query',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = RelationalSource;