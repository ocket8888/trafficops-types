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
 * Represents a mapping of a Traffic Ops API route to a Capability it might
 * require. These cannot be modified through the API.
 *
 * @deprecated These supposed restrictions have never been and never will be
 * enforced at any level. Capabilities as a concept have been removed/reworked
 * in the latest version of the API, and the Traffic Ops API route that used to
 * expose this structure has been removed.
 */
export interface APICapability {
	readonly capability: string;
	readonly httpRoute: string;
	readonly id: number;
	readonly lastUpdated: Date;
	readonly method: "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
}

/**
 * A Capability represents permission to use an HTTP request method on a Traffic
 * Ops API endpoint. As of ATCv6, these are not modifiable through the API.
 *
 * @deprecated These supposed restrictions have never been and never will be
 * enforced at any level. Capabilities as a concept have been removed/reworked
 * in the latest version of the API, and the Traffic Ops API route that used to
 * expose this structure has been removed.
 */
export interface Capability {
	readonly description: string;
	readonly lastUpdated: Date;
	readonly name: string;
}
