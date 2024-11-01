/**
 * SellAuth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ThemeOfficialTheme model module.
 * @module model/ThemeOfficialTheme
 * @version 1.0.0
 */
class ThemeOfficialTheme {
    /**
     * Constructs a new <code>ThemeOfficialTheme</code>.
     * @alias module:model/ThemeOfficialTheme
     */
    constructor() { 
        
        ThemeOfficialTheme.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThemeOfficialTheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThemeOfficialTheme} obj Optional instance to populate.
     * @return {module:model/ThemeOfficialTheme} The populated <code>ThemeOfficialTheme</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThemeOfficialTheme();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('changelog')) {
                obj['changelog'] = ApiClient.convertToType(data['changelog'], ['String']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThemeOfficialTheme</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThemeOfficialTheme</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['changelog'])) {
            throw new Error("Expected the field `changelog` to be an array in the JSON data but got " + data['changelog']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ThemeOfficialTheme.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ThemeOfficialTheme.prototype['name'] = undefined;

/**
 * @member {Array.<String>} changelog
 */
ThemeOfficialTheme.prototype['changelog'] = undefined;

/**
 * @member {Number} price
 */
ThemeOfficialTheme.prototype['price'] = undefined;






export default ThemeOfficialTheme;
