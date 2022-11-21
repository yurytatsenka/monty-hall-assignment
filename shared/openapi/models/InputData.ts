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
/**
 * holds the settings for the games simulation
 * @export
 * @interface InputData
 */
export interface InputData {
    /**
     * number of games to be simulated
     * @type {number}
     * @memberof InputData
     */
    countOfGames: number;
    /**
     * whether door is to be changed for each game simulation
     * @type {boolean}
     * @memberof InputData
     */
    shouldChangeDoor: boolean;
}

/**
 * Check if a given object implements the InputData interface.
 */
export function instanceOfInputData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "countOfGames" in value;
    isInstance = isInstance && "shouldChangeDoor" in value;

    return isInstance;
}

export function InputDataFromJSON(json: any): InputData {
    return InputDataFromJSONTyped(json, false);
}

export function InputDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InputData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countOfGames': json['countOfGames'],
        'shouldChangeDoor': json['shouldChangeDoor'],
    };
}

export function InputDataToJSON(value?: InputData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countOfGames': value.countOfGames,
        'shouldChangeDoor': value.shouldChangeDoor,
    };
}
