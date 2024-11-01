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
    instance = new SellAuth.Group();
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

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instance = new SellAuth.Group();
      //expect(instance).to.be.a(SellAuth.Group);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property imageId (base name: "image_id")', function() {
      // uncomment below and update the code to test the property imageId
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "image_url")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property sortPriority (base name: "sort_priority")', function() {
      // uncomment below and update the code to test the property sortPriority
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property shopId (base name: "shop_id")', function() {
      // uncomment below and update the code to test the property shopId
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new SellAuth.Group();
      //expect(instance).to.be();
    });

  });

}));
