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
    instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
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

  describe('GetV1ShopsShopIdInvoices200Response', function() {
    it('should create an instance of GetV1ShopsShopIdInvoices200Response', function() {
      // uncomment below and update the code to test GetV1ShopsShopIdInvoices200Response
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be.a(SellAuth.GetV1ShopsShopIdInvoices200Response);
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property firstPageUrl (base name: "first_page_url")', function() {
      // uncomment below and update the code to test the property firstPageUrl
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      // uncomment below and update the code to test the property lastPage
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property lastPageUrl (base name: "last_page_url")', function() {
      // uncomment below and update the code to test the property lastPageUrl
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property nextPageUrl (base name: "next_page_url")', function() {
      // uncomment below and update the code to test the property nextPageUrl
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property prevPageUrl (base name: "prev_page_url")', function() {
      // uncomment below and update the code to test the property prevPageUrl
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new SellAuth.GetV1ShopsShopIdInvoices200Response();
      //expect(instance).to.be();
    });

  });

}));
