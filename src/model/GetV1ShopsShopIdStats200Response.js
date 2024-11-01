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
 * The GetV1ShopsShopIdStats200Response model module.
 * @module model/GetV1ShopsShopIdStats200Response
 * @version 1.0.0
 */
class GetV1ShopsShopIdStats200Response {
    /**
     * Constructs a new <code>GetV1ShopsShopIdStats200Response</code>.
     * @alias module:model/GetV1ShopsShopIdStats200Response
     */
    constructor() { 
        
        GetV1ShopsShopIdStats200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdStats200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdStats200Response} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdStats200Response} The populated <code>GetV1ShopsShopIdStats200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdStats200Response();

            if (data.hasOwnProperty('products_sold')) {
                obj['products_sold'] = ApiClient.convertToType(data['products_sold'], 'Number');
            }
            if (data.hasOwnProperty('total_customers')) {
                obj['total_customers'] = ApiClient.convertToType(data['total_customers'], 'Number');
            }
            if (data.hasOwnProperty('feedbacks_received')) {
                obj['feedbacks_received'] = ApiClient.convertToType(data['feedbacks_received'], 'Number');
            }
            if (data.hasOwnProperty('average_rating')) {
                obj['average_rating'] = ApiClient.convertToType(data['average_rating'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdStats200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdStats200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['average_rating'] && !(typeof data['average_rating'] === 'string' || data['average_rating'] instanceof String)) {
            throw new Error("Expected the field `average_rating` to be a primitive type in the JSON string but got " + data['average_rating']);
        }

        return true;
    }


}



/**
 * @member {Number} products_sold
 */
GetV1ShopsShopIdStats200Response.prototype['products_sold'] = undefined;

/**
 * @member {Number} total_customers
 */
GetV1ShopsShopIdStats200Response.prototype['total_customers'] = undefined;

/**
 * @member {Number} feedbacks_received
 */
GetV1ShopsShopIdStats200Response.prototype['feedbacks_received'] = undefined;

/**
 * @member {String} average_rating
 */
GetV1ShopsShopIdStats200Response.prototype['average_rating'] = undefined;






export default GetV1ShopsShopIdStats200Response;

