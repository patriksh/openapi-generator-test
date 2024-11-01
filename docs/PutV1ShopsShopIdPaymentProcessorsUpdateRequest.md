# SellAuth.PutV1ShopsShopIdPaymentProcessorsUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paypalEmail** | **String** | Must be a valid email address. | [optional] 
**paypalMethod** | **String** |  | 
**paypalClientId** | **String** |  | [optional] 
**paypalClientSecret** | **String** |  | [optional] 
**paypalffEmail** | **String** | Must be a valid email address. | [optional] 
**paypalffMethod** | **String** |  | 
**paypalffCurrency** | **String** |  | [optional] 
**stripeApiKey** | **String** |  | [optional] 
**stripeWebhookSecret** | **String** |  | [optional] 
**stripePaypal** | **Boolean** |  | [optional] 
**squareApiKey** | **String** |  | [optional] 
**squareLocationId** | **String** |  | [optional] 
**bitcoinAddress** | **String** |  | [optional] 
**litecoinAddress** | **String** |  | [optional] 
**cashappCashtag** | **String** |  | [optional] 
**cashappEmail** | **String** |  | [optional] 
**venmoTag** | **String** |  | [optional] 
**venmoEmail** | **String** |  | [optional] 
**amazonpsMerchantIdentifier** | **String** |  | [optional] 
**amazonpsAccessCode** | **String** |  | [optional] 
**amazonpsShaRequestPhrase** | **String** |  | [optional] 
**amazonpsShaResponsePhrase** | **String** |  | [optional] 



## Enum: PaypalMethodEnum


* `legacy` (value: `"legacy"`)

* `rest` (value: `"rest"`)





## Enum: PaypalffMethodEnum


* `email` (value: `"email"`)

* `ipn_note` (value: `"ipn_note"`)





## Enum: PaypalffCurrencyEnum


* `USD` (value: `"USD"`)

* `EUR` (value: `"EUR"`)




