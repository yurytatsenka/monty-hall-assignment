/* tslint:disable */
/* eslint-disable */
/**
 * API for MontyHall
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InputData } from './InputData';
import {
    InputDataFromJSON,
    InputDataFromJSONTyped,
    InputDataToJSON,
} from './InputData';

/**
 * holds the values for simulate games request
 * @export
 * @interface SimulateGamesRequest
 */
export interface SimulateGamesRequest {
    /**
     * 
     * @type {InputData}
     * @memberof SimulateGamesRequest
     */
    inputData: InputData;
}

/**
 * Check if a given object implements the SimulateGamesRequest interface.
 */
export function instanceOfSimulateGamesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "inputData" in value;

    return isInstance;
}

export function SimulateGamesRequestFromJSON(json: any): SimulateGamesRequest {
    return SimulateGamesRequestFromJSONTyped(json, false);
}

export function SimulateGamesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimulateGamesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inputData': InputDataFromJSON(json['inputData']),
    };
}

export function SimulateGamesRequestToJSON(value?: SimulateGamesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inputData': InputDataToJSON(value.inputData),
    };
}

