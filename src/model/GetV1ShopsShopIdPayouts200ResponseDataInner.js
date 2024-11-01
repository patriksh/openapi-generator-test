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
 * The GetV1ShopsShopIdPayouts200ResponseDataInner model module.
 * @module model/GetV1ShopsShopIdPayouts200ResponseDataInner
 * @version 1.0.0
 */
class GetV1ShopsShopIdPayouts200ResponseDataInner {
    /**
     * Constructs a new <code>GetV1ShopsShopIdPayouts200ResponseDataInner</code>.
     * @alias module:model/GetV1ShopsShopIdPayouts200ResponseDataInner
     */
    constructor() { 
        
        GetV1ShopsShopIdPayouts200ResponseDataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdPayouts200ResponseDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdPayouts200ResponseDataInner} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdPayouts200ResponseDataInner} The populated <code>GetV1ShopsShopIdPayouts200ResponseDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdPayouts200ResponseDataInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('shop_id')) {
                obj['shop_id'] = ApiClient.convertToType(data['shop_id'], 'Number');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('amount_usd')) {
                obj['amount_usd'] = ApiClient.convertToType(data['amount_usd'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdPayouts200ResponseDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdPayouts200ResponseDataInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['amount_usd'] && !(typeof data['amount_usd'] === 'string' || data['amount_usd'] instanceof String)) {
            throw new Error("Expected the field `amount_usd` to be a primitive type in the JSON string but got " + data['amount_usd']);
        }
        // ensure the json data is a string
        if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
            throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
        }
        // ensure the json data is a string
        if (data['transaction_id'] && !(typeof data['transaction_id'] === 'string' || data['transaction_id'] instanceof String)) {
            throw new Error("Expected the field `transaction_id` to be a primitive type in the JSON string but got " + data['transaction_id']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['id'] = undefined;

/**
 * @member {Number} shop_id
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['shop_id'] = undefined;

/**
 * @member {String} method
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['method'] = undefined;

/**
 * @member {String} currency
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['currency'] = undefined;

/**
 * @member {String} amount
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['amount'] = undefined;

/**
 * @member {String} amount_usd
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['amount_usd'] = undefined;

/**
 * @member {String} recipient
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['recipient'] = undefined;

/**
 * @member {String} transaction_id
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['transaction_id'] = undefined;

/**
 * @member {Number} status
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['status'] = undefined;

/**
 * @member {Date} created_at
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['updated_at'] = undefined;

/**
 * @member {Date} deleted_at
 */
GetV1ShopsShopIdPayouts200ResponseDataInner.prototype['deleted_at'] = undefined;






export default GetV1ShopsShopIdPayouts200ResponseDataInner;

