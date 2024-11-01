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
import Invoice from './Invoice';
import InvoiceProduct from './InvoiceProduct';
import PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner from './PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner';

/**
 * The GetV1ShopsShopIdInvoicesInvoiceId200Response model module.
 * @module model/GetV1ShopsShopIdInvoicesInvoiceId200Response
 * @version 1.0.0
 */
class GetV1ShopsShopIdInvoicesInvoiceId200Response {
    /**
     * Constructs a new <code>GetV1ShopsShopIdInvoicesInvoiceId200Response</code>.
     * @alias module:model/GetV1ShopsShopIdInvoicesInvoiceId200Response
     * @implements module:model/Invoice
     */
    constructor() { 
        Invoice.initialize(this);
        GetV1ShopsShopIdInvoicesInvoiceId200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetV1ShopsShopIdInvoicesInvoiceId200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetV1ShopsShopIdInvoicesInvoiceId200Response} obj Optional instance to populate.
     * @return {module:model/GetV1ShopsShopIdInvoicesInvoiceId200Response} The populated <code>GetV1ShopsShopIdInvoicesInvoiceId200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetV1ShopsShopIdInvoicesInvoiceId200Response();
            Invoice.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('variant_id')) {
                obj['variant_id'] = ApiClient.convertToType(data['variant_id'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('gateway')) {
                obj['gateway'] = ApiClient.convertToType(data['gateway'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
            }
            if (data.hasOwnProperty('manual')) {
                obj['manual'] = ApiClient.convertToType(data['manual'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Number');
            }
            if (data.hasOwnProperty('unique_id')) {
                obj['unique_id'] = ApiClient.convertToType(data['unique_id'], 'String');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = InvoiceProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('variant')) {
                obj['variant'] = ApiClient.convertToType(data['variant'], Object);
            }
            if (data.hasOwnProperty('coupon_id')) {
                obj['coupon_id'] = ApiClient.convertToType(data['coupon_id'], 'Number');
            }
            if (data.hasOwnProperty('paypalff_email')) {
                obj['paypalff_email'] = ApiClient.convertToType(data['paypalff_email'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'Number');
            }
            if (data.hasOwnProperty('delivered')) {
                obj['delivered'] = ApiClient.convertToType(data['delivered'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('price_usd')) {
                obj['price_usd'] = ApiClient.convertToType(data['price_usd'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner]);
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
            if (data.hasOwnProperty('crypto_address')) {
                obj['crypto_address'] = ApiClient.convertToType(data['crypto_address'], 'String');
            }
            if (data.hasOwnProperty('crypto_amount')) {
                obj['crypto_amount'] = ApiClient.convertToType(data['crypto_amount'], 'String');
            }
            if (data.hasOwnProperty('shop_id')) {
                obj['shop_id'] = ApiClient.convertToType(data['shop_id'], 'Number');
            }
            if (data.hasOwnProperty('cashapp_cashtag')) {
                obj['cashapp_cashtag'] = ApiClient.convertToType(data['cashapp_cashtag'], 'String');
            }
            if (data.hasOwnProperty('venmo_tag')) {
                obj['venmo_tag'] = ApiClient.convertToType(data['venmo_tag'], 'String');
            }
            if (data.hasOwnProperty('cashapp_receipt_id')) {
                obj['cashapp_receipt_id'] = ApiClient.convertToType(data['cashapp_receipt_id'], 'String');
            }
            if (data.hasOwnProperty('cashapp_transaction_id')) {
                obj['cashapp_transaction_id'] = ApiClient.convertToType(data['cashapp_transaction_id'], 'String');
            }
            if (data.hasOwnProperty('discord_user_id')) {
                obj['discord_user_id'] = ApiClient.convertToType(data['discord_user_id'], 'String');
            }
            if (data.hasOwnProperty('paypalff_transaction_id')) {
                obj['paypalff_transaction_id'] = ApiClient.convertToType(data['paypalff_transaction_id'], 'String');
            }
            if (data.hasOwnProperty('price_eur')) {
                obj['price_eur'] = ApiClient.convertToType(data['price_eur'], 'String');
            }
            if (data.hasOwnProperty('paypalff_currency')) {
                obj['paypalff_currency'] = ApiClient.convertToType(data['paypalff_currency'], 'String');
            }
            if (data.hasOwnProperty('paypalff_note')) {
                obj['paypalff_note'] = ApiClient.convertToType(data['paypalff_note'], 'String');
            }
            if (data.hasOwnProperty('stripe_pi_id')) {
                obj['stripe_pi_id'] = ApiClient.convertToType(data['stripe_pi_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetV1ShopsShopIdInvoicesInvoiceId200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetV1ShopsShopIdInvoicesInvoiceId200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['gateway'] && !(typeof data['gateway'] === 'string' || data['gateway'] instanceof String)) {
            throw new Error("Expected the field `gateway` to be a primitive type in the JSON string but got " + data['gateway']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['salt'] && !(typeof data['salt'] === 'string' || data['salt'] instanceof String)) {
            throw new Error("Expected the field `salt` to be a primitive type in the JSON string but got " + data['salt']);
        }
        // ensure the json data is a string
        if (data['unique_id'] && !(typeof data['unique_id'] === 'string' || data['unique_id'] instanceof String)) {
            throw new Error("Expected the field `unique_id` to be a primitive type in the JSON string but got " + data['unique_id']);
        }
        // validate the optional field `product`
        if (data['product']) { // data not null
          InvoiceProduct.validateJSON(data['product']);
        }
        // ensure the json data is a string
        if (data['paypalff_email'] && !(typeof data['paypalff_email'] === 'string' || data['paypalff_email'] instanceof String)) {
            throw new Error("Expected the field `paypalff_email` to be a primitive type in the JSON string but got " + data['paypalff_email']);
        }
        // ensure the json data is a string
        if (data['delivered'] && !(typeof data['delivered'] === 'string' || data['delivered'] instanceof String)) {
            throw new Error("Expected the field `delivered` to be a primitive type in the JSON string but got " + data['delivered']);
        }
        // ensure the json data is a string
        if (data['price_usd'] && !(typeof data['price_usd'] === 'string' || data['price_usd'] instanceof String)) {
            throw new Error("Expected the field `price_usd` to be a primitive type in the JSON string but got " + data['price_usd']);
        }
        if (data['custom_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_fields'])) {
                throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
            }
            // validate the optional field `custom_fields` (array)
            for (const item of data['custom_fields']) {
                PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // ensure the json data is a string
        if (data['user_agent'] && !(typeof data['user_agent'] === 'string' || data['user_agent'] instanceof String)) {
            throw new Error("Expected the field `user_agent` to be a primitive type in the JSON string but got " + data['user_agent']);
        }
        // ensure the json data is a string
        if (data['crypto_address'] && !(typeof data['crypto_address'] === 'string' || data['crypto_address'] instanceof String)) {
            throw new Error("Expected the field `crypto_address` to be a primitive type in the JSON string but got " + data['crypto_address']);
        }
        // ensure the json data is a string
        if (data['crypto_amount'] && !(typeof data['crypto_amount'] === 'string' || data['crypto_amount'] instanceof String)) {
            throw new Error("Expected the field `crypto_amount` to be a primitive type in the JSON string but got " + data['crypto_amount']);
        }
        // ensure the json data is a string
        if (data['cashapp_cashtag'] && !(typeof data['cashapp_cashtag'] === 'string' || data['cashapp_cashtag'] instanceof String)) {
            throw new Error("Expected the field `cashapp_cashtag` to be a primitive type in the JSON string but got " + data['cashapp_cashtag']);
        }
        // ensure the json data is a string
        if (data['venmo_tag'] && !(typeof data['venmo_tag'] === 'string' || data['venmo_tag'] instanceof String)) {
            throw new Error("Expected the field `venmo_tag` to be a primitive type in the JSON string but got " + data['venmo_tag']);
        }
        // ensure the json data is a string
        if (data['cashapp_receipt_id'] && !(typeof data['cashapp_receipt_id'] === 'string' || data['cashapp_receipt_id'] instanceof String)) {
            throw new Error("Expected the field `cashapp_receipt_id` to be a primitive type in the JSON string but got " + data['cashapp_receipt_id']);
        }
        // ensure the json data is a string
        if (data['cashapp_transaction_id'] && !(typeof data['cashapp_transaction_id'] === 'string' || data['cashapp_transaction_id'] instanceof String)) {
            throw new Error("Expected the field `cashapp_transaction_id` to be a primitive type in the JSON string but got " + data['cashapp_transaction_id']);
        }
        // ensure the json data is a string
        if (data['discord_user_id'] && !(typeof data['discord_user_id'] === 'string' || data['discord_user_id'] instanceof String)) {
            throw new Error("Expected the field `discord_user_id` to be a primitive type in the JSON string but got " + data['discord_user_id']);
        }
        // ensure the json data is a string
        if (data['paypalff_transaction_id'] && !(typeof data['paypalff_transaction_id'] === 'string' || data['paypalff_transaction_id'] instanceof String)) {
            throw new Error("Expected the field `paypalff_transaction_id` to be a primitive type in the JSON string but got " + data['paypalff_transaction_id']);
        }
        // ensure the json data is a string
        if (data['price_eur'] && !(typeof data['price_eur'] === 'string' || data['price_eur'] instanceof String)) {
            throw new Error("Expected the field `price_eur` to be a primitive type in the JSON string but got " + data['price_eur']);
        }
        // ensure the json data is a string
        if (data['paypalff_currency'] && !(typeof data['paypalff_currency'] === 'string' || data['paypalff_currency'] instanceof String)) {
            throw new Error("Expected the field `paypalff_currency` to be a primitive type in the JSON string but got " + data['paypalff_currency']);
        }
        // ensure the json data is a string
        if (data['paypalff_note'] && !(typeof data['paypalff_note'] === 'string' || data['paypalff_note'] instanceof String)) {
            throw new Error("Expected the field `paypalff_note` to be a primitive type in the JSON string but got " + data['paypalff_note']);
        }
        // ensure the json data is a string
        if (data['stripe_pi_id'] && !(typeof data['stripe_pi_id'] === 'string' || data['stripe_pi_id'] instanceof String)) {
            throw new Error("Expected the field `stripe_pi_id` to be a primitive type in the JSON string but got " + data['stripe_pi_id']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['id'] = undefined;

/**
 * @member {String} status
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['status'] = undefined;

/**
 * @member {Number} product_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['product_id'] = undefined;

/**
 * @member {Number} variant_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['variant_id'] = undefined;

/**
 * @member {String} price
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['price'] = undefined;

/**
 * @member {String} currency
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['currency'] = undefined;

/**
 * @member {String} gateway
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['gateway'] = undefined;

/**
 * @member {String} email
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['email'] = undefined;

/**
 * @member {String} salt
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['salt'] = undefined;

/**
 * @member {Number} manual
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['manual'] = undefined;

/**
 * @member {Date} created_at
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['created_at'] = undefined;

/**
 * @member {Date} completed_at
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['completed_at'] = undefined;

/**
 * @member {Number} archived
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['archived'] = undefined;

/**
 * @member {String} unique_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['unique_id'] = undefined;

/**
 * @member {module:model/InvoiceProduct} product
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['product'] = undefined;

/**
 * @member {Object} variant
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['variant'] = undefined;

/**
 * @member {Number} coupon_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['coupon_id'] = undefined;

/**
 * @member {String} paypalff_email
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['paypalff_email'] = undefined;

/**
 * @member {Number} customer_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['customer_id'] = undefined;

/**
 * @member {String} delivered
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['delivered'] = undefined;

/**
 * @member {Number} amount
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['amount'] = undefined;

/**
 * @member {String} price_usd
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['price_usd'] = undefined;

/**
 * @member {Array.<module:model/PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner>} custom_fields
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['custom_fields'] = undefined;

/**
 * @member {String} ip
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['ip'] = undefined;

/**
 * @member {String} user_agent
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['user_agent'] = undefined;

/**
 * @member {String} crypto_address
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['crypto_address'] = undefined;

/**
 * @member {String} crypto_amount
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['crypto_amount'] = undefined;

/**
 * @member {Number} shop_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['shop_id'] = undefined;

/**
 * @member {String} cashapp_cashtag
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['cashapp_cashtag'] = undefined;

/**
 * @member {String} venmo_tag
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['venmo_tag'] = undefined;

/**
 * @member {String} cashapp_receipt_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['cashapp_receipt_id'] = undefined;

/**
 * @member {String} cashapp_transaction_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['cashapp_transaction_id'] = undefined;

/**
 * @member {String} discord_user_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['discord_user_id'] = undefined;

/**
 * @member {String} paypalff_transaction_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['paypalff_transaction_id'] = undefined;

/**
 * @member {String} price_eur
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['price_eur'] = undefined;

/**
 * @member {String} paypalff_currency
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['paypalff_currency'] = undefined;

/**
 * @member {String} paypalff_note
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['paypalff_note'] = undefined;

/**
 * @member {String} stripe_pi_id
 */
GetV1ShopsShopIdInvoicesInvoiceId200Response.prototype['stripe_pi_id'] = undefined;


// Implement Invoice interface:
/**
 * @member {Number} id
 */
Invoice.prototype['id'] = undefined;
/**
 * @member {String} status
 */
Invoice.prototype['status'] = undefined;
/**
 * @member {Number} product_id
 */
Invoice.prototype['product_id'] = undefined;
/**
 * @member {Number} variant_id
 */
Invoice.prototype['variant_id'] = undefined;
/**
 * @member {String} price
 */
Invoice.prototype['price'] = undefined;
/**
 * @member {String} currency
 */
Invoice.prototype['currency'] = undefined;
/**
 * @member {String} gateway
 */
Invoice.prototype['gateway'] = undefined;
/**
 * @member {String} email
 */
Invoice.prototype['email'] = undefined;
/**
 * @member {String} salt
 */
Invoice.prototype['salt'] = undefined;
/**
 * @member {Number} manual
 */
Invoice.prototype['manual'] = undefined;
/**
 * @member {Date} created_at
 */
Invoice.prototype['created_at'] = undefined;
/**
 * @member {Date} completed_at
 */
Invoice.prototype['completed_at'] = undefined;
/**
 * @member {Number} archived
 */
Invoice.prototype['archived'] = undefined;
/**
 * @member {String} unique_id
 */
Invoice.prototype['unique_id'] = undefined;
/**
 * @member {module:model/InvoiceProduct} product
 */
Invoice.prototype['product'] = undefined;
/**
 * @member {Object} variant
 */
Invoice.prototype['variant'] = undefined;




export default GetV1ShopsShopIdInvoicesInvoiceId200Response;

