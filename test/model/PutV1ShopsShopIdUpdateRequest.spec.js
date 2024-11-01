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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellAuth);
  }
}(this, function(expect, SellAuth) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PutV1ShopsShopIdUpdateRequest', function() {
    it('should create an instance of PutV1ShopsShopIdUpdateRequest', function() {
      // uncomment below and update the code to test PutV1ShopsShopIdUpdateRequest
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be.a(SellAuth.PutV1ShopsShopIdUpdateRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property subdomain (base name: "subdomain")', function() {
      // uncomment below and update the code to test the property subdomain
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property logoImageId (base name: "logo_image_id")', function() {
      // uncomment below and update the code to test the property logoImageId
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property faviconImageId (base name: "favicon_image_id")', function() {
      // uncomment below and update the code to test the property faviconImageId
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property backgroundImageId (base name: "background_image_id")', function() {
      // uncomment below and update the code to test the property backgroundImageId
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property discordUrl (base name: "discord_url")', function() {
      // uncomment below and update the code to test the property discordUrl
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property youtubeUrl (base name: "youtube_url")', function() {
      // uncomment below and update the code to test the property youtubeUrl
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property telegramUrl (base name: "telegram_url")', function() {
      // uncomment below and update the code to test the property telegramUrl
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property tiktokUrl (base name: "tiktok_url")', function() {
      // uncomment below and update the code to test the property tiktokUrl
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property instagramUrl (base name: "instagram_url")', function() {
      // uncomment below and update the code to test the property instagramUrl
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property discordClientId (base name: "discord_client_id")', function() {
      // uncomment below and update the code to test the property discordClientId
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property discordClientSecret (base name: "discord_client_secret")', function() {
      // uncomment below and update the code to test the property discordClientSecret
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property discordBotToken (base name: "discord_bot_token")', function() {
      // uncomment below and update the code to test the property discordBotToken
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property crispWebsiteId (base name: "crisp_website_id")', function() {
      // uncomment below and update the code to test the property crispWebsiteId
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property terms (base name: "terms")', function() {
      // uncomment below and update the code to test the property terms
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

    it('should have the property enableAutomaticFeedback (base name: "enable_automatic_feedback")', function() {
      // uncomment below and update the code to test the property enableAutomaticFeedback
      //var instance = new SellAuth.PutV1ShopsShopIdUpdateRequest();
      //expect(instance).to.be();
    });

  });

}));
