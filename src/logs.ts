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
 * Represents a single Traffic Ops ChangeLog entry as returned by the `/logs`
 * endpoint of its API.
 */
export interface Log {
	readonly id: number;
	/**
	 * This is actually a string that represents a date/time, in a custom
	 * format. Refer to
	 * [the Traffic Ops API documentation](https://traffic-control-cdn.readthedocs.io/en/latest/api/index.html#traffic-ops-s-custom-date-time-format)
	 * for details.
	 */
	readonly lastUpdated: Date;
	/**
	 * @deprecated This field has no further use, and is subject to removal in
	 * the future.
	 */
	level: "APICHANGE";
	message: string;
	/**
	 * @deprecated This cannot be populated, and so should always be considered
	 * null, and is subject to removal in the future.
	 */
	readonly ticketNum: number | null;
	user: string;
}

/**
 * Converts a changelog entry to a string, suitable for use as a line in a
 * logfile.
 *
 * @example
 * const l = {
 * 	id: 1,
 * 	lastUpdated: new Date(0),
 * 	level: "APICHANGE",
 * 	message: "a message",
 * 	ticketNum: 2,
 * 	user: me
 * }
 *
 * console.log(logEntryToString(l));
 * // Output:
 * // #1 1970-01-01T00:00:00.000Z: me via APICHANGE (From Ticket #2): a message
 *
 * @param log The Log entry being formatted.
 * @returns A string representation of `log`.
 */
export function logEntryToString(log: Log): string {
	const {id, lastUpdated, level, message, ticketNum, user} = log;

	let ret = `#${id} ${lastUpdated.toISOString()}: ${user} via ${level}`;
	if (ticketNum !== null) {
		ret += ` (From Ticket #${ticketNum})`;
	}

	return `${ret}: ${message}`;
}

/**
 * Represents the response from the Traffic Ops API to a request made to its
 * `/logs/newcount` endpoint.
 */
export interface NewLogCount {
	newLogcount: number;
}
