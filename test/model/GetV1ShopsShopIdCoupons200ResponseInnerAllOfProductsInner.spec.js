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
    instance = new SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner();
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

  describe('GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner', function() {
    it('should create an instance of GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner', function() {
      // uncomment below and update the code to test GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner
      //var instance = new SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner();
      //expect(instance).to.be.a(SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property stockCount (base name: "stock_count")', function() {
      // uncomment below and update the code to test the property stockCount
      //var instance = new SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property pivot (base name: "pivot")', function() {
      // uncomment below and update the code to test the property pivot
      //var instance = new SellAuth.GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner();
      //expect(instance).to.be();
    });

  });

}));
