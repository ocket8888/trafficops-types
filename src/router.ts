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
 * Represents a Consistent Hashing Regular Expression and a sample route
 * submitted to the API to test how it would be routed.
 */
export interface ConsistentHashRegexTest {
	cdnId: number;
	regex: string;
	requestPath: string;
}

/**
 * Represents the result of a test routing of a Consistent Hashing Regular
 * Expression.
 */
export interface ConsistentHashRegexTestResult {
	resultingPathToConsistentHash: string;
	consistentHashRegex: string;
	requestPath: string;
}
