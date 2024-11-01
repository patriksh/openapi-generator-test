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
import PostV1ShopsShopIdPayoutsPayout200ResponsePayout from './PostV1ShopsShopIdPayoutsPayout200ResponsePayout';

/**
 * The PostV1ShopsShopIdPayoutsPayout200Response model module.
 * @module model/PostV1ShopsShopIdPayoutsPayout200Response
 * @version 1.0.0
 */
class PostV1ShopsShopIdPayoutsPayout200Response {
    /**
     * Constructs a new <code>PostV1ShopsShopIdPayoutsPayout200Response</code>.
     * @alias module:model/PostV1ShopsShopIdPayoutsPayout200Response
     */
    constructor() { 
        
        PostV1ShopsShopIdPayoutsPayout200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostV1ShopsShopIdPayoutsPayout200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostV1ShopsShopIdPayoutsPayout200Response} obj Optional instance to populate.
     * @return {module:model/PostV1ShopsShopIdPayoutsPayout200Response} The populated <code>PostV1ShopsShopIdPayoutsPayout200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostV1ShopsShopIdPayoutsPayout200Response();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('payout')) {
                obj['payout'] = PostV1ShopsShopIdPayoutsPayout200ResponsePayout.constructFromObject(data['payout']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostV1ShopsShopIdPayoutsPayout200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostV1ShopsShopIdPayoutsPayout200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // validate the optional field `payout`
        if (data['payout']) { // data not null
          PostV1ShopsShopIdPayoutsPayout200ResponsePayout.validateJSON(data['payout']);
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
PostV1ShopsShopIdPayoutsPayout200Response.prototype['success'] = undefined;

/**
 * @member {String} message
 */
PostV1ShopsShopIdPayoutsPayout200Response.prototype['message'] = undefined;

/**
 * @member {module:model/PostV1ShopsShopIdPayoutsPayout200ResponsePayout} payout
 */
PostV1ShopsShopIdPayoutsPayout200Response.prototype['payout'] = undefined;






export default PostV1ShopsShopIdPayoutsPayout200Response;

