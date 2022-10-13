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
 * Represents a Physical Location as returned by the Traffic Ops API in
 * responses.
 */
export interface ResponsePhysicalLocation {
	/** The Physical Location’s street address. */
	address: string;
	/** The name of the city in which the Physical Location lies. */
	city: string;
	/** Any and all human-readable comments. */
	comments: string | null;
	/** The email address of the Physical Location’s poc. */
	email: string | null;
	/** An integral, unique identifier for the Physical Location. */
	id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	/** The name of the Physical Location. */
	name: string;
	/** A phone number where the the Physical Location’s poc might be reached. */
	phone: string | null;
	/** The name of a “point of contact” for the Physical Location. */
	poc: string | null;
	/**
	 * The name of the region within which the Physical Location lies.
	 *
	 * This will be `null` in responses to PUT or POST requests which didn't
	 * specify it, or which explicitly specified it as `null`.
	 */
	region: string | null;
	/**
	 * An integral, unique identifier for the region within which the Physical
	 * Location lies.
	 */
	regionId: number;
	/** An abbreviation of the name. */
	shortName: string;
	/**
	 * An abbreviation (usually) of the name of the state or province within
	 * which this Physical Location lies.
	 */
	state: string;
	/** The zip code of the Physical Location. */
	zip: string;
}

/**
 * Represents a Physical Location as required by the Traffic Ops API in
 * requests.
 */
export interface RequestPhysicalLocation {
	/** The Physical Location’s street address. */
	address: string;
	/** The name of the city in which the Physical Location lies. */
	city: string;
	/** Any and all human-readable comments. */
	comments?: string | null;
	/** The email address of the Physical Location’s poc. */
	email?: string | null;
	/** The name of the Physical Location. */
	name: string;
	/** A phone number where the the Physical Location’s poc might be reached. */
	phone?: string | null;
	/** The name of a “point of contact” for the Physical Location. */
	poc?: string | null;
	/**
	 * An integral, unique identifier for the region within which the Physical
	 * Location lies.
	 */
	regionId: number;
	/** An abbreviation of the name. */
	shortName: string;
	/**
	 * An abbreviation (usually) of the name of the state or province within
	 * which this Physical Location lies.
	 */
	state: string;
	/** The zip code of the Physical Location. */
	zip: string;
}

/** Represents a Physical Location. */
export type PhysicalLocation = ResponsePhysicalLocation | RequestPhysicalLocation;
