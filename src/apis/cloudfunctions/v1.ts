/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudfunctions_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Cloud Functions API
   *
   * Manages lightweight user-provided functions executed in response to events.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudfunctions = google.cloudfunctions('v1');
   *
   * @namespace cloudfunctions
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Cloudfunctions
   */
  export class Cloudfunctions {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    operations: Resource$Operations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.operations = new Resource$Operations(this);
      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Request for the `CallFunction` method.
   */
  export interface Schema$CallFunctionRequest {
    /**
     * Input to be passed to the function.
     */
    data?: string;
  }
  /**
   * Response of `CallFunction` method.
   */
  export interface Schema$CallFunctionResponse {
    /**
     * Either system or user-function generated error. Set if execution was not
     * successful.
     */
    error?: string;
    /**
     * Execution id of function invocation.
     */
    executionId?: string;
    /**
     * Result populated for successful execution of synchronous function. Will
     * not be populated if function does not return a result through context.
     */
    result?: string;
  }
  /**
   * Describes a Cloud Function that contains user computation executed in
   * response to an event. It encapsulate function and triggers configurations.
   */
  export interface Schema$CloudFunction {
    /**
     * The amount of memory in MB available for a function. Defaults to 256MB.
     */
    availableMemoryMb?: number;
    /**
     * User-provided description of a function.
     */
    description?: string;
    /**
     * The name of the function (as defined in source code) that will be
     * executed. Defaults to the resource name suffix, if not specified. For
     * backward compatibility, if function with given name is not found, then
     * the system will try to use function named &quot;function&quot;. For
     * Node.js this is name of a function exported by the module specified in
     * `source_location`.
     */
    entryPoint?: string;
    /**
     * **Beta Feature**  Environment variables that shall be available during
     * function execution.
     */
    environmentVariables?: any;
    /**
     * A source that fires events in response to a condition in another service.
     */
    eventTrigger?: Schema$EventTrigger;
    /**
     * An HTTPS endpoint type of source that can be triggered via URL.
     */
    httpsTrigger?: Schema$HttpsTrigger;
    /**
     * Labels associated with this Cloud Function.
     */
    labels?: any;
    /**
     * The limit on the maximum number of function instances that may coexist at
     * a given time. This feature is currently in alpha, available only for
     * whitelisted users.
     */
    maxInstances?: number;
    /**
     * A user-defined name of the function. Function names must be unique
     * globally and match pattern `projects/x/locations/x/functions/x
     */
    name?: string;
    /**
     * The VPC Network that this cloud function can connect to. It can be either
     * the fully-qualified URI, or the short name of the network resource. If
     * the short network name is used, the network must belong to the same
     * project. Otherwise, it must belong to a project within the same
     * organization. The format of this field is either
     * `projects/{project}/global/networks/{network}` or `{network}`, where
     * {project} is a project id where the network is defined, and {network} is
     * the short name of the network.  See [the VPC
     * documentation](https://cloud.google.com/compute/docs/vpc) for more
     * information on connecting Cloud projects.  This feature is currently in
     * alpha, available only for whitelisted users.
     */
    network?: string;
    /**
     * The runtime in which the function is going to run. If empty, defaults to
     * Node.js 6.
     */
    runtime?: string;
    /**
     * Output only. The email of the function&#39;s service account.
     */
    serviceAccountEmail?: string;
    /**
     * The Google Cloud Storage URL, starting with gs://, pointing to the zip
     * archive which contains the function.
     */
    sourceArchiveUrl?: string;
    /**
     * **Beta Feature**  The source repository where a function is hosted.
     */
    sourceRepository?: Schema$SourceRepository;
    /**
     * The Google Cloud Storage signed URL used for source uploading, generated
     * by google.cloud.functions.v1.GenerateUploadUrl
     */
    sourceUploadUrl?: string;
    /**
     * Output only. Status of the function deployment.
     */
    status?: string;
    /**
     * The function execution timeout. Execution is considered failed and can be
     * terminated if the function is not completed at the end of the timeout
     * period. Defaults to 60 seconds.
     */
    timeout?: string;
    /**
     * Output only. The last update timestamp of a Cloud Function.
     */
    updateTime?: string;
    /**
     * Output only. The version identifier of the Cloud Function. Each
     * deployment attempt results in a new version of a function being created.
     */
    versionId?: string;
  }
  /**
   * Describes EventTrigger, used to request events be sent from another
   * service.
   */
  export interface Schema$EventTrigger {
    /**
     * Required. The type of event to observe. For example:
     * `providers/cloud.storage/eventTypes/object.change` and
     * `providers/cloud.pubsub/eventTypes/topic.publish`.  Event types match
     * pattern `providers/x/eventTypes/*.*`. The pattern contains:  1.
     * namespace: For example, `cloud.storage` and
     * `google.firebase.analytics`. 2. resource type: The type of resource on
     * which event occurs. For    example, the Google Cloud Storage API includes
     * the type `object`. 3. action: The action that generates the event. For
     * example, action for    a Google Cloud Storage Object is &#39;change&#39;.
     * These parts are lower case.
     */
    eventType?: string;
    /**
     * Specifies policy for failed executions.
     */
    failurePolicy?: Schema$FailurePolicy;
    /**
     * Required. The resource(s) from which to observe events, for example,
     * `projects/_/buckets/myBucket`.  Not all syntactically correct values are
     * accepted by all services. For example:  1. The authorization model must
     * support it. Google Cloud Functions    only allows EventTriggers to be
     * deployed that observe resources in the    same project as the
     * `CloudFunction`. 2. The resource type must match the pattern expected for
     * an    `event_type`. For example, an `EventTrigger` that has an
     * `event_type` of &quot;google.pubsub.topic.publish&quot; should have a
     * resource    that matches Google Cloud Pub/Sub topics.  Additionally, some
     * services may support short names when creating an `EventTrigger`. These
     * will always be returned in the normalized &quot;long&quot; format.  See
     * each *service&#39;s* documentation for supported formats.
     */
    resource?: string;
    /**
     * The hostname of the service that should be observed.  If no string is
     * provided, the default service implementing the API will be used. For
     * example, `storage.googleapis.com` is the default for all event types in
     * the `google.storage` namespace.
     */
    service?: string;
  }
  /**
   * Describes the policy in case of function&#39;s execution failure. If empty,
   * then defaults to ignoring failures (i.e. not retrying them).
   */
  export interface Schema$FailurePolicy {
    /**
     * If specified, then the function will be retried in case of a failure.
     */
    retry?: Schema$Retry;
  }
  /**
   * Request of `GenerateDownloadUrl` method.
   */
  export interface Schema$GenerateDownloadUrlRequest {
    /**
     * The optional version of function. If not set, default, current version is
     * used.
     */
    versionId?: string;
  }
  /**
   * Response of `GenerateDownloadUrl` method.
   */
  export interface Schema$GenerateDownloadUrlResponse {
    /**
     * The generated Google Cloud Storage signed URL that should be used for
     * function source code download.
     */
    downloadUrl?: string;
  }
  /**
   * Request of `GenerateSourceUploadUrl` method.
   */
  export interface Schema$GenerateUploadUrlRequest {}
  /**
   * Response of `GenerateSourceUploadUrl` method.
   */
  export interface Schema$GenerateUploadUrlResponse {
    /**
     * The generated Google Cloud Storage signed URL that should be used for a
     * function source code upload. The uploaded file should be a zip archive
     * which contains a function.
     */
    uploadUrl?: string;
  }
  /**
   * Describes HttpsTrigger, could be used to connect web hooks to function.
   */
  export interface Schema$HttpsTrigger {
    /**
     * Output only. The deployed url for the function.
     */
    url?: string;
  }
  /**
   * Response for the `ListFunctions` method.
   */
  export interface Schema$ListFunctionsResponse {
    /**
     * The functions that match the request.
     */
    functions?: Schema$CloudFunction[];
    /**
     * If not empty, indicates that there may be more functions that match the
     * request; this value should be passed in a new
     * google.cloud.functions.v1.ListFunctionsRequest to get more functions.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: any;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: any;
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
  /**
   * Metadata describing an Operation
   */
  export interface Schema$OperationMetadataV1 {
    /**
     * The original request that started the operation.
     */
    request?: any;
    /**
     * Target of the operation - for example
     * projects/project-1/locations/region-1/functions/function-1
     */
    target?: string;
    /**
     * Type of operation.
     */
    type?: string;
    /**
     * The last update timestamp of the operation.
     */
    updateTime?: string;
    /**
     * Version id of the function created or updated by an API call. This field
     * is only pupulated for Create and Update operations.
     */
    versionId?: string;
  }
  /**
   * Metadata describing an Operation
   */
  export interface Schema$OperationMetadataV1Beta2 {
    /**
     * The original request that started the operation.
     */
    request?: any;
    /**
     * Target of the operation - for example
     * projects/project-1/locations/region-1/functions/function-1
     */
    target?: string;
    /**
     * Type of operation.
     */
    type?: string;
    /**
     * The last update timestamp of the operation.
     */
    updateTime?: string;
    /**
     * Version id of the function created or updated by an API call. This field
     * is only pupulated for Create and Update operations.
     */
    versionId?: string;
  }
  /**
   * Describes the retry policy in case of function&#39;s execution failure. A
   * function execution will be retried on any failure. A failed execution will
   * be retried up to 7 days with an exponential backoff (capped at 10 seconds).
   * Retried execution is charged as any other execution.
   */
  export interface Schema$Retry {}
  /**
   * Describes SourceRepository, used to represent parameters related to source
   * repository where a function is hosted.
   */
  export interface Schema$SourceRepository {
    /**
     * Output only. The URL pointing to the hosted repository where the function
     * were defined at the time of deployment. It always points to a specific
     * commit in the format described above.
     */
    deployedUrl?: string;
    /**
     * The URL pointing to the hosted repository where the function is defined.
     * There are supported Cloud Source Repository URLs in the following
     * formats:  To refer to a specific commit:
     * `https://source.developers.google.com/projects/x/repos/x/revisions/x/paths/x
     * To refer to a moveable alias (branch):
     * `https://source.developers.google.com/projects/x/repos/x/moveable-aliases/x/paths/x
     * In particular, to refer to HEAD use `master` moveable alias. To refer to
     * a specific fixed alias (tag):
     * `https://source.developers.google.com/projects/x/repos/x/fixed-aliases/x/paths/x
     * You may omit `paths/x if you want to use the main directory.
     */
    url?: string;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }


  export class Resource$Operations {
    root: Cloudfunctions;
    constructor(root: Cloudfunctions) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudfunctions.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias cloudfunctions.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * cloudfunctions.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @alias cloudfunctions.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string=} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Operations$List, options?: MethodOptions):
        AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/operations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }


  export class Resource$Projects {
    root: Cloudfunctions;
    locations: Resource$Projects$Locations;
    constructor(root: Cloudfunctions) {
      this.root = root;
      this.getRoot.bind(this);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations {
    root: Cloudfunctions;
    functions: Resource$Projects$Locations$Functions;
    constructor(root: Cloudfunctions) {
      this.root = root;
      this.getRoot.bind(this);
      this.functions = new Resource$Projects$Locations$Functions(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudfunctions.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias cloudfunctions.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations
     *     collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|AxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/locations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Functions {
    root: Cloudfunctions;
    constructor(root: Cloudfunctions) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudfunctions.projects.locations.functions.call
     * @desc Invokes synchronously deployed function. To be used for testing,
     * very limited traffic allowed.
     * @alias cloudfunctions.projects.locations.functions.call
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the function to be called.
     * @param {().CallFunctionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    call(
        params?: Params$Resource$Projects$Locations$Functions$Call,
        options?: MethodOptions): AxiosPromise<Schema$CallFunctionResponse>;
    call(
        params: Params$Resource$Projects$Locations$Functions$Call,
        options: MethodOptions|
        BodyResponseCallback<Schema$CallFunctionResponse>,
        callback: BodyResponseCallback<Schema$CallFunctionResponse>): void;
    call(
        params: Params$Resource$Projects$Locations$Functions$Call,
        callback: BodyResponseCallback<Schema$CallFunctionResponse>): void;
    call(callback: BodyResponseCallback<Schema$CallFunctionResponse>): void;
    call(
        paramsOrCallback?: Params$Resource$Projects$Locations$Functions$Call|
        BodyResponseCallback<Schema$CallFunctionResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CallFunctionResponse>,
        callback?: BodyResponseCallback<Schema$CallFunctionResponse>):
        void|AxiosPromise<Schema$CallFunctionResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Call;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Functions$Call;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:call').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CallFunctionResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CallFunctionResponse>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.create
     * @desc Creates a new function. If a function with the given name already
     * exists in the specified project, the long running operation will return
     * `ALREADY_EXISTS` error.
     * @alias cloudfunctions.projects.locations.functions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.location The project and location in which the
     *     function should be created, specified in the format
     *     `projects/x/locations/x`
     * @param {().CloudFunction} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Functions$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Locations$Functions$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Locations$Functions$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Functions$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Functions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+location}/functions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.delete
     * @desc Deletes a function with the given name from the specified project.
     * If the given function is used by some trigger, the trigger will be
     * updated to remove this function.
     * @alias cloudfunctions.projects.locations.functions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the function which should be
     *     deleted.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Functions$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Projects$Locations$Functions$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Projects$Locations$Functions$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Locations$Functions$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Functions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.generateDownloadUrl
     * @desc Returns a signed URL for downloading deployed function source code.
     * The URL is only valid for a limited period and should be used within
     * minutes after generation. For more information about the signed URL usage
     * see: https://cloud.google.com/storage/docs/access-control/signed-urls
     * @alias cloudfunctions.projects.locations.functions.generateDownloadUrl
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of function for which source code
     *     Google Cloud Storage signed URL should be generated.
     * @param {().GenerateDownloadUrlRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateDownloadUrl(
        params?:
            Params$Resource$Projects$Locations$Functions$Generatedownloadurl,
        options?: MethodOptions):
        AxiosPromise<Schema$GenerateDownloadUrlResponse>;
    generateDownloadUrl(
        params:
            Params$Resource$Projects$Locations$Functions$Generatedownloadurl,
        options: MethodOptions|
        BodyResponseCallback<Schema$GenerateDownloadUrlResponse>,
        callback: BodyResponseCallback<Schema$GenerateDownloadUrlResponse>):
        void;
    generateDownloadUrl(
        params:
            Params$Resource$Projects$Locations$Functions$Generatedownloadurl,
        callback: BodyResponseCallback<Schema$GenerateDownloadUrlResponse>):
        void;
    generateDownloadUrl(
        callback: BodyResponseCallback<Schema$GenerateDownloadUrlResponse>):
        void;
    generateDownloadUrl(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Functions$Generatedownloadurl|
        BodyResponseCallback<Schema$GenerateDownloadUrlResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GenerateDownloadUrlResponse>,
        callback?: BodyResponseCallback<Schema$GenerateDownloadUrlResponse>):
        void|AxiosPromise<Schema$GenerateDownloadUrlResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Generatedownloadurl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Functions$Generatedownloadurl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:generateDownloadUrl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GenerateDownloadUrlResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GenerateDownloadUrlResponse>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.generateUploadUrl
     * @desc Returns a signed URL for uploading a function source code. For more
     * information about the signed URL usage see:
     * https://cloud.google.com/storage/docs/access-control/signed-urls. Once
     * the function source code upload is complete, the used signed URL should
     * be provided in CreateFunction or UpdateFunction request as a reference to
     * the function source code.  When uploading source code to the generated
     * signed URL, please follow these restrictions:  * Source file type should
     * be a zip file. * Source file size should not exceed 100MB limit.  When
     * making a HTTP PUT request, these two headers need to be specified:  *
     * `content-type: application/zip` * `x-goog-content-length-range:
     * 0,104857600`
     * @alias cloudfunctions.projects.locations.functions.generateUploadUrl
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project and location in which the
     *     Google Cloud Storage signed URL should be generated, specified in the
     *     format `projects/x/locations/x`.
     * @param {().GenerateUploadUrlRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generateUploadUrl(
        params?: Params$Resource$Projects$Locations$Functions$Generateuploadurl,
        options?: MethodOptions):
        AxiosPromise<Schema$GenerateUploadUrlResponse>;
    generateUploadUrl(
        params: Params$Resource$Projects$Locations$Functions$Generateuploadurl,
        options: MethodOptions|
        BodyResponseCallback<Schema$GenerateUploadUrlResponse>,
        callback: BodyResponseCallback<Schema$GenerateUploadUrlResponse>): void;
    generateUploadUrl(
        params: Params$Resource$Projects$Locations$Functions$Generateuploadurl,
        callback: BodyResponseCallback<Schema$GenerateUploadUrlResponse>): void;
    generateUploadUrl(
        callback: BodyResponseCallback<Schema$GenerateUploadUrlResponse>): void;
    generateUploadUrl(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Functions$Generateuploadurl|
        BodyResponseCallback<Schema$GenerateUploadUrlResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GenerateUploadUrlResponse>,
        callback?: BodyResponseCallback<Schema$GenerateUploadUrlResponse>):
        void|AxiosPromise<Schema$GenerateUploadUrlResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Generateuploadurl;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Functions$Generateuploadurl;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/functions:generateUploadUrl')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GenerateUploadUrlResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GenerateUploadUrlResponse>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.get
     * @desc Returns a function with the given name from the requested project.
     * @alias cloudfunctions.projects.locations.functions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the function which details should
     *     be obtained.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Functions$Get,
        options?: MethodOptions): AxiosPromise<Schema$CloudFunction>;
    get(params: Params$Resource$Projects$Locations$Functions$Get,
        options: MethodOptions|BodyResponseCallback<Schema$CloudFunction>,
        callback: BodyResponseCallback<Schema$CloudFunction>): void;
    get(params: Params$Resource$Projects$Locations$Functions$Get,
        callback: BodyResponseCallback<Schema$CloudFunction>): void;
    get(callback: BodyResponseCallback<Schema$CloudFunction>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Functions$Get|
        BodyResponseCallback<Schema$CloudFunction>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CloudFunction>,
        callback?: BodyResponseCallback<Schema$CloudFunction>):
        void|AxiosPromise<Schema$CloudFunction> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Functions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CloudFunction>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CloudFunction>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.list
     * @desc Returns a list of functions that belong to the requested project.
     * @alias cloudfunctions.projects.locations.functions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of functions to return
     *     per call.
     * @param {string=} params.pageToken The value returned by the last
     *     `ListFunctionsResponse`; indicates that this is a continuation of a
     *     prior `ListFunctions` call, and that the system should return the
     *     next page of data.
     * @param {string} params.parent The project and location from which the
     *     function should be listed, specified in the format
     *     `projects/x/locations/x` If you want to list functions in all
     *     locations, use "-" in place of a location.
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Functions$List,
        options?: MethodOptions): AxiosPromise<Schema$ListFunctionsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Functions$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFunctionsResponse>,
        callback: BodyResponseCallback<Schema$ListFunctionsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Functions$List,
        callback: BodyResponseCallback<Schema$ListFunctionsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListFunctionsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Functions$List|
        BodyResponseCallback<Schema$ListFunctionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFunctionsResponse>,
        callback?: BodyResponseCallback<Schema$ListFunctionsResponse>):
        void|AxiosPromise<Schema$ListFunctionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Functions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/functions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFunctionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFunctionsResponse>(parameters);
      }
    }


    /**
     * cloudfunctions.projects.locations.functions.patch
     * @desc Updates existing function.
     * @alias cloudfunctions.projects.locations.functions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A user-defined name of the function. Function
     *     names must be unique globally and match pattern
     *     `projects/x/locations/x/functions/x`
     * @param {string=} params.updateMask Required list of fields to be updated
     *     in this request.
     * @param {().CloudFunction} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as
     *     `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Locations$Functions$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Projects$Locations$Functions$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Projects$Locations$Functions$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Locations$Functions$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Functions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Functions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudfunctions.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Functions$Call {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the function to be called.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CallFunctionRequest;
  }
  export interface Params$Resource$Projects$Locations$Functions$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project and location in which the function should be created,
     * specified in the format `projects/x/locations/x`
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloudFunction;
  }
  export interface Params$Resource$Projects$Locations$Functions$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the function which should be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Functions$Generatedownloadurl {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of function for which source code Google Cloud Storage signed
     * URL should be generated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateDownloadUrlRequest;
  }
  export interface Params$Resource$Projects$Locations$Functions$Generateuploadurl {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project and location in which the Google Cloud Storage signed URL
     * should be generated, specified in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateUploadUrlRequest;
  }
  export interface Params$Resource$Projects$Locations$Functions$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the function which details should be obtained.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Functions$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Maximum number of functions to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListFunctionsResponse`; indicates that
     * this is a continuation of a prior `ListFunctions` call, and that the
     * system should return the next page of data.
     */
    pageToken?: string;
    /**
     * The project and location from which the function should be listed,
     * specified in the format `projects/x/locations/x` If you want to list
     * functions in all locations, use "-" in place of a location.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Functions$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A user-defined name of the function. Function names must be unique
     * globally and match pattern `projects/x/locations/x/functions/x`
     */
    name?: string;
    /**
     * Required list of fields to be updated in this request.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloudFunction;
  }
}
