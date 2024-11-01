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
 * The GetV1ShopsShopIdPayoutsBalances200ResponseLtc model module.
 * @module model/GetV1ShopsShopIdPayoutsBalances200ResponseLtc
 * @version 1.0.0
 */
class GetV1ShopsShopIdPayoutsBalances200ResponseLtc {
    /**
     * Constructs a new <code>GetV1ShopsShopIdPayoutsBalances200ResponseLtc</code>.
     * @alias module:model/GetV1ShopsShopIdPayoutsBalances200ResponseLtc
     */
    constructor() { 
        
        GetV1ShopsShopIdPayoutsBalances200ResponseLtc.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdPayoutsBalances200ResponseLtc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdPayoutsBalances200ResponseLtc} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdPayoutsBalances200ResponseLtc} The populated <code>GetV1ShopsShopIdPayoutsBalances200ResponseLtc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdPayoutsBalances200ResponseLtc();

            if (data.hasOwnProperty('ltc')) {
                obj['ltc'] = ApiClient.convertToType(data['ltc'], 'Number');
            }
            if (data.hasOwnProperty('usd')) {
                obj['usd'] = ApiClient.convertToType(data['usd'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdPayoutsBalances200ResponseLtc</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdPayoutsBalances200ResponseLtc</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} ltc
 */
GetV1ShopsShopIdPayoutsBalances200ResponseLtc.prototype['ltc'] = undefined;

/**
 * @member {Number} usd
 */
GetV1ShopsShopIdPayoutsBalances200ResponseLtc.prototype['usd'] = undefined;






export default GetV1ShopsShopIdPayoutsBalances200ResponseLtc;

