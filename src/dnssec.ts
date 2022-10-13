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
 * Represents a request to generate DNSSEC Keys for a CDN.
 */
export interface CDNDNSSECKeyGenerationRequest {
	/** @default Date.now() */
	effectiveDate?: Date | null;
	/**
	 * This is actually the name of the CDN for which keys will be generated.
	 */
	key: string;
	kskExpirationDays: number;
	/** In seconds. */
	ttl: number;
	zskExpirationDays: number;
}

/**
 * Represents a request to generate a Key-Signing-Key (for DNSSEC) for a CDN.
 */
export interface CDNKSKGenerationRequest {
	/** @default Date.now() */
	effectiveDate?: Date | null;
	expirationDays: number;
}

/** CDNDNSSECKeys represents the DNSSEC Keys for a single CDN. */
export interface CDNDNSSECKeys {
	ksk: {
		expirationDate: Date;
		dsRecord?: {
			algorithm: string;
			digest: string;
			digestType: string;
		};
		inceptionDate: Date;
		name: string;
		private: string;
		public: string;
		ttl: number;
	};
	zsk: {
		expirationDate: Date;
		inceptionDate: Date;
		name: string;
		private: string;
		public: string;
		ttl: number;
	};
}
