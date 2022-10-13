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
 * Represents a Division as required by the Traffic Ops API in requests.
 */
export interface RequestDivision {
	name: string;
}

/**
 * Represents a Division as returned by the Traffic Ops API in responses.
 */
export interface ResponseDivision {
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/** Representns a Division. */
export type Division = RequestDivision | ResponseDivision;

/**
 * Represents a Region as required by the Traffic Ops API in requests.
 */
export interface RequestRegion {
	division: number;
	name: string;
}

/**
 * Represents a Region as returned by the Traffic Ops API in responses.
 */
export interface ResponseRegion {
	division: number;
	divisionName: string;
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/** Represents a Region. */
export type Region = RequestRegion | ResponseRegion;
