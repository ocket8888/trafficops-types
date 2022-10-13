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
 * Represents the SSL Keys for a Delivery Service within a CDN as presented by
 * Traffic Ops in its responses to requests made to its
 * `/cdns/name/{{name}}/sslkeys` API endpoint.
 */
export interface CDNDeliveryServiceSSLKeys {
	certificate: {
		crt: string;
		key: string;
	};
	deliveryservice: string;
}

/** Represents an SSL Key uploaded for a Delivery Service. */
export interface DeliveryServiceSSLKeyUpload {
	authType?: string | null;
	cdn: string;
	certificate: {
		/** Certificate */
		crt: string;
		/** Certificate Signing Request */
		csr: string;
		/** Private SSL Key */
		key: string;
	};
	deliveryservice: string;
	hostname: string;
	/**
	 * The XMLID of the Delivery Service that will use/is using this SSL
	 * certificate/key pair.
	 */
	key: string;
	version: string;
}

/**
 * Represents a request to have Traffic Ops generate an SSL Key/Certificate pair
 * for a Delivery Service.
 */
export interface DeliveryServiceSSLKeyGenerationRequest {
	businessUnit: string;
	cdn: string;
	city: string;
	country: string;
	hostname: string;
	/**
	 * The XMLID of the Delivery Service for which an SSL Key/Certificate pair
	 * will be generated.
	 */
	key: string;
	organization: string;
	state: string;
	version: string;
}

/**
 * Represents a request to have Traffic Ops generate an SSL Key/Certificate pair
 * for a Delivery Service using LetsEncrypt (or another configured ACME
 * service).
 */
export interface LetsEncryptDeliveryServiceSSLKeyGenerationRequest {
	cdn: string;
	deliveryservice: string;
	hostname: string;
	key: string;
	version: string;
}

/**
 * Represents a Delivery Service's SSL Key/Certificate pair as presented by
 * Traffic Ops in responses.
 */
export interface ResponseDeliveryServiceSSLKey {
	certificate: {
		crt: string;
		key: string;
		csr: string;
	};
	deliveryservice: string;
	cdn: string;
	businessUnit?: string;
	city?: string;
	organization?: string;
	hostname?: string;
	country?: string;
	state?: string;
	version: string;
	expiration: Date;
}
