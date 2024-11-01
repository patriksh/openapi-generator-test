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
 * The PostV1ShopsShopIdBlacklistRequest model module.
 * @module model/PostV1ShopsShopIdBlacklistRequest
 * @version 1.0.0
 */
class PostV1ShopsShopIdBlacklistRequest {
    /**
     * Constructs a new <code>PostV1ShopsShopIdBlacklistRequest</code>.
     * @alias module:model/PostV1ShopsShopIdBlacklistRequest
     * @param value {String} 
     * @param type {module:model/PostV1ShopsShopIdBlacklistRequest.TypeEnum} 
     */
    constructor(value, type) { 
        
        PostV1ShopsShopIdBlacklistRequest.initialize(this, value, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, type) { 
        obj['value'] = value;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PostV1ShopsShopIdBlacklistRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostV1ShopsShopIdBlacklistRequest} obj Optional instance to populate.
     * @return {module:model/PostV1ShopsShopIdBlacklistRequest} The populated <code>PostV1ShopsShopIdBlacklistRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostV1ShopsShopIdBlacklistRequest();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostV1ShopsShopIdBlacklistRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostV1ShopsShopIdBlacklistRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PostV1ShopsShopIdBlacklistRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }

        return true;
    }


}

PostV1ShopsShopIdBlacklistRequest.RequiredProperties = ["value", "type"];

/**
 * 
 * @member {String} value
 */
PostV1ShopsShopIdBlacklistRequest.prototype['value'] = undefined;

/**
 * 
 * @member {module:model/PostV1ShopsShopIdBlacklistRequest.TypeEnum} type
 */
PostV1ShopsShopIdBlacklistRequest.prototype['type'] = undefined;

/**
 * 
 * @member {String} reason
 */
PostV1ShopsShopIdBlacklistRequest.prototype['reason'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PostV1ShopsShopIdBlacklistRequest['TypeEnum'] = {

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "ip"
     * @const
     */
    "ip": "ip"
};



export default PostV1ShopsShopIdBlacklistRequest;

