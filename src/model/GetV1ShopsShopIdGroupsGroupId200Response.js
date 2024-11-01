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
import Group from './Group';
import Product from './Product';

/**
 * The GetV1ShopsShopIdGroupsGroupId200Response model module.
 * @module model/GetV1ShopsShopIdGroupsGroupId200Response
 * @version 1.0.0
 */
class GetV1ShopsShopIdGroupsGroupId200Response {
    /**
     * Constructs a new <code>GetV1ShopsShopIdGroupsGroupId200Response</code>.
     * @alias module:model/GetV1ShopsShopIdGroupsGroupId200Response
     * @implements module:model/Group
     */
    constructor() { 
        Group.initialize(this);
        GetV1ShopsShopIdGroupsGroupId200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdGroupsGroupId200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdGroupsGroupId200Response} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdGroupsGroupId200Response} The populated <code>GetV1ShopsShopIdGroupsGroupId200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdGroupsGroupId200Response();
            Group.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('image_id')) {
                obj['image_id'] = ApiClient.convertToType(data['image_id'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('sort_priority')) {
                obj['sort_priority'] = ApiClient.convertToType(data['sort_priority'], 'Number');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('shop_id')) {
                obj['shop_id'] = ApiClient.convertToType(data['shop_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [Product]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdGroupsGroupId200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdGroupsGroupId200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['image_id'] && !(typeof data['image_id'] === 'string' || data['image_id'] instanceof String)) {
            throw new Error("Expected the field `image_id` to be a primitive type in the JSON string but got " + data['image_id']);
        }
        // ensure the json data is a string
        if (data['image_url'] && !(typeof data['image_url'] === 'string' || data['image_url'] instanceof String)) {
            throw new Error("Expected the field `image_url` to be a primitive type in the JSON string but got " + data['image_url']);
        }
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }
        // ensure the json data is a string
        if (data['deleted_at'] && !(typeof data['deleted_at'] === 'string' || data['deleted_at'] instanceof String)) {
            throw new Error("Expected the field `deleted_at` to be a primitive type in the JSON string but got " + data['deleted_at']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['products'])) {
            throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['name'] = undefined;

/**
 * @member {String} image_id
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['image_id'] = undefined;

/**
 * @member {String} image_url
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['image_url'] = undefined;

/**
 * @member {Number} sort_priority
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['sort_priority'] = undefined;

/**
 * @member {String} visibility
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['visibility'] = undefined;

/**
 * @member {Number} shop_id
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['shop_id'] = undefined;

/**
 * @member {Date} created_at
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['updated_at'] = undefined;

/**
 * @member {String} deleted_at
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['deleted_at'] = undefined;

/**
 * @member {Array.<module:model/Product>} products
 */
GetV1ShopsShopIdGroupsGroupId200Response.prototype['products'] = undefined;


// Implement Group interface:
/**
 * @member {Number} id
 */
Group.prototype['id'] = undefined;
/**
 * @member {String} name
 */
Group.prototype['name'] = undefined;
/**
 * @member {String} image_id
 */
Group.prototype['image_id'] = undefined;
/**
 * @member {String} image_url
 */
Group.prototype['image_url'] = undefined;
/**
 * @member {Number} sort_priority
 */
Group.prototype['sort_priority'] = undefined;
/**
 * @member {String} visibility
 */
Group.prototype['visibility'] = undefined;
/**
 * @member {Number} shop_id
 */
Group.prototype['shop_id'] = undefined;
/**
 * @member {Date} created_at
 */
Group.prototype['created_at'] = undefined;
/**
 * @member {Date} updated_at
 */
Group.prototype['updated_at'] = undefined;
/**
 * @member {String} deleted_at
 */
Group.prototype['deleted_at'] = undefined;




export default GetV1ShopsShopIdGroupsGroupId200Response;

