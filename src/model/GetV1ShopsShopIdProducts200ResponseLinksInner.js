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
 * The GetV1ShopsShopIdProducts200ResponseLinksInner model module.
 * @module model/GetV1ShopsShopIdProducts200ResponseLinksInner
 * @version 1.0.0
 */
class GetV1ShopsShopIdProducts200ResponseLinksInner {
    /**
     * Constructs a new <code>GetV1ShopsShopIdProducts200ResponseLinksInner</code>.
     * @alias module:model/GetV1ShopsShopIdProducts200ResponseLinksInner
     */
    constructor() { 
        
        GetV1ShopsShopIdProducts200ResponseLinksInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdProducts200ResponseLinksInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdProducts200ResponseLinksInner} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdProducts200ResponseLinksInner} The populated <code>GetV1ShopsShopIdProducts200ResponseLinksInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdProducts200ResponseLinksInner();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdProducts200ResponseLinksInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdProducts200ResponseLinksInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }

        return true;
    }


}



/**
 * @member {String} url
 */
GetV1ShopsShopIdProducts200ResponseLinksInner.prototype['url'] = undefined;

/**
 * @member {String} label
 */
GetV1ShopsShopIdProducts200ResponseLinksInner.prototype['label'] = undefined;

/**
 * @member {Boolean} active
 */
GetV1ShopsShopIdProducts200ResponseLinksInner.prototype['active'] = undefined;






export default GetV1ShopsShopIdProducts200ResponseLinksInner;
