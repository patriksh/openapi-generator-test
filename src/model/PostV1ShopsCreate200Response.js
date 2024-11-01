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
 * The PostV1ShopsCreate200Response model module.
 * @module model/PostV1ShopsCreate200Response
 * @version 1.0.0
 */
class PostV1ShopsCreate200Response {
    /**
     * Constructs a new <code>PostV1ShopsCreate200Response</code>.
     * @alias module:model/PostV1ShopsCreate200Response
     */
    constructor() { 
        
        PostV1ShopsCreate200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostV1ShopsCreate200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostV1ShopsCreate200Response} obj Optional instance to populate.
     * @return {module:model/PostV1ShopsCreate200Response} The populated <code>PostV1ShopsCreate200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostV1ShopsCreate200Response();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subdomain')) {
                obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_subscribed')) {
                obj['is_subscribed'] = ApiClient.convertToType(data['is_subscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('valid_payment_methods')) {
                obj['valid_payment_methods'] = ApiClient.convertToType(data['valid_payment_methods'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostV1ShopsCreate200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostV1ShopsCreate200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['subdomain'] && !(typeof data['subdomain'] === 'string' || data['subdomain'] instanceof String)) {
            throw new Error("Expected the field `subdomain` to be a primitive type in the JSON string but got " + data['subdomain']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['valid_payment_methods'])) {
            throw new Error("Expected the field `valid_payment_methods` to be an array in the JSON data but got " + data['valid_payment_methods']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
PostV1ShopsCreate200Response.prototype['name'] = undefined;

/**
 * @member {String} subdomain
 */
PostV1ShopsCreate200Response.prototype['subdomain'] = undefined;

/**
 * @member {Number} owner_id
 */
PostV1ShopsCreate200Response.prototype['owner_id'] = undefined;

/**
 * @member {Date} updated_at
 */
PostV1ShopsCreate200Response.prototype['updated_at'] = undefined;

/**
 * @member {Date} created_at
 */
PostV1ShopsCreate200Response.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
PostV1ShopsCreate200Response.prototype['id'] = undefined;

/**
 * @member {Boolean} is_subscribed
 */
PostV1ShopsCreate200Response.prototype['is_subscribed'] = undefined;

/**
 * @member {String} url
 */
PostV1ShopsCreate200Response.prototype['url'] = undefined;

/**
 * @member {Array.<String>} valid_payment_methods
 */
PostV1ShopsCreate200Response.prototype['valid_payment_methods'] = undefined;






export default PostV1ShopsCreate200Response;

