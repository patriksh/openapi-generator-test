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
 * The GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot model module.
 * @module model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot
 * @version 1.0.0
 */
class GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot {
    /**
     * Constructs a new <code>GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot</code>.
     * @alias module:model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot
     */
    constructor() { 
        
        GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot} The populated <code>GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot();

            if (data.hasOwnProperty('coupon_id')) {
                obj['coupon_id'] = ApiClient.convertToType(data['coupon_id'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} coupon_id
 */
GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot.prototype['coupon_id'] = undefined;

/**
 * @member {Number} product_id
 */
GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot.prototype['product_id'] = undefined;






export default GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot;

