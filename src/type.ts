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
 * TypeFromResponse represents a Type as shown in the responses from the API.
 *
 * This breaks the naming convention used in the rest of this library because
 * ResponseType is already a global type in browsers and NodeJS.
 */
export interface TypeFromResponse {
	description: string;
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	name: string;
	useInTable: string;
}

/** RequestType represents a Type as given in requests to the API. */
export interface RequestType {
	description: string;
	name: string;
	/**
	 * In practice this is limited to "server" and "cachegroup".
	 */
	useInTable: string;
}

/** Type generically represents a Type in the context of an API request or response.  */
export type Type = TypeFromResponse | RequestType;
