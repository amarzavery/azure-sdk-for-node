import * as stream from 'stream';
import * as http from 'http';

/**
 * REST request options
 *  
 * @property {Object.<string, string>} customHeaders - Any additional HTTP headers to be added to the request
 * @proprerty {boolean} jar - If true, remember cookies for future use
 */
export interface RequestOptions {
  customHeaders?: { [headerName: string]: string; };
  jar: boolean;
}

/**
 * HttpOperationResponse wrapper that provides the raw request, raw response and the deserialized response body.
 * 
 * @property {WebResource} request  - The raw request object
 * @property {stream} response - The response stream
 * @property {T} body - The deserialized response body of the expected type.
 */
export interface HttpOperationResponse<T> {
  request: WebResource;
  response: stream;
  body: T;
};

/**
 * Service client options, used for all REST requests initiated by the service client.
 * 
 * @property {Array} [filters]                  - Filters to be added to the request pipeline
 * @property {RequestOptions} requestOptions    - Default RequestOptions to use for requests 
 * @property {boolean}  noRetryPolicy           - If set to true, turn off default retry policy
 */
export interface ServiceClientOptions {
  filters?: any[];
  requestOptions?: RequestOptions;
  noRetryPolicy?: boolean;
}

export class ServiceClient {
  /**
   * Initializes a new instance of the ServiceClient class.
   *
   * @param {ServiceClientCredentials} [credentials]    - BasicAuthenticationCredentials or 
   * TokenCredentials object used for authentication. 
   * @param {ServiceClientOptions} [options] The parameter options
   */
  constructor(credentials?: ServiceClientCredentials, options?: ServiceClientOptions);
}

/**
 * Service Error that is returned when an error occurrs in executing the REST request initiated by the service client.
 * 
 * @property {number} [statusCode]             - The response status code received from the server as a result of making the request.
 * @property {WebResource} request             - The raw/actual request sent to the server.
 * @property {http.IncomingMessage}  response  - The raw/actual response from the server.
 * @property {any}  body                       - The response body.
 */
export interface ServiceError extends Error {
  statusCode: number;
  request: WebResource;
  response: http.IncomingMessage;
  body: any;
}

/**
 * Service callback that is returned for REST requests initiated by the service client.
 * 
 * @property {Error|ServiceError} err         - The error occurred if any, while executing the request; otherwise null
 * @property {TResult} result                 - The deserialized response body if an error did not occur.
 * @property {WebResource}  request           - The raw/actual request sent to the server if an error did not occur.
 * @property {http.IncomingMessage} response  - The raw/actual response from the server if an error did not occur.
 */
export interface ServiceCallback<TResult> { (err: Error|ServiceError, result?: TResult, request?: WebResource, response?: http.IncomingMessage): void }

/**
 * Creates a new 'ExponentialRetryPolicyFilter' instance.
 *
 * @constructor
 * @param {number} retryCount        The client retry count.
 * @param {number} retryInterval     The client retry interval, in milliseconds.
 * @param {number} minRetryInterval  The minimum retry interval, in milliseconds.
 * @param {number} maxRetryInterval  The maximum retry interval, in milliseconds.
 */
export class ExponentialRetryPolicyFilter {
  constructor(retryCount: number, retryInterval: number, minRetryInterval: number, maxRetryInterval: number);
}

/**
 * This class provides an abstraction over a REST call by being library / implementation agnostic and wrapping the necessary
 * properties to initiate a request.
 */
export class WebResource {
  constructor();

  /**
   * Hook up the given input stream to a destination output stream if the WebResource method
   * requires a request body and a body is not already set.
   *
   * @param {Stream} inputStream the stream to pipe from
   * @param {Stream} outputStream the stream to pipe to
   *
   * @return destStream
   */
  pipeInput(inputStream: stream.Readable, destStream: stream.Writable): stream.Writable;
}

export class ServiceClientCredentials {
  /**
   * Signs a request with the Authentication header.
   *
   * @param {WebResource} The WebResource to be signed.
   * @param {function(error)}  callback  The callback function.
   */
  signRequest(webResource: WebResource, callback: { (err: Error): void }): void;
}


export class TokenCredentials extends ServiceClientCredentials {
  /**
   * Creates a new TokenCredentials object.
   *
   * @constructor
   * @param {string} token               The token.
   * @param {string} authorizationScheme The authorization scheme. If not specified, the default of 'Bearer" is used.
   */
  constructor(token: string, authorizationScheme?: string);
}

export class BasicAuthenticationCredentials extends ServiceClientCredentials {
  /**
   * Creates a new BasicAuthenticationCredentials object.
   *
   * @constructor
   * @param {string} userName                 User name.
   * @param {string} password                 Password.
   * @param {string} [authorizationScheme]    The authorization scheme. Default ('Basic')
   */
  constructor(userName: string, password: string, authorizationScheme?: string);
}