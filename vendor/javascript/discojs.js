// discojs@2.3.1 downloaded from https://ga.jspm.io/npm:discojs@2.3.1/dist/index.es.js

import e,{Headers as t}from"cross-fetch";import s from"oauth-1.0a";import r from"bottleneck";var n;(function(e){e.NEEDS_VOTE="Needs Vote";e.NEEDS_MINOR_CHANGE="Needs Minor Changes";e.CORRECT="Correct"})(n||(n={}));var i;(function(e){e.ACCEPTED="Accepted"})(i||(i={}));var a;(function(e){e.MINT="Mint (M)";e.NEAR_MINT="Near Mint (NM or M-)";e.VERY_GOOD_PLUS="Very Good Plus (VG+)";e.VERY_GOOD="Very Good (VG)";e.GOOD_PLUS="Good Plus (G+)";e.GOOD="Good (G)";e.FAIR="Fair (F)";e.POOR="Poor (P)"})(a||(a={}));var o;(function(e){e.MINT="Mint (M)";e.NEAR_MINT="Near Mint (NM or M-)";e.VERY_GOOD_PLUS="Very Good Plus (VG+)";e.VERY_GOOD="Very Good (VG)";e.GOOD_PLUS="Good Plus (G+)";e.GOOD="Good (G)";e.FAIR="Fair (F)";e.POOR="Poor (P)";e.GENERIC="Generic";e.NOT_GRADED="Not Graded";e.NO_COVER="No Cover"})(o||(o={}));var c;(function(e){e.USD="USD";e.GBP="GBP";e.EUR="EUR";e.CAD="CAD";e.AUD="AUD";e.JPY="JPY";e.CHF="CHF";e.MXN="MXN";e.BRL="BRL";e.NZD="NZD";e.SEK="SEK";e.ZAR="ZAR"})(c||(c={}));var h;(function(e){e[e.ALL=0]="ALL";e[e.UNCATEGORIZED=1]="UNCATEGORIZED"})(h||(h={}));var l;(function(e){e.ALL="All";e.DELETED="Deleted";e.DRAFT="Draft";e.EXPIRED="Expired";e.FOR_SALE="For Sale";e.SOLD="Sold";e.SUSPENDED="Suspended";e.VIOLATION="Violation"})(l||(l={}));var u;(function(e){e.LISTED="listed";e.PRICE="price";e.ITEM="item";e.ARTIST="artist";e.LABEL="label";e.CATNO="catno";e.AUDIO="audio";e.STATUS="status";e.LOCATION="location"})(u||(u={}));var d;(function(e){e.FOR_SALE="For Sale";e.DRAFT="Draft"})(d||(d={}));var g;(function(e){e.NEW_ORDER="New Order";e.BUYER_CONTACTER="Buyer Contacted";e.INVOICE_SENT="Invoice Sent";e.PAYMENT_PENDING="Payment Pending";e.PAYMENT_RECEIVED="Payment Received";e.SHIPPED="Shipped";e.REFUND_SENT="Refund Sent";e.CANCELLED_NON_PAYING_BUYER="Cancelled (Non-Paying Buyer)";e.CANCELLED_ITEM_UNAVAILABLE="Cancelled (Item Unavailable)";e.CANCELLED_PER_BUYER_REQUEST="Cancelled (Per Buyer's Request)"})(g||(g={}));var E;(function(e){e.ALL="All";e.NEW_ORDER="New Order";e.BUYER_CONTACTED="Buyer Contacted";e.INVOICE_SENT="Invoice Sent";e.PAYMENT_PENDING="Payment Pending";e.PAYMENT_RECEIVED="Payment Received";e.SHIPPED="Shipped";e.MERGED="Merged";e.ORDER_CHANGED="Order Changed";e.REFUND_SENT="Refund Sent";e.CANCELLED="Cancelled";e.CANCELLED_NON_PAYING_BUYER="Cancelled (Non-Paying Buyer)";e.CANCELLED_ITEM_UNAVAILABLE="Cancelled (Item Unavailable)";e.CANCELLED_PER_BUYER_REQUEST="Cancelled (Per Buyer's Request)";e.CANCELLED_REFUND_RECEIVED="Cancelled (Refund Received)"})(E||(E={}));var y;(function(e){e.ID="id";e.BUYER="buyer";e.CREATED="created";e.STATUS="status";e.LAST_ACTIVITY="last_activity"})(y||(y={}));var m;(function(e){e.STATUS="status";e.MESSAGE="message";e.SHIPPING="shipping";e.REFUND_SENT="refund_sent";e.REFUND_RECEIVED="refund_received"})(m||(m={}));var f;(function(e){e.YEAR="year";e.TITLE="title";e.FORMAT="format"})(f||(f={}));var A;(function(e){e.RELEASE="release";e.MASTER="master";e.ARTIST="artist";e.LABEL="label"})(A||(A={}));var R;(function(e){e.LABEL="label";e.ARTIST="artist";e.TITLE="title";e.CATNO="catno";e.FORMAT="format";e.RATING="rating";e.YEAR="year";e.ADDED="added"})(R||(R={}));function applyMixins(e,t){t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((s=>{Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(t.prototype,s)||Object.create(null))}))}))}class AuthError extends Error{name;message;statusCode;constructor(){super();this.name="AuthError";this.message="Unauthorized";this.statusCode=401;Object.setPrototypeOf(this,AuthError.prototype)}}class DiscogsError extends Error{message;name;statusCode;constructor(e,t){super(e);this.message=e;this.name="DiscogsError";this.statusCode=t;Object.setPrototypeOf(this,DiscogsError.prototype)}}function isAuthenticatedWithToken(e){return!!e&&"userToken"in e&&typeof e.userToken==="string"}function isAuthenticatedWithConsumerKey(e){return!!e&&"consumerKey"in e&&typeof e.consumerKey==="string"&&"consumerSecret"in e&&typeof e.consumerSecret==="string"&&"oAuthToken"in e&&typeof e.oAuthToken==="string"&&"oAuthTokenSecret"in e&&typeof e.oAuthTokenSecret==="string"}function isAuthenticated(e){return isAuthenticatedWithToken(e)||isAuthenticatedWithConsumerKey(e)}function makeSetAuthorizationHeader(e){if(isAuthenticatedWithToken(e))return()=>`Discogs token=${e.userToken}`;if(isAuthenticatedWithConsumerKey(e)){const t=new s({consumer:{key:e.consumerKey,secret:e.consumerSecret},signature_method:"PLAINTEXT",version:"1.0"});return(s,r)=>{if(!s||!r)return"";const n=t.authorize({url:s,method:r},{key:e.oAuthToken,secret:e.oAuthTokenSecret});return t.toHeader(n).Authorization}}}function createLimiter({maxRequests:e,requestLimitInterval:t}){return new r({maxConcurrent:1,minTime:t/e,reservoir:e,reservoirRefreshAmount:e,reservoirRefreshInterval:t})}const p="https://api.discogs.com";const U="https://img.discogs.com";const T="v2";const I="Discojs/2.3.1";const D="X-Discogs-Ratelimit";const L="X-Discogs-Ratelimit-Remaining";var S;(function(e){e.GET="GET";e.POST="POST";e.PUT="PUT";e.DELETE="DELETE"})(S||(S={}));class Fetcher{userAgent;outputFormat;headers;setAuthorizationHeader;options;maxRequests;reservoirRefreshInterval;limiter;cache;constructor(e){const{requestLimit:s=25,requestLimitAuth:r=60,requestLimitInterval:n=6e4,userAgent:i=I,outputFormat:a="discogs",fetchOptions:o={},cache:c,allowUnsafeHeaders:h=true}=e||{};this.userAgent=i;this.outputFormat=a;const l=h?{"Accept-Encoding":"gzip,deflate",Connection:"close","User-Agent":i}:{};this.headers=new t({Accept:`application/vnd.discogs.${T}.${a}+json`,"Content-Type":"application/json",...l});this.setAuthorizationHeader=makeSetAuthorizationHeader(e);this.options=o;this.maxRequests=isAuthenticated(e)?r:s;this.reservoirRefreshInterval=n;this.limiter=createLimiter({maxRequests:this.maxRequests,requestLimitInterval:this.reservoirRefreshInterval});this.cache=c}updateMaxRequests(e){this.limiter.updateSettings({minTime:this.reservoirRefreshInterval/e,reservoir:e,reservoirRefreshAmount:e})}updateRemainingRequests(e){this.limiter.updateSettings({reservoir:e})}maybeUpdateLimiter(e){const t=parseInt(e.get(D)??"",10);const s=parseInt(e.get(L)??"",10);!Number.isNaN(t)&&t<this.maxRequests&&this.updateMaxRequests(t);Number.isNaN(s)||this.updateRemainingRequests(s)}async fetch(t,s,r){const n=await e(t,s);const{status:i,statusText:a,headers:o}=n;this.maybeUpdateLimiter(o);if(i===401)throw new AuthError;if(i===422||i>=500){const{message:e,detail:t}=await n.json();const s=t?t.map((e=>`${e.loc.join(".")}: ${e.msg} (${e.type})`)).join("\n"):e;throw new DiscogsError(s,i)}if(i<200||i>=300)throw new DiscogsError(a,i);if(i===204)return Promise.resolve({});if(r){const e=await n.blob();return e}const c=await n.json();return c}async schedule(e,t,s,r){const n=e.startsWith(U);const i=n?e:p+(t&&typeof t==="object"?Fetcher.addQueryToUri(e,t):e);const a=e.endsWith("/download");const o={...this.options,method:s||S.GET};this.setAuthorizationHeader&&this.headers.set("Authorization",this.setAuthorizationHeader(e,s||S.GET));const c=new Map(this.headers);if(r){const e=JSON.stringify(Fetcher.transformData(r));o.body=e;c.set("Content-Type","application/json");c.set("Content-Length",Buffer.byteLength(e,"utf8").toString())}o.headers=Object.fromEntries(c);const execute=()=>this.limiter.schedule((()=>this.fetch(i,o,n||a)));return this.cache?.get(execute,i,o)??execute()}
/**
     * Helper to add query to a URI. Strips undefined values.
     *
     * @param uri - Endpoint to which query will be appended.
     * @param query
     * @returns URI + query
     *
     * @internal
     */static addQueryToUri(e,t){const s=new URLSearchParams;Object.entries(t).forEach((([e,t])=>{typeof t!=="undefined"&&s.append(e,t)}));return`${e}?${s.toString()}`}
/**
     * Helper to transform camelcased data keys to snakecased one and rename `currency` to `curr_abbr`.
     *
     * @param data
     * @returns Tranformed `data` object.
     *
     * @internal
     */static transformData(e){return Object.entries(e).reduce(((e,[t,s])=>({...e,[t==="currency"?"curr_abbr":t.replace(/[A-Z]/g,(e=>`_${e.toLowerCase()}`))]:s})),{})}async*createAllMethod(e){let t=1;let s=1;do{const{pagination:r,...n}=await e({page:t,perPage:100});s=r.pages;yield n;t+=1}while(t<=s)}}const C=1;const F=50;function paginate(e){const{page:t=C,perPage:s=F}=e||{};return{page:Math.max(C,t),per_page:s<=0||s>100?F:s}}var O;(function(e){e.ASC="asc";e.DESC="desc"})(O||(O={}));function sortBy(e,t){const{by:s=e,order:r=O.ASC}=t||{};return{sort:s,sort_order:r}}class Database{async getRelease(e,t){return this.fetcher.schedule(`/releases/${e}`,{currency:t})}async getReleaseRatingForUser(e,t){return this.fetcher.schedule(`/releases/${t}/rating/${e}`)}async getReleaseRating(e){const t=await this.getUsername();return this.getReleaseRatingForUser(t,e)}async updateReleaseRating(e,t){const s=await this.getUsername();return this.fetcher.schedule(`/releases/${e}/rating/${s}`,{},S.PUT,{rating:t})}async deleteReleaseRating(e){const t=await this.getUsername();return this.fetcher.schedule(`/releases/${e}/rating/${t}`,{},S.DELETE)}async getCommunityReleaseRating(e){return this.fetcher.schedule(`/releases/${e}/rating`)}async getReleaseStats(e){const{community:t}=await this.getRelease(e);return{num_have:t.have,num_want:t.want}}async getMaster(e){return this.fetcher.schedule(`/masters/${e}`)}async getMasterVersions(e,t){return this.fetcher.schedule(`/masters/${e}/versions`,paginate(t))}getAllMasterVersions(e){return this.fetcher.createAllMethod((t=>this.getMasterVersions(e,t)))}async getArtist(e){return this.fetcher.schedule(`/artists/${e}`)}async getArtistReleases(e,t,s){return this.fetcher.schedule(`/artists/${e}/releases`,{...sortBy(f.YEAR,t),...paginate(s)})}getAllArtistReleases(e,t){return this.fetcher.createAllMethod((s=>this.getArtistReleases(e,t,s)))}async getLabel(e){return this.fetcher.schedule(`/labels/${e}`)}async getLabelReleases(e,t){return this.fetcher.schedule(`/labels/${e}/releases`,paginate(t))}getAllLabelReleases(e){return this.fetcher.createAllMethod((t=>this.getLabelReleases(e,t)))}async searchDatabase(e={},t){return this.fetcher.schedule("/database/search",{...e,...paginate(t)})}async searchRelease(e,t={},s){return this.searchDatabase({...t,query:e,type:A.RELEASE},s)}async searchMaster(e,t={},s){return this.searchDatabase({...t,query:e,type:A.MASTER},s)}async searchArtist(e,t={},s){return this.searchDatabase({...t,query:e,type:A.ARTIST},s)}async searchLabel(e,t={},s){return this.searchDatabase({...t,query:e,type:A.LABEL},s)}}class InventoryExport{async requestInventoryExport(){return this.fetcher.schedule("/inventory/export",void 0,S.POST)}async getRecentExports(e){return this.fetcher.schedule("/inventory/export",paginate(e))}getAllRecentExports(){return this.fetcher.createAllMethod((e=>this.getRecentExports(e)))}async getExport(e){return this.fetcher.schedule(`/inventory/export/${e}`)}async downloadExport(e){return this.fetcher.schedule(`/inventory/export/${e}/download`)}}class InventoryUpload{}class MarketPlace{async getInventoryForUser(e,t=l.ALL,s,r){return this.fetcher.schedule(`/users/${e}/inventory`,{status:t,...sortBy(u.LISTED,s),...paginate(r)})}getAllInventoryForUser(e,t=l.ALL,s){return this.fetcher.createAllMethod((r=>this.getInventoryForUser(e,t,s,r)))}async getInventory(e,t,s){const r=await this.getUsername();return this.getInventoryForUser(r,e,t,s)}getAllInventory(e,t){return this.fetcher.createAllMethod((s=>this.getInventory(e,t,s)))}async getListing(e,t){return this.fetcher.schedule(`/marketplace/listings/${e}`,{currency:t})}async editListing(e,t,s){return this.fetcher.schedule(`/marketplace/listings/${e}`,{currency:s},S.POST,t)}async deleteListing(e){return this.fetcher.schedule(`/marketplace/listings/${e}`,{},S.DELETE)}async createListing(e){return this.fetcher.schedule("/marketplace/listings/",{},S.POST,e)}async getOrder(e){return this.fetcher.schedule(`/marketplace/orders/${e}`)}async editOrder(e,t,s){return this.fetcher.schedule(`/marketplace/orders/${e}`,{},S.POST,{status:t,shipping:s})}async listOrders(e,t,s,r){return this.fetcher.schedule("/marketplace/orders",{status:e,archived:t,...sortBy(y.ID,s),...paginate(r)})}listAllOrders(e,t,s){return this.fetcher.createAllMethod((r=>this.listOrders(e,t,s,r)))}async listOrderMessages(e){return this.fetcher.schedule(`/marketplace/orders/${e}/messages`)}async sendOrderMessage(e,t,s){return this.fetcher.schedule(`/marketplace/orders/${e}/messages`,{},S.POST,{message:t,status:s})}async getPriceSuggestions(e){return this.fetcher.schedule(`/marketplace/price_suggestions/${e}`)}async getMarketplaceStatistics(e,t){return this.fetcher.schedule(`/marketplace/stats/${e}`,{currency:t})}}class UserCollection{async listFoldersForUser(e){return this.fetcher.schedule(`/users/${e}/collection/folders`)}async listFolders(){const e=await this.getUsername();return this.listFoldersForUser(e)}async createFolder(e){const t=await this.getUsername();return this.fetcher.schedule(`/users/${t}/collection/folders`,{},S.POST,{name:e})}async getFolderForUser(e,t){return this.fetcher.schedule(`/users/${e}/collection/folders/${t}`)}async getFolder(e){const t=await this.getUsername();return this.getFolderForUser(t,e)}async editFolder(e,t){const s=await this.getUsername();return this.fetcher.schedule(`/users/${s}/collection/folders/${e}`,{},S.POST,{name:t})}async deleteFolder(e){const t=await this.getUsername();return this.fetcher.schedule(`/users/${t}/collection/folders/${e}`,{},S.DELETE)}async listItemsByReleaseForUser(e,t,s){return this.fetcher.schedule(`/users/${e}/collection/releases/${t}`,paginate(s))}listAllItemsByReleaseForUser(e,t){return this.fetcher.createAllMethod((s=>this.listItemsByReleaseForUser(e,t,s)))}async listItemsByRelease(e,t){const s=await this.getUsername();return this.listItemsByReleaseForUser(s,e,t)}listAllItemsByRelease(e){return this.fetcher.createAllMethod((t=>this.listItemsByRelease(e,t)))}async listItemsInFolderForUser(e,t,s,r){return this.fetcher.schedule(`/users/${e}/collection/folders/${t}/releases`,{...sortBy(R.ADDED,s),...paginate(r)})}listAllItemsInFolderForUser(e,t,s){return this.fetcher.createAllMethod((r=>this.listItemsInFolderForUser(e,t,s,r)))}async listItemsInFolder(e,t,s){const r=await this.getUsername();return this.listItemsInFolderForUser(r,e,t,s)}listAllItemsInFolder(e,t){return this.fetcher.createAllMethod((s=>this.listItemsInFolder(e,t,s)))}async addReleaseToFolder(e,t=h.UNCATEGORIZED){const s=await this.getUsername();return this.fetcher.schedule(`/users/${s}/collection/folders/${t}/releases/${e}`,{},S.POST)}async editReleaseInstanceRating(e,t,s,r){const n=await this.getUsername();return this.fetcher.schedule(`/users/${n}/collection/folders/${e}/releases/${t}/instances/${s}`,{},S.POST,{rating:r})}async moveReleaseInstanceToFolder(e,t,s,r){const n=await this.getUsername();return this.fetcher.schedule(`/users/${n}/collection/folders/${e}/releases/${t}/instances/${s}`,{},S.POST,{folderId:r})}async deleteReleaseInstanceFromFolder(e,t,s){const r=await this.getUsername();return this.fetcher.schedule(`/users/${r}/collection/folders/${e}/releases/${t}/instances/${s}`,{},S.DELETE)}async listCustomFieldsForUser(e){return this.fetcher.schedule(`/users/${e}/collection/fields`)}async listCustomFields(){const e=await this.getUsername();return this.listCustomFieldsForUser(e)}async editCustomFieldForInstance(e,t,s,r,n){const i=await this.getUsername();return this.fetcher.schedule(`/users/${i}/collection/folders/${e}/releases/${t}/instances/${s}/fields/${r}`,void 0,S.POST,{value:n})}async getCollectionValue(){const e=await this.getUsername();return this.fetcher.schedule(`/users/${e}/collection/value`)}}class UserIdentity{async getIdentity(){return this.fetcher.schedule("/oauth/identity")}async getUsername(){const{username:e}=await this.getIdentity();return e}async getProfileForUser(e){return this.fetcher.schedule(`/users/${e}`)}async getProfile(){const e=await this.getUsername();return this.getProfileForUser(e)}async editProfile(e){const t=await this.getUsername();return this.fetcher.schedule(`/users/${t}`,{},S.POST,{username:t,...e})}async getSubmissionsForUser(e,t){return this.fetcher.schedule(`/users/${e}/submissions`,paginate(t))}getAllSubmissionsForUser(e){return this.fetcher.createAllMethod((t=>this.getSubmissionsForUser(e,t)))}async getSubmissions(e){const t=await this.getUsername();return this.getSubmissionsForUser(t,e)}getAllSubmissions(){return this.fetcher.createAllMethod((e=>this.getSubmissions(e)))}async getContributionsForUser(e,t,s){return this.fetcher.schedule(`/users/${e}/contributions`,{...sortBy(R.ADDED,t),...paginate(s)})}getAllContributionsForUser(e,t){return this.fetcher.createAllMethod((s=>this.getContributionsForUser(e,t,s)))}async getContributions(e,t){const s=await this.getUsername();return this.getContributionsForUser(s,e,t)}getAllContributions(e){return this.fetcher.createAllMethod((t=>this.getContributions(e,t)))}}class UserLists{async getListsForUser(e,t){return this.fetcher.schedule(`/users/${e}/lists`,paginate(t))}getAllListsForUser(e){return this.fetcher.createAllMethod((t=>this.getListsForUser(e,t)))}async getLists(e){const t=await this.getUsername();return this.getListsForUser(t,e)}getAllLists(){return this.fetcher.createAllMethod((e=>this.getLists(e)))}async getListItems(e){return this.fetcher.schedule(`/lists/${e}`)}}class UserWantlist{async getWantlistForUser(e,t){return this.fetcher.schedule(`/users/${e}/wants`,paginate(t))}getAllWantlistForUser(e){return this.fetcher.createAllMethod((t=>this.getWantlistForUser(e,t)))}async getWantlist(e){const t=await this.getUsername();return this.getWantlistForUser(t,e)}getAllWantlist(){return this.fetcher.createAllMethod((e=>this.getWantlist(e)))}async addToWantlist(e,t,s){const r=await this.getUsername();return this.fetcher.schedule(`/users/${r}/wants/${e}`,{notes:t,rating:s},S.PUT)}async removeFromWantlist(e){const t=await this.getUsername();return this.fetcher.schedule(`/users/${t}/wants/${e}`,{},S.DELETE)}}class Discojs{fetcher;userAgent;outputFormat;constructor(e){this.fetcher=new Fetcher(e??{});this.userAgent=this.fetcher.userAgent;this.outputFormat=this.fetcher.outputFormat}static getSupportedCurrencies(){return Object.values(c)}static getReleaseConditions(){return Object.values(a)}static getSleeveConditions(){return Object.values(o)}async fetchImage(e){return this.fetcher.schedule(e)}}applyMixins(Discojs,[UserIdentity,UserCollection,UserWantlist,UserLists,Database,MarketPlace,InventoryExport,InventoryUpload]);export{AuthError,i as CommunityStatusesEnum,c as CurrenciesEnum,n as DataQualityEnum,DiscogsError,Discojs,g as EditOrderStatusesEnum,h as FolderIdsEnum,u as InventorySortEnum,l as InventoryStatusesEnum,d as ListingStatusesEnum,m as OrderMessageTypesEnum,y as OrderSortEnum,E as OrderStatusesEnum,a as ReleaseConditionsEnum,f as ReleaseSortEnum,A as SearchTypeEnum,o as SleeveConditionsEnum,O as SortOrdersEnum,R as UserSortEnum};

