# SellAuth.PutV1ShopsShopIdProductsProductIdUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**path** | **String** |  | [optional] 
**description** | **String** |  | 
**instructions** | **String** |  | [optional] 
**outOfStockMessage** | **String** |  | [optional] 
**currency** | **String** |  | 
**deliverables** | **String** |  | [optional] 
**deliverablesType** | **String** |  | [optional] 
**stock** | **Number** | Must be at least -1. | [optional] 
**groupId** | **String** |  | [optional] 
**imageIds** | **[String]** |  | [optional] 
**type** | **String** |  | 
**visibility** | **String** |  | 
**paymentMethods** | **Object** |  | [optional] 
**price** | **String** | This field is required when &lt;code&gt;type&lt;/code&gt; is &lt;code&gt;single&lt;/code&gt;. | [optional] 
**quantityMin** | **Number** | Must be at least 1. | [optional] 
**quantityMax** | **Number** | Must be at least 0. | [optional] 
**volumeDiscounts** | **[String]** |  | [optional] 
**discordGuildId** | **String** |  | [optional] 
**discordRoleId** | **String** |  | [optional] 
**blockVpn** | **Boolean** |  | [optional] 
**customFieldIds** | **[String]** |  | [optional] 
**variants** | **Object** | This field is required when &lt;code&gt;type&lt;/code&gt; is &lt;code&gt;variant&lt;/code&gt;.  This field is required when &lt;code&gt;type&lt;/code&gt; is &lt;code&gt;variant&lt;/code&gt;.  This field is required when &lt;code&gt;type&lt;/code&gt; is &lt;code&gt;variant&lt;/code&gt;. Must have at least 1 items. | [optional] 



## Enum: DeliverablesTypeEnum


* `serials` (value: `"serials"`)

* `service` (value: `"service"`)

* `dynamic` (value: `"dynamic"`)





## Enum: TypeEnum


* `single` (value: `"single"`)

* `variant` (value: `"variant"`)





## Enum: VisibilityEnum


* `public` (value: `"public"`)

* `unlisted` (value: `"unlisted"`)

* `private` (value: `"private"`)

* `on_hold` (value: `"on_hold"`)




