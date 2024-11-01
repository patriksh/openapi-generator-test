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
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     */
    constructor() { 
        
        Product.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('payment_methods')) {
                obj['payment_methods'] = ApiClient.convertToType(data['payment_methods'], ['String']);
            }
            if (data.hasOwnProperty('deliverables')) {
                obj['deliverables'] = ApiClient.convertToType(data['deliverables'], 'String');
            }
            if (data.hasOwnProperty('deliverables_type')) {
                obj['deliverables_type'] = ApiClient.convertToType(data['deliverables_type'], 'String');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
            }
            if (data.hasOwnProperty('shop_id')) {
                obj['shop_id'] = ApiClient.convertToType(data['shop_id'], 'Number');
            }
            if (data.hasOwnProperty('volume_discounts')) {
                obj['volume_discounts'] = ApiClient.convertToType(data['volume_discounts'], [Object]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('out_of_stock_message')) {
                obj['out_of_stock_message'] = ApiClient.convertToType(data['out_of_stock_message'], 'String');
            }
            if (data.hasOwnProperty('sort_priority')) {
                obj['sort_priority'] = ApiClient.convertToType(data['sort_priority'], 'Number');
            }
            if (data.hasOwnProperty('group_sort_priority')) {
                obj['group_sort_priority'] = ApiClient.convertToType(data['group_sort_priority'], 'Number');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
            }
            if (data.hasOwnProperty('on_hold')) {
                obj['on_hold'] = ApiClient.convertToType(data['on_hold'], 'Number');
            }
            if (data.hasOwnProperty('cloudflare_image_id')) {
                obj['cloudflare_image_id'] = ApiClient.convertToType(data['cloudflare_image_id'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('quantity_min')) {
                obj['quantity_min'] = ApiClient.convertToType(data['quantity_min'], 'Number');
            }
            if (data.hasOwnProperty('quantity_max')) {
                obj['quantity_max'] = ApiClient.convertToType(data['quantity_max'], 'Number');
            }
            if (data.hasOwnProperty('discord_guild_id')) {
                obj['discord_guild_id'] = ApiClient.convertToType(data['discord_guild_id'], 'Number');
            }
            if (data.hasOwnProperty('discord_role_id')) {
                obj['discord_role_id'] = ApiClient.convertToType(data['discord_role_id'], 'Number');
            }
            if (data.hasOwnProperty('block_vpn')) {
                obj['block_vpn'] = ApiClient.convertToType(data['block_vpn'], 'Number');
            }
            if (data.hasOwnProperty('stock_count')) {
                obj['stock_count'] = ApiClient.convertToType(data['stock_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Product</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Product</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['salt'] && !(typeof data['salt'] === 'string' || data['salt'] instanceof String)) {
            throw new Error("Expected the field `salt` to be a primitive type in the JSON string but got " + data['salt']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['payment_methods'])) {
            throw new Error("Expected the field `payment_methods` to be an array in the JSON data but got " + data['payment_methods']);
        }
        // ensure the json data is a string
        if (data['deliverables'] && !(typeof data['deliverables'] === 'string' || data['deliverables'] instanceof String)) {
            throw new Error("Expected the field `deliverables` to be a primitive type in the JSON string but got " + data['deliverables']);
        }
        // ensure the json data is a string
        if (data['deliverables_type'] && !(typeof data['deliverables_type'] === 'string' || data['deliverables_type'] instanceof String)) {
            throw new Error("Expected the field `deliverables_type` to be a primitive type in the JSON string but got " + data['deliverables_type']);
        }
        // ensure the json data is a string
        if (data['image_url'] && !(typeof data['image_url'] === 'string' || data['image_url'] instanceof String)) {
            throw new Error("Expected the field `image_url` to be a primitive type in the JSON string but got " + data['image_url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['volume_discounts'])) {
            throw new Error("Expected the field `volume_discounts` to be an array in the JSON data but got " + data['volume_discounts']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['instructions'] && !(typeof data['instructions'] === 'string' || data['instructions'] instanceof String)) {
            throw new Error("Expected the field `instructions` to be a primitive type in the JSON string but got " + data['instructions']);
        }
        // ensure the json data is a string
        if (data['out_of_stock_message'] && !(typeof data['out_of_stock_message'] === 'string' || data['out_of_stock_message'] instanceof String)) {
            throw new Error("Expected the field `out_of_stock_message` to be a primitive type in the JSON string but got " + data['out_of_stock_message']);
        }
        // ensure the json data is a string
        if (data['visibility'] && !(typeof data['visibility'] === 'string' || data['visibility'] instanceof String)) {
            throw new Error("Expected the field `visibility` to be a primitive type in the JSON string but got " + data['visibility']);
        }
        // ensure the json data is a string
        if (data['cloudflare_image_id'] && !(typeof data['cloudflare_image_id'] === 'string' || data['cloudflare_image_id'] instanceof String)) {
            throw new Error("Expected the field `cloudflare_image_id` to be a primitive type in the JSON string but got " + data['cloudflare_image_id']);
        }
        // ensure the json data is a string
        if (data['deleted_at'] && !(typeof data['deleted_at'] === 'string' || data['deleted_at'] instanceof String)) {
            throw new Error("Expected the field `deleted_at` to be a primitive type in the JSON string but got " + data['deleted_at']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Product.prototype['id'] = undefined;

/**
 * @member {String} salt
 */
Product.prototype['salt'] = undefined;

/**
 * @member {Date} created_at
 */
Product.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Product.prototype['updated_at'] = undefined;

/**
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * @member {String} path
 */
Product.prototype['path'] = undefined;

/**
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * @member {String} price
 */
Product.prototype['price'] = undefined;

/**
 * @member {String} currency
 */
Product.prototype['currency'] = undefined;

/**
 * @member {Array.<String>} payment_methods
 */
Product.prototype['payment_methods'] = undefined;

/**
 * @member {String} deliverables
 */
Product.prototype['deliverables'] = undefined;

/**
 * @member {String} deliverables_type
 */
Product.prototype['deliverables_type'] = undefined;

/**
 * @member {Number} stock
 */
Product.prototype['stock'] = undefined;

/**
 * @member {String} image_url
 */
Product.prototype['image_url'] = undefined;

/**
 * @member {Number} group_id
 */
Product.prototype['group_id'] = undefined;

/**
 * @member {Number} shop_id
 */
Product.prototype['shop_id'] = undefined;

/**
 * @member {Array.<Object>} volume_discounts
 */
Product.prototype['volume_discounts'] = undefined;

/**
 * @member {String} type
 */
Product.prototype['type'] = undefined;

/**
 * @member {String} instructions
 */
Product.prototype['instructions'] = undefined;

/**
 * @member {String} out_of_stock_message
 */
Product.prototype['out_of_stock_message'] = undefined;

/**
 * @member {Number} sort_priority
 */
Product.prototype['sort_priority'] = undefined;

/**
 * @member {Number} group_sort_priority
 */
Product.prototype['group_sort_priority'] = undefined;

/**
 * @member {String} visibility
 */
Product.prototype['visibility'] = undefined;

/**
 * @member {Number} on_hold
 */
Product.prototype['on_hold'] = undefined;

/**
 * @member {String} cloudflare_image_id
 */
Product.prototype['cloudflare_image_id'] = undefined;

/**
 * @member {String} deleted_at
 */
Product.prototype['deleted_at'] = undefined;

/**
 * @member {Number} quantity_min
 */
Product.prototype['quantity_min'] = undefined;

/**
 * @member {Number} quantity_max
 */
Product.prototype['quantity_max'] = undefined;

/**
 * @member {Number} discord_guild_id
 */
Product.prototype['discord_guild_id'] = undefined;

/**
 * @member {Number} discord_role_id
 */
Product.prototype['discord_role_id'] = undefined;

/**
 * @member {Number} block_vpn
 */
Product.prototype['block_vpn'] = undefined;

/**
 * @member {Number} stock_count
 */
Product.prototype['stock_count'] = undefined;






export default Product;
