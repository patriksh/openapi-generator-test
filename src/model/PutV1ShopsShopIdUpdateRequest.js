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
 * The PutV1ShopsShopIdUpdateRequest model module.
 * @module model/PutV1ShopsShopIdUpdateRequest
 * @version 1.0.0
 */
class PutV1ShopsShopIdUpdateRequest {
    /**
     * Constructs a new <code>PutV1ShopsShopIdUpdateRequest</code>.
     * @alias module:model/PutV1ShopsShopIdUpdateRequest
     * @param name {String} 
     * @param subdomain {String} Must match the regex /^[A-Za-z0-9-]+$/.
     */
    constructor(name, subdomain) { 
        
        PutV1ShopsShopIdUpdateRequest.initialize(this, name, subdomain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, subdomain) { 
        obj['name'] = name;
        obj['subdomain'] = subdomain;
    }

    /**
     * Constructs a <code>PutV1ShopsShopIdUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutV1ShopsShopIdUpdateRequest} obj Optional instance to populate.
     * @return {module:model/PutV1ShopsShopIdUpdateRequest} The populated <code>PutV1ShopsShopIdUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutV1ShopsShopIdUpdateRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subdomain')) {
                obj['subdomain'] = ApiClient.convertToType(data['subdomain'], 'String');
            }
            if (data.hasOwnProperty('logo_image_id')) {
                obj['logo_image_id'] = ApiClient.convertToType(data['logo_image_id'], 'String');
            }
            if (data.hasOwnProperty('favicon_image_id')) {
                obj['favicon_image_id'] = ApiClient.convertToType(data['favicon_image_id'], 'String');
            }
            if (data.hasOwnProperty('background_image_id')) {
                obj['background_image_id'] = ApiClient.convertToType(data['background_image_id'], 'String');
            }
            if (data.hasOwnProperty('discord_url')) {
                obj['discord_url'] = ApiClient.convertToType(data['discord_url'], 'String');
            }
            if (data.hasOwnProperty('youtube_url')) {
                obj['youtube_url'] = ApiClient.convertToType(data['youtube_url'], 'String');
            }
            if (data.hasOwnProperty('telegram_url')) {
                obj['telegram_url'] = ApiClient.convertToType(data['telegram_url'], 'String');
            }
            if (data.hasOwnProperty('tiktok_url')) {
                obj['tiktok_url'] = ApiClient.convertToType(data['tiktok_url'], 'String');
            }
            if (data.hasOwnProperty('instagram_url')) {
                obj['instagram_url'] = ApiClient.convertToType(data['instagram_url'], 'String');
            }
            if (data.hasOwnProperty('discord_client_id')) {
                obj['discord_client_id'] = ApiClient.convertToType(data['discord_client_id'], 'String');
            }
            if (data.hasOwnProperty('discord_client_secret')) {
                obj['discord_client_secret'] = ApiClient.convertToType(data['discord_client_secret'], 'String');
            }
            if (data.hasOwnProperty('discord_bot_token')) {
                obj['discord_bot_token'] = ApiClient.convertToType(data['discord_bot_token'], 'String');
            }
            if (data.hasOwnProperty('crisp_website_id')) {
                obj['crisp_website_id'] = ApiClient.convertToType(data['crisp_website_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
            if (data.hasOwnProperty('enable_automatic_feedback')) {
                obj['enable_automatic_feedback'] = ApiClient.convertToType(data['enable_automatic_feedback'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PutV1ShopsShopIdUpdateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PutV1ShopsShopIdUpdateRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PutV1ShopsShopIdUpdateRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['subdomain'] && !(typeof data['subdomain'] === 'string' || data['subdomain'] instanceof String)) {
            throw new Error("Expected the field `subdomain` to be a primitive type in the JSON string but got " + data['subdomain']);
        }
        // ensure the json data is a string
        if (data['logo_image_id'] && !(typeof data['logo_image_id'] === 'string' || data['logo_image_id'] instanceof String)) {
            throw new Error("Expected the field `logo_image_id` to be a primitive type in the JSON string but got " + data['logo_image_id']);
        }
        // ensure the json data is a string
        if (data['favicon_image_id'] && !(typeof data['favicon_image_id'] === 'string' || data['favicon_image_id'] instanceof String)) {
            throw new Error("Expected the field `favicon_image_id` to be a primitive type in the JSON string but got " + data['favicon_image_id']);
        }
        // ensure the json data is a string
        if (data['background_image_id'] && !(typeof data['background_image_id'] === 'string' || data['background_image_id'] instanceof String)) {
            throw new Error("Expected the field `background_image_id` to be a primitive type in the JSON string but got " + data['background_image_id']);
        }
        // ensure the json data is a string
        if (data['discord_url'] && !(typeof data['discord_url'] === 'string' || data['discord_url'] instanceof String)) {
            throw new Error("Expected the field `discord_url` to be a primitive type in the JSON string but got " + data['discord_url']);
        }
        // ensure the json data is a string
        if (data['youtube_url'] && !(typeof data['youtube_url'] === 'string' || data['youtube_url'] instanceof String)) {
            throw new Error("Expected the field `youtube_url` to be a primitive type in the JSON string but got " + data['youtube_url']);
        }
        // ensure the json data is a string
        if (data['telegram_url'] && !(typeof data['telegram_url'] === 'string' || data['telegram_url'] instanceof String)) {
            throw new Error("Expected the field `telegram_url` to be a primitive type in the JSON string but got " + data['telegram_url']);
        }
        // ensure the json data is a string
        if (data['tiktok_url'] && !(typeof data['tiktok_url'] === 'string' || data['tiktok_url'] instanceof String)) {
            throw new Error("Expected the field `tiktok_url` to be a primitive type in the JSON string but got " + data['tiktok_url']);
        }
        // ensure the json data is a string
        if (data['instagram_url'] && !(typeof data['instagram_url'] === 'string' || data['instagram_url'] instanceof String)) {
            throw new Error("Expected the field `instagram_url` to be a primitive type in the JSON string but got " + data['instagram_url']);
        }
        // ensure the json data is a string
        if (data['discord_client_id'] && !(typeof data['discord_client_id'] === 'string' || data['discord_client_id'] instanceof String)) {
            throw new Error("Expected the field `discord_client_id` to be a primitive type in the JSON string but got " + data['discord_client_id']);
        }
        // ensure the json data is a string
        if (data['discord_client_secret'] && !(typeof data['discord_client_secret'] === 'string' || data['discord_client_secret'] instanceof String)) {
            throw new Error("Expected the field `discord_client_secret` to be a primitive type in the JSON string but got " + data['discord_client_secret']);
        }
        // ensure the json data is a string
        if (data['discord_bot_token'] && !(typeof data['discord_bot_token'] === 'string' || data['discord_bot_token'] instanceof String)) {
            throw new Error("Expected the field `discord_bot_token` to be a primitive type in the JSON string but got " + data['discord_bot_token']);
        }
        // ensure the json data is a string
        if (data['crisp_website_id'] && !(typeof data['crisp_website_id'] === 'string' || data['crisp_website_id'] instanceof String)) {
            throw new Error("Expected the field `crisp_website_id` to be a primitive type in the JSON string but got " + data['crisp_website_id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['terms'] && !(typeof data['terms'] === 'string' || data['terms'] instanceof String)) {
            throw new Error("Expected the field `terms` to be a primitive type in the JSON string but got " + data['terms']);
        }

        return true;
    }


}

PutV1ShopsShopIdUpdateRequest.RequiredProperties = ["name", "subdomain"];

/**
 * 
 * @member {String} name
 */
PutV1ShopsShopIdUpdateRequest.prototype['name'] = undefined;

/**
 * Must match the regex /^[A-Za-z0-9-]+$/.
 * @member {String} subdomain
 */
PutV1ShopsShopIdUpdateRequest.prototype['subdomain'] = undefined;

/**
 * 
 * @member {String} logo_image_id
 */
PutV1ShopsShopIdUpdateRequest.prototype['logo_image_id'] = undefined;

/**
 * 
 * @member {String} favicon_image_id
 */
PutV1ShopsShopIdUpdateRequest.prototype['favicon_image_id'] = undefined;

/**
 * 
 * @member {String} background_image_id
 */
PutV1ShopsShopIdUpdateRequest.prototype['background_image_id'] = undefined;

/**
 * Must be a valid URL.
 * @member {String} discord_url
 */
PutV1ShopsShopIdUpdateRequest.prototype['discord_url'] = undefined;

/**
 * Must be a valid URL.
 * @member {String} youtube_url
 */
PutV1ShopsShopIdUpdateRequest.prototype['youtube_url'] = undefined;

/**
 * Must be a valid URL.
 * @member {String} telegram_url
 */
PutV1ShopsShopIdUpdateRequest.prototype['telegram_url'] = undefined;

/**
 * Must be a valid URL.
 * @member {String} tiktok_url
 */
PutV1ShopsShopIdUpdateRequest.prototype['tiktok_url'] = undefined;

/**
 * Must be a valid URL.
 * @member {String} instagram_url
 */
PutV1ShopsShopIdUpdateRequest.prototype['instagram_url'] = undefined;

/**
 * 
 * @member {String} discord_client_id
 */
PutV1ShopsShopIdUpdateRequest.prototype['discord_client_id'] = undefined;

/**
 * 
 * @member {String} discord_client_secret
 */
PutV1ShopsShopIdUpdateRequest.prototype['discord_client_secret'] = undefined;

/**
 * 
 * @member {String} discord_bot_token
 */
PutV1ShopsShopIdUpdateRequest.prototype['discord_bot_token'] = undefined;

/**
 * 
 * @member {String} crisp_website_id
 */
PutV1ShopsShopIdUpdateRequest.prototype['crisp_website_id'] = undefined;

/**
 * 
 * @member {String} description
 */
PutV1ShopsShopIdUpdateRequest.prototype['description'] = undefined;

/**
 * 
 * @member {String} terms
 */
PutV1ShopsShopIdUpdateRequest.prototype['terms'] = undefined;

/**
 * 
 * @member {Boolean} enable_automatic_feedback
 */
PutV1ShopsShopIdUpdateRequest.prototype['enable_automatic_feedback'] = undefined;






export default PutV1ShopsShopIdUpdateRequest;
