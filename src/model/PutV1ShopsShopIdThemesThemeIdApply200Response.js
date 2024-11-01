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
 * The PutV1ShopsShopIdThemesThemeIdApply200Response model module.
 * @module model/PutV1ShopsShopIdThemesThemeIdApply200Response
 * @version 1.0.0
 */
class PutV1ShopsShopIdThemesThemeIdApply200Response {
    /**
     * Constructs a new <code>PutV1ShopsShopIdThemesThemeIdApply200Response</code>.
     * @alias module:model/PutV1ShopsShopIdThemesThemeIdApply200Response
     */
    constructor() { 
        
        PutV1ShopsShopIdThemesThemeIdApply200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutV1ShopsShopIdThemesThemeIdApply200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutV1ShopsShopIdThemesThemeIdApply200Response} obj Optional instance to populate.
     * @return {module:model/PutV1ShopsShopIdThemesThemeIdApply200Response} The populated <code>PutV1ShopsShopIdThemesThemeIdApply200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutV1ShopsShopIdThemesThemeIdApply200Response();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PutV1ShopsShopIdThemesThemeIdApply200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PutV1ShopsShopIdThemesThemeIdApply200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {String} message
 */
PutV1ShopsShopIdThemesThemeIdApply200Response.prototype['message'] = undefined;






export default PutV1ShopsShopIdThemesThemeIdApply200Response;
