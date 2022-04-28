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