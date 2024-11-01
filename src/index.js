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


import ApiClient from './ApiClient';
import BlacklistEntry from './model/BlacklistEntry';
import Coupon from './model/Coupon';
import CustomField from './model/CustomField';
import DeleteV1ShopsShopIdBlacklistBlacklistId200Response from './model/DeleteV1ShopsShopIdBlacklistBlacklistId200Response';
import DeleteV1ShopsShopIdCouponsCouponId200Response from './model/DeleteV1ShopsShopIdCouponsCouponId200Response';
import DeleteV1ShopsShopIdCustomFieldsCustomFieldId200Response from './model/DeleteV1ShopsShopIdCustomFieldsCustomFieldId200Response';
import DeleteV1ShopsShopIdDomainsDomainId200Response from './model/DeleteV1ShopsShopIdDomainsDomainId200Response';
import DeleteV1ShopsShopIdGroupsGroupId200Response from './model/DeleteV1ShopsShopIdGroupsGroupId200Response';
import DeleteV1ShopsShopIdImagesImageId200Response from './model/DeleteV1ShopsShopIdImagesImageId200Response';
import DeleteV1ShopsShopIdProductsProductId200Response from './model/DeleteV1ShopsShopIdProductsProductId200Response';
import DeleteV1ShopsShopIdThemesThemeId200Response from './model/DeleteV1ShopsShopIdThemesThemeId200Response';
import Domain from './model/Domain';
import DomainDnsRecordsInner from './model/DomainDnsRecordsInner';
import Feedback from './model/Feedback';
import GetV1ShopsShopIdBlacklist200Response from './model/GetV1ShopsShopIdBlacklist200Response';
import GetV1ShopsShopIdBlacklist200ResponseDataInner from './model/GetV1ShopsShopIdBlacklist200ResponseDataInner';
import GetV1ShopsShopIdCoupons200ResponseInner from './model/GetV1ShopsShopIdCoupons200ResponseInner';
import GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner from './model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner';
import GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot from './model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot';
import GetV1ShopsShopIdFeedbacks200Response from './model/GetV1ShopsShopIdFeedbacks200Response';
import GetV1ShopsShopIdFeedbacks200ResponseDataInner from './model/GetV1ShopsShopIdFeedbacks200ResponseDataInner';
import GetV1ShopsShopIdFeedbacks200ResponseLinksInner from './model/GetV1ShopsShopIdFeedbacks200ResponseLinksInner';
import GetV1ShopsShopIdGroups200ResponseInner from './model/GetV1ShopsShopIdGroups200ResponseInner';
import GetV1ShopsShopIdGroupsGroupId200Response from './model/GetV1ShopsShopIdGroupsGroupId200Response';
import GetV1ShopsShopIdInvoices200Response from './model/GetV1ShopsShopIdInvoices200Response';
import GetV1ShopsShopIdInvoices200ResponseLinksInner from './model/GetV1ShopsShopIdInvoices200ResponseLinksInner';
import GetV1ShopsShopIdInvoicesInvoiceId200Response from './model/GetV1ShopsShopIdInvoicesInvoiceId200Response';
import GetV1ShopsShopIdInvoicesInvoiceIdProcess200Response from './model/GetV1ShopsShopIdInvoicesInvoiceIdProcess200Response';
import GetV1ShopsShopIdInvoicesInvoiceIdProcess400Response from './model/GetV1ShopsShopIdInvoicesInvoiceIdProcess400Response';
import GetV1ShopsShopIdPayouts200Response from './model/GetV1ShopsShopIdPayouts200Response';
import GetV1ShopsShopIdPayouts200ResponseDataInner from './model/GetV1ShopsShopIdPayouts200ResponseDataInner';
import GetV1ShopsShopIdPayoutsBalances200Response from './model/GetV1ShopsShopIdPayoutsBalances200Response';
import GetV1ShopsShopIdPayoutsBalances200ResponseBtc from './model/GetV1ShopsShopIdPayoutsBalances200ResponseBtc';
import GetV1ShopsShopIdPayoutsBalances200ResponseLtc from './model/GetV1ShopsShopIdPayoutsBalances200ResponseLtc';
import GetV1ShopsShopIdPayoutsTransactions200Response from './model/GetV1ShopsShopIdPayoutsTransactions200Response';
import GetV1ShopsShopIdPayoutsTransactions200ResponseDataInner from './model/GetV1ShopsShopIdPayoutsTransactions200ResponseDataInner';
import GetV1ShopsShopIdProducts200Response from './model/GetV1ShopsShopIdProducts200Response';
import GetV1ShopsShopIdProducts200ResponseDataInner from './model/GetV1ShopsShopIdProducts200ResponseDataInner';
import GetV1ShopsShopIdProducts200ResponseDataInnerGroup from './model/GetV1ShopsShopIdProducts200ResponseDataInnerGroup';
import GetV1ShopsShopIdProducts200ResponseLinksInner from './model/GetV1ShopsShopIdProducts200ResponseLinksInner';
import GetV1ShopsShopIdProducts500Response from './model/GetV1ShopsShopIdProducts500Response';
import GetV1ShopsShopIdStats200Response from './model/GetV1ShopsShopIdStats200Response';
import Group from './model/Group';
import Image from './model/Image';
import Invoice from './model/Invoice';
import InvoiceProduct from './model/InvoiceProduct';
import NotFoundError from './model/NotFoundError';
import PostV1ShopsCreate200Response from './model/PostV1ShopsCreate200Response';
import PostV1ShopsCreate400Response from './model/PostV1ShopsCreate400Response';
import PostV1ShopsCreate500Response from './model/PostV1ShopsCreate500Response';
import PostV1ShopsShopIdBlacklistRequest from './model/PostV1ShopsShopIdBlacklistRequest';
import PostV1ShopsShopIdCouponsRequest from './model/PostV1ShopsShopIdCouponsRequest';
import PostV1ShopsShopIdCustomFieldsRequest from './model/PostV1ShopsShopIdCustomFieldsRequest';
import PostV1ShopsShopIdFeedbacksFeedbackIdAppeal200Response from './model/PostV1ShopsShopIdFeedbacksFeedbackIdAppeal200Response';
import PostV1ShopsShopIdFeedbacksFeedbackIdReply200Response from './model/PostV1ShopsShopIdFeedbacksFeedbackIdReply200Response';
import PostV1ShopsShopIdFeedbacksFeedbackIdReplyRequest from './model/PostV1ShopsShopIdFeedbacksFeedbackIdReplyRequest';
import PostV1ShopsShopIdGroupsRequest from './model/PostV1ShopsShopIdGroupsRequest';
import PostV1ShopsShopIdInvoicesInvoiceIdArchive200Response from './model/PostV1ShopsShopIdInvoicesInvoiceIdArchive200Response';
import PostV1ShopsShopIdInvoicesInvoiceIdArchive400Response from './model/PostV1ShopsShopIdInvoicesInvoiceIdArchive400Response';
import PostV1ShopsShopIdInvoicesInvoiceIdUnarchive200Response from './model/PostV1ShopsShopIdInvoicesInvoiceIdUnarchive200Response';
import PostV1ShopsShopIdInvoicesInvoiceIdUnarchive400Response from './model/PostV1ShopsShopIdInvoicesInvoiceIdUnarchive400Response';
import PostV1ShopsShopIdPayoutsPayout200Response from './model/PostV1ShopsShopIdPayoutsPayout200Response';
import PostV1ShopsShopIdPayoutsPayout200ResponsePayout from './model/PostV1ShopsShopIdPayoutsPayout200ResponsePayout';
import PostV1ShopsShopIdPayoutsPayout200ResponsePayoutTransactionId from './model/PostV1ShopsShopIdPayoutsPayout200ResponsePayoutTransactionId';
import PostV1ShopsShopIdPayoutsPayout400Response from './model/PostV1ShopsShopIdPayoutsPayout400Response';
import PostV1ShopsShopIdPayoutsPayoutRequest from './model/PostV1ShopsShopIdPayoutsPayoutRequest';
import PostV1ShopsShopIdProducts200Response from './model/PostV1ShopsShopIdProducts200Response';
import PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner from './model/PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner';
import PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInnerAllOfPivot from './model/PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInnerAllOfPivot';
import PostV1ShopsShopIdProducts200ResponseAllOfImagesInner from './model/PostV1ShopsShopIdProducts200ResponseAllOfImagesInner';
import PostV1ShopsShopIdProducts200ResponseAllOfImagesInnerAllOfPivot from './model/PostV1ShopsShopIdProducts200ResponseAllOfImagesInnerAllOfPivot';
import PostV1ShopsShopIdProductsRequest from './model/PostV1ShopsShopIdProductsRequest';
import PostV1ShopsShopIdThemesRequest from './model/PostV1ShopsShopIdThemesRequest';
import PostV1ShopsShopIdThemesThemeIdImport200Response from './model/PostV1ShopsShopIdThemesThemeIdImport200Response';
import PostV1ShopsShopIdThemesThemeIdUpdate200Response from './model/PostV1ShopsShopIdThemesThemeIdUpdate200Response';
import Product from './model/Product';
import PutV1ShopsShopIdCouponsCouponIdUpdateRequest from './model/PutV1ShopsShopIdCouponsCouponIdUpdateRequest';
import PutV1ShopsShopIdCustomFieldsCustomFieldIdRequest from './model/PutV1ShopsShopIdCustomFieldsCustomFieldIdRequest';
import PutV1ShopsShopIdGroupsGroupIdUpdateRequest from './model/PutV1ShopsShopIdGroupsGroupIdUpdateRequest';
import PutV1ShopsShopIdPaymentProcessorsUpdate200Response from './model/PutV1ShopsShopIdPaymentProcessorsUpdate200Response';
import PutV1ShopsShopIdPaymentProcessorsUpdateRequest from './model/PutV1ShopsShopIdPaymentProcessorsUpdateRequest';
import PutV1ShopsShopIdProductsProductIdUpdateRequest from './model/PutV1ShopsShopIdProductsProductIdUpdateRequest';
import PutV1ShopsShopIdThemesThemeIdApply200Response from './model/PutV1ShopsShopIdThemesThemeIdApply200Response';
import PutV1ShopsShopIdThemesThemeIdRequest from './model/PutV1ShopsShopIdThemesThemeIdRequest';
import PutV1ShopsShopIdUpdate400Response from './model/PutV1ShopsShopIdUpdate400Response';
import PutV1ShopsShopIdUpdateRequest from './model/PutV1ShopsShopIdUpdateRequest';
import Shop from './model/Shop';
import Theme from './model/Theme';
import ThemeOfficialTheme from './model/ThemeOfficialTheme';
import ValidationError from './model/ValidationError';
import EndpointsApi from './api/EndpointsApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SellAuth = require('index'); // See note below*.
* var xxxSvc = new SellAuth.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SellAuth.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SellAuth.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SellAuth.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BlacklistEntry model constructor.
     * @property {module:model/BlacklistEntry}
     */
    BlacklistEntry,

    /**
     * The Coupon model constructor.
     * @property {module:model/Coupon}
     */
    Coupon,

    /**
     * The CustomField model constructor.
     * @property {module:model/CustomField}
     */
    CustomField,

    /**
     * The DeleteV1ShopsShopIdBlacklistBlacklistId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdBlacklistBlacklistId200Response}
     */
    DeleteV1ShopsShopIdBlacklistBlacklistId200Response,

    /**
     * The DeleteV1ShopsShopIdCouponsCouponId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdCouponsCouponId200Response}
     */
    DeleteV1ShopsShopIdCouponsCouponId200Response,

    /**
     * The DeleteV1ShopsShopIdCustomFieldsCustomFieldId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdCustomFieldsCustomFieldId200Response}
     */
    DeleteV1ShopsShopIdCustomFieldsCustomFieldId200Response,

    /**
     * The DeleteV1ShopsShopIdDomainsDomainId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdDomainsDomainId200Response}
     */
    DeleteV1ShopsShopIdDomainsDomainId200Response,

    /**
     * The DeleteV1ShopsShopIdGroupsGroupId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdGroupsGroupId200Response}
     */
    DeleteV1ShopsShopIdGroupsGroupId200Response,

    /**
     * The DeleteV1ShopsShopIdImagesImageId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdImagesImageId200Response}
     */
    DeleteV1ShopsShopIdImagesImageId200Response,

    /**
     * The DeleteV1ShopsShopIdProductsProductId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdProductsProductId200Response}
     */
    DeleteV1ShopsShopIdProductsProductId200Response,

    /**
     * The DeleteV1ShopsShopIdThemesThemeId200Response model constructor.
     * @property {module:model/DeleteV1ShopsShopIdThemesThemeId200Response}
     */
    DeleteV1ShopsShopIdThemesThemeId200Response,

    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain,

    /**
     * The DomainDnsRecordsInner model constructor.
     * @property {module:model/DomainDnsRecordsInner}
     */
    DomainDnsRecordsInner,

    /**
     * The Feedback model constructor.
     * @property {module:model/Feedback}
     */
    Feedback,

    /**
     * The GetV1ShopsShopIdBlacklist200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdBlacklist200Response}
     */
    GetV1ShopsShopIdBlacklist200Response,

    /**
     * The GetV1ShopsShopIdBlacklist200ResponseDataInner model constructor.
     * @property {module:model/GetV1ShopsShopIdBlacklist200ResponseDataInner}
     */
    GetV1ShopsShopIdBlacklist200ResponseDataInner,

    /**
     * The GetV1ShopsShopIdCoupons200ResponseInner model constructor.
     * @property {module:model/GetV1ShopsShopIdCoupons200ResponseInner}
     */
    GetV1ShopsShopIdCoupons200ResponseInner,

    /**
     * The GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner model constructor.
     * @property {module:model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner}
     */
    GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInner,

    /**
     * The GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot model constructor.
     * @property {module:model/GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot}
     */
    GetV1ShopsShopIdCoupons200ResponseInnerAllOfProductsInnerPivot,

    /**
     * The GetV1ShopsShopIdFeedbacks200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdFeedbacks200Response}
     */
    GetV1ShopsShopIdFeedbacks200Response,

    /**
     * The GetV1ShopsShopIdFeedbacks200ResponseDataInner model constructor.
     * @property {module:model/GetV1ShopsShopIdFeedbacks200ResponseDataInner}
     */
    GetV1ShopsShopIdFeedbacks200ResponseDataInner,

    /**
     * The GetV1ShopsShopIdFeedbacks200ResponseLinksInner model constructor.
     * @property {module:model/GetV1ShopsShopIdFeedbacks200ResponseLinksInner}
     */
    GetV1ShopsShopIdFeedbacks200ResponseLinksInner,

    /**
     * The GetV1ShopsShopIdGroups200ResponseInner model constructor.
     * @property {module:model/GetV1ShopsShopIdGroups200ResponseInner}
     */
    GetV1ShopsShopIdGroups200ResponseInner,

    /**
     * The GetV1ShopsShopIdGroupsGroupId200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdGroupsGroupId200Response}
     */
    GetV1ShopsShopIdGroupsGroupId200Response,

    /**
     * The GetV1ShopsShopIdInvoices200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdInvoices200Response}
     */
    GetV1ShopsShopIdInvoices200Response,

    /**
     * The GetV1ShopsShopIdInvoices200ResponseLinksInner model constructor.
     * @property {module:model/GetV1ShopsShopIdInvoices200ResponseLinksInner}
     */
    GetV1ShopsShopIdInvoices200ResponseLinksInner,

    /**
     * The GetV1ShopsShopIdInvoicesInvoiceId200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdInvoicesInvoiceId200Response}
     */
    GetV1ShopsShopIdInvoicesInvoiceId200Response,

    /**
     * The GetV1ShopsShopIdInvoicesInvoiceIdProcess200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdInvoicesInvoiceIdProcess200Response}
     */
    GetV1ShopsShopIdInvoicesInvoiceIdProcess200Response,

    /**
     * The GetV1ShopsShopIdInvoicesInvoiceIdProcess400Response model constructor.
     * @property {module:model/GetV1ShopsShopIdInvoicesInvoiceIdProcess400Response}
     */
    GetV1ShopsShopIdInvoicesInvoiceIdProcess400Response,

    /**
     * The GetV1ShopsShopIdPayouts200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdPayouts200Response}
     */
    GetV1ShopsShopIdPayouts200Response,

    /**
     * The GetV1ShopsShopIdPayouts200ResponseDataInner model constructor.
     * @property {module:model/GetV1ShopsShopIdPayouts200ResponseDataInner}
     */
    GetV1ShopsShopIdPayouts200ResponseDataInner,

    /**
     * The GetV1ShopsShopIdPayoutsBalances200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdPayoutsBalances200Response}
     */
    GetV1ShopsShopIdPayoutsBalances200Response,

    /**
     * The GetV1ShopsShopIdPayoutsBalances200ResponseBtc model constructor.
     * @property {module:model/GetV1ShopsShopIdPayoutsBalances200ResponseBtc}
     */
    GetV1ShopsShopIdPayoutsBalances200ResponseBtc,

    /**
     * The GetV1ShopsShopIdPayoutsBalances200ResponseLtc model constructor.
     * @property {module:model/GetV1ShopsShopIdPayoutsBalances200ResponseLtc}
     */
    GetV1ShopsShopIdPayoutsBalances200ResponseLtc,

    /**
     * The GetV1ShopsShopIdPayoutsTransactions200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdPayoutsTransactions200Response}
     */
    GetV1ShopsShopIdPayoutsTransactions200Response,

    /**
     * The GetV1ShopsShopIdPayoutsTransactions200ResponseDataInner model constructor.
     * @property {module:model/GetV1ShopsShopIdPayoutsTransactions200ResponseDataInner}
     */
    GetV1ShopsShopIdPayoutsTransactions200ResponseDataInner,

    /**
     * The GetV1ShopsShopIdProducts200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdProducts200Response}
     */
    GetV1ShopsShopIdProducts200Response,

    /**
     * The GetV1ShopsShopIdProducts200ResponseDataInner model constructor.
     * @property {module:model/GetV1ShopsShopIdProducts200ResponseDataInner}
     */
    GetV1ShopsShopIdProducts200ResponseDataInner,

    /**
     * The GetV1ShopsShopIdProducts200ResponseDataInnerGroup model constructor.
     * @property {module:model/GetV1ShopsShopIdProducts200ResponseDataInnerGroup}
     */
    GetV1ShopsShopIdProducts200ResponseDataInnerGroup,

    /**
     * The GetV1ShopsShopIdProducts200ResponseLinksInner model constructor.
     * @property {module:model/GetV1ShopsShopIdProducts200ResponseLinksInner}
     */
    GetV1ShopsShopIdProducts200ResponseLinksInner,

    /**
     * The GetV1ShopsShopIdProducts500Response model constructor.
     * @property {module:model/GetV1ShopsShopIdProducts500Response}
     */
    GetV1ShopsShopIdProducts500Response,

    /**
     * The GetV1ShopsShopIdStats200Response model constructor.
     * @property {module:model/GetV1ShopsShopIdStats200Response}
     */
    GetV1ShopsShopIdStats200Response,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The Invoice model constructor.
     * @property {module:model/Invoice}
     */
    Invoice,

    /**
     * The InvoiceProduct model constructor.
     * @property {module:model/InvoiceProduct}
     */
    InvoiceProduct,

    /**
     * The NotFoundError model constructor.
     * @property {module:model/NotFoundError}
     */
    NotFoundError,

    /**
     * The PostV1ShopsCreate200Response model constructor.
     * @property {module:model/PostV1ShopsCreate200Response}
     */
    PostV1ShopsCreate200Response,

    /**
     * The PostV1ShopsCreate400Response model constructor.
     * @property {module:model/PostV1ShopsCreate400Response}
     */
    PostV1ShopsCreate400Response,

    /**
     * The PostV1ShopsCreate500Response model constructor.
     * @property {module:model/PostV1ShopsCreate500Response}
     */
    PostV1ShopsCreate500Response,

    /**
     * The PostV1ShopsShopIdBlacklistRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdBlacklistRequest}
     */
    PostV1ShopsShopIdBlacklistRequest,

    /**
     * The PostV1ShopsShopIdCouponsRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdCouponsRequest}
     */
    PostV1ShopsShopIdCouponsRequest,

    /**
     * The PostV1ShopsShopIdCustomFieldsRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdCustomFieldsRequest}
     */
    PostV1ShopsShopIdCustomFieldsRequest,

    /**
     * The PostV1ShopsShopIdFeedbacksFeedbackIdAppeal200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdFeedbacksFeedbackIdAppeal200Response}
     */
    PostV1ShopsShopIdFeedbacksFeedbackIdAppeal200Response,

    /**
     * The PostV1ShopsShopIdFeedbacksFeedbackIdReply200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdFeedbacksFeedbackIdReply200Response}
     */
    PostV1ShopsShopIdFeedbacksFeedbackIdReply200Response,

    /**
     * The PostV1ShopsShopIdFeedbacksFeedbackIdReplyRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdFeedbacksFeedbackIdReplyRequest}
     */
    PostV1ShopsShopIdFeedbacksFeedbackIdReplyRequest,

    /**
     * The PostV1ShopsShopIdGroupsRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdGroupsRequest}
     */
    PostV1ShopsShopIdGroupsRequest,

    /**
     * The PostV1ShopsShopIdInvoicesInvoiceIdArchive200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdInvoicesInvoiceIdArchive200Response}
     */
    PostV1ShopsShopIdInvoicesInvoiceIdArchive200Response,

    /**
     * The PostV1ShopsShopIdInvoicesInvoiceIdArchive400Response model constructor.
     * @property {module:model/PostV1ShopsShopIdInvoicesInvoiceIdArchive400Response}
     */
    PostV1ShopsShopIdInvoicesInvoiceIdArchive400Response,

    /**
     * The PostV1ShopsShopIdInvoicesInvoiceIdUnarchive200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdInvoicesInvoiceIdUnarchive200Response}
     */
    PostV1ShopsShopIdInvoicesInvoiceIdUnarchive200Response,

    /**
     * The PostV1ShopsShopIdInvoicesInvoiceIdUnarchive400Response model constructor.
     * @property {module:model/PostV1ShopsShopIdInvoicesInvoiceIdUnarchive400Response}
     */
    PostV1ShopsShopIdInvoicesInvoiceIdUnarchive400Response,

    /**
     * The PostV1ShopsShopIdPayoutsPayout200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdPayoutsPayout200Response}
     */
    PostV1ShopsShopIdPayoutsPayout200Response,

    /**
     * The PostV1ShopsShopIdPayoutsPayout200ResponsePayout model constructor.
     * @property {module:model/PostV1ShopsShopIdPayoutsPayout200ResponsePayout}
     */
    PostV1ShopsShopIdPayoutsPayout200ResponsePayout,

    /**
     * The PostV1ShopsShopIdPayoutsPayout200ResponsePayoutTransactionId model constructor.
     * @property {module:model/PostV1ShopsShopIdPayoutsPayout200ResponsePayoutTransactionId}
     */
    PostV1ShopsShopIdPayoutsPayout200ResponsePayoutTransactionId,

    /**
     * The PostV1ShopsShopIdPayoutsPayout400Response model constructor.
     * @property {module:model/PostV1ShopsShopIdPayoutsPayout400Response}
     */
    PostV1ShopsShopIdPayoutsPayout400Response,

    /**
     * The PostV1ShopsShopIdPayoutsPayoutRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdPayoutsPayoutRequest}
     */
    PostV1ShopsShopIdPayoutsPayoutRequest,

    /**
     * The PostV1ShopsShopIdProducts200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdProducts200Response}
     */
    PostV1ShopsShopIdProducts200Response,

    /**
     * The PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner model constructor.
     * @property {module:model/PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner}
     */
    PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInner,

    /**
     * The PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInnerAllOfPivot model constructor.
     * @property {module:model/PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInnerAllOfPivot}
     */
    PostV1ShopsShopIdProducts200ResponseAllOfCustomFieldsInnerAllOfPivot,

    /**
     * The PostV1ShopsShopIdProducts200ResponseAllOfImagesInner model constructor.
     * @property {module:model/PostV1ShopsShopIdProducts200ResponseAllOfImagesInner}
     */
    PostV1ShopsShopIdProducts200ResponseAllOfImagesInner,

    /**
     * The PostV1ShopsShopIdProducts200ResponseAllOfImagesInnerAllOfPivot model constructor.
     * @property {module:model/PostV1ShopsShopIdProducts200ResponseAllOfImagesInnerAllOfPivot}
     */
    PostV1ShopsShopIdProducts200ResponseAllOfImagesInnerAllOfPivot,

    /**
     * The PostV1ShopsShopIdProductsRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdProductsRequest}
     */
    PostV1ShopsShopIdProductsRequest,

    /**
     * The PostV1ShopsShopIdThemesRequest model constructor.
     * @property {module:model/PostV1ShopsShopIdThemesRequest}
     */
    PostV1ShopsShopIdThemesRequest,

    /**
     * The PostV1ShopsShopIdThemesThemeIdImport200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdThemesThemeIdImport200Response}
     */
    PostV1ShopsShopIdThemesThemeIdImport200Response,

    /**
     * The PostV1ShopsShopIdThemesThemeIdUpdate200Response model constructor.
     * @property {module:model/PostV1ShopsShopIdThemesThemeIdUpdate200Response}
     */
    PostV1ShopsShopIdThemesThemeIdUpdate200Response,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The PutV1ShopsShopIdCouponsCouponIdUpdateRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdCouponsCouponIdUpdateRequest}
     */
    PutV1ShopsShopIdCouponsCouponIdUpdateRequest,

    /**
     * The PutV1ShopsShopIdCustomFieldsCustomFieldIdRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdCustomFieldsCustomFieldIdRequest}
     */
    PutV1ShopsShopIdCustomFieldsCustomFieldIdRequest,

    /**
     * The PutV1ShopsShopIdGroupsGroupIdUpdateRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdGroupsGroupIdUpdateRequest}
     */
    PutV1ShopsShopIdGroupsGroupIdUpdateRequest,

    /**
     * The PutV1ShopsShopIdPaymentProcessorsUpdate200Response model constructor.
     * @property {module:model/PutV1ShopsShopIdPaymentProcessorsUpdate200Response}
     */
    PutV1ShopsShopIdPaymentProcessorsUpdate200Response,

    /**
     * The PutV1ShopsShopIdPaymentProcessorsUpdateRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdPaymentProcessorsUpdateRequest}
     */
    PutV1ShopsShopIdPaymentProcessorsUpdateRequest,

    /**
     * The PutV1ShopsShopIdProductsProductIdUpdateRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdProductsProductIdUpdateRequest}
     */
    PutV1ShopsShopIdProductsProductIdUpdateRequest,

    /**
     * The PutV1ShopsShopIdThemesThemeIdApply200Response model constructor.
     * @property {module:model/PutV1ShopsShopIdThemesThemeIdApply200Response}
     */
    PutV1ShopsShopIdThemesThemeIdApply200Response,

    /**
     * The PutV1ShopsShopIdThemesThemeIdRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdThemesThemeIdRequest}
     */
    PutV1ShopsShopIdThemesThemeIdRequest,

    /**
     * The PutV1ShopsShopIdUpdate400Response model constructor.
     * @property {module:model/PutV1ShopsShopIdUpdate400Response}
     */
    PutV1ShopsShopIdUpdate400Response,

    /**
     * The PutV1ShopsShopIdUpdateRequest model constructor.
     * @property {module:model/PutV1ShopsShopIdUpdateRequest}
     */
    PutV1ShopsShopIdUpdateRequest,

    /**
     * The Shop model constructor.
     * @property {module:model/Shop}
     */
    Shop,

    /**
     * The Theme model constructor.
     * @property {module:model/Theme}
     */
    Theme,

    /**
     * The ThemeOfficialTheme model constructor.
     * @property {module:model/ThemeOfficialTheme}
     */
    ThemeOfficialTheme,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
    * The EndpointsApi service constructor.
    * @property {module:api/EndpointsApi}
    */
    EndpointsApi
};
