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
 * Represents a Coordinate as Traffic Ops requires it in requests made to the
 * `/coordinates` endpoint of its API.
 */
export interface RequestCoordinate {
	latitude: number;
	longitude: number;
	name: string;
}

/**
 * Represents a Coordinate as presented by Traffic Ops in responses from the
 * `/coordinates` endpoint of its API.
 */
export interface ResponseCoordinate {
	readonly id: number;
	readonly lastUpdated: Date;
	latitude: number;
	longitude: number;
	name: string;
}

/** Represents a Coordinate in an arbitrary context. */
export type Coordinate = RequestCoordinate | ResponseCoordinate;
