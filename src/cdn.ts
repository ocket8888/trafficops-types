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
 * Represents a CDN as required by the Traffic Ops API in requests.
 */
export interface RequestCDN {
	/** Whether or not DNSSEC is enabled within this CDN. */
	dnssecEnabled: boolean;
	/** The Top-Level Domain within which the CDN operates. */
	domainName:    string;
	/** The name of the CDN. */
	name:          string;
}

/**
 * Represents a CDN as returned by the Traffic Ops API in responses.
 */
export interface ResponseCDN {
	dnssecEnabled: boolean;
	domainName: string;
	readonly id: number;
	readonly lastUpdated: Date;
	name: string;
}

/** Represents a CDN. */
export type CDN = RequestCDN | ResponseCDN;

/**
 * Represents an association between a CDN's DNS domain and the Profile of the
 * Traffic Router(s) that service it.
 */
export interface CDNDomain {
	domainName: string;
	profileId: number;
	parameterId: number;
	profileName: string;
	profileDescription: string;
}
