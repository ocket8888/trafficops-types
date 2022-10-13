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
 * Represents all of the information necessary to route a steered Delivery
 * Service.
 */
export interface SteeringConfiguration {
	clientSteering: boolean;
	/**
	 * The XMLID of the Delivery Service for which this configuration was made.
	 */
	deliveryService: string;
	filters: Array<{
		/** The XMLID of a target Delivery Service. */
		deliveryService: string;
		pattern: string;
	}>;
	targets: Array<{
		/** The XMLID of a target Delivery Service. */
		deliveryService: string;
		order: number;
		weight: number;
	}>;
}

/**
 * Represents a Steering Target as Traffic Ops requires it in requests used to
 * modify existing Steering Targets.
 */
export interface SteeringTargetModificationRequest {
	typeId: number;
	value: number;
}

/**
 * Represents a Steering Target as Traffic Ops requires it in requests used to
 * create new Steering Targets.
 */
export interface SteeringTargetCreationRequest extends SteeringTargetModificationRequest {
	targetId: number;
}

/** Represents a Steering Target as Traffic Ops requires it in requests. */
export type RequestSteeringTarget = SteeringTargetModificationRequest | SteeringTargetCreationRequest;

/**
 * Represents a Steering Target as Traffic Ops presents it in responses.
 */
export interface ResponseSteeringTarget extends SteeringTargetCreationRequest {
	deliveryservice: string;
	deliveryserviceId: number;
	target: string;
	type: string;
}

/**
 * A Steering Target is a configuration for the targeting of a specific
 * downstream Delivery Service by a Steering "parent" Delivery Service.
 */
export type SteeringTarget = RequestSteeringTarget | ResponseSteeringTarget;
