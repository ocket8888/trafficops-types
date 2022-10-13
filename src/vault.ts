/**
 * @license Apache-2.0
 *
 * Copyright 2022 ocket8888
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The type of a response from the `vault/ping` endpoint of the Traffic Ops API.
 */
export interface VaultPing {
	status: string;
	server: string;
}

/**
 * The type of a response from the `vault/bucket/{{bucket}}/key/{{key}}/values`
 * endpoint of the Traffic Ops API.
 *
 * @deprecated This representation is extremely tightly coupled with the
 * deprecated Riak backend Traffic Vault provider, and has been removed from the
 * latest API version.
 */
export interface BucketValues {
	[bucket: string]: unknown;
}
