import{_ as e,o as a,c as d,e as i}from"./app.f46079ae.js";var r="/assets/HTTPStaleness.f1233a36.png",c="/assets/HTTPRevved.d9bdcf61.png",t="/assets/HTTPVary.c27578c7.png";const s={},n=i(`<h1 id="http-cache" tabindex="-1"><a class="header-anchor" href="#http-cache" aria-hidden="true">#</a> HTTP Cache</h1><p>\u901A\u8FC7\u590D\u7528\u4EE5\u524D\u83B7\u53D6\u7684\u8D44\u6E90\uFF0C\u53EF\u4EE5\u663E\u8457\u63D0\u9AD8\u7F51\u7AD9\u548C\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u3002Web \u7F13\u5B58\u51CF\u5C11\u4E86\u7B49\u5F85\u65F6\u95F4\u548C\u7F51\u7EDC\u6D41\u91CF\uFF0C\u56E0\u6B64\u51CF\u5C11\u4E86\u663E\u793A\u8D44\u6E90\u8868\u793A\u5F62\u5F0F\u6240\u9700\u7684\u65F6\u95F4\u3002\u901A\u8FC7\u4F7F\u7528 HTTP \u7F13\u5B58\uFF0C\u53D8\u5F97\u66F4\u52A0\u54CD\u5E94\u6027\u3002</p><h2 id="\u4E0D\u540C\u79CD\u7C7B\u7684\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u79CD\u7C7B\u7684\u7F13\u5B58" aria-hidden="true">#</a> \u4E0D\u540C\u79CD\u7C7B\u7684\u7F13\u5B58</h2><p>\u7F13\u5B58\u662F\u4E00\u79CD\u4FDD\u5B58\u8D44\u6E90\u526F\u672C\u5E76\u5728\u4E0B\u6B21\u8BF7\u6C42\u65F6\u76F4\u63A5\u4F7F\u7528\u8BE5\u526F\u672C\u7684\u6280\u672F\u3002\u5F53 Web \u7F13\u5B58\u53D1\u73B0\u8BF7\u6C42\u7684\u8D44\u6E90\u5DF2\u7ECF\u88AB\u5B58\u50A8\uFF0C\u5B83\u4F1A\u62E6\u622A\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u8BE5\u8D44\u6E90\u7684\u62F7\u8D1D\uFF0C\u800C\u4E0D\u4F1A\u53BB\u6E90\u670D\u52A1\u5668\u91CD\u65B0\u4E0B\u8F7D\u3002\u8FD9\u6837\u5E26\u6765\u7684\u597D\u5904\u6709\uFF1A\u7F13\u89E3\u670D\u52A1\u5668\u7AEF\u538B\u529B\uFF0C\u63D0\u5347\u6027\u80FD (\u83B7\u53D6\u8D44\u6E90\u7684\u8017\u65F6\u66F4\u77ED\u4E86)\u3002\u5BF9\u4E8E\u7F51\u7AD9\u6765\u8BF4\uFF0C\u7F13\u5B58\u662F\u8FBE\u5230\u9AD8\u6027\u80FD\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002\u7F13\u5B58\u9700\u8981\u5408\u7406\u914D\u7F6E\uFF0C\u56E0\u4E3A\u5E76\u4E0D\u662F\u6240\u6709\u8D44\u6E90\u90FD\u662F\u6C38\u4E45\u4E0D\u53D8\u7684\uFF1A\u91CD\u8981\u7684\u662F\u5BF9\u4E00\u4E2A\u8D44\u6E90\u7684\u7F13\u5B58\u5E94\u622A\u6B62\u5230\u5176\u4E0B\u4E00\u6B21\u53D1\u751F\u6539\u53D8\uFF08\u5373\u4E0D\u80FD\u7F13\u5B58\u8FC7\u671F\u7684\u8D44\u6E90\uFF09\u3002</p><p>\u7F13\u5B58\u7684\u79CD\u7C7B\u6709\u5F88\u591A\uFF0C\u5176\u5927\u81F4\u53EF\u5F52\u4E3A\u4E24\u7C7B\uFF1A\u79C1\u6709\u4E0E\u5171\u4EAB\u7F13\u5B58\u3002\u5171\u4EAB\u7F13\u5B58\u5B58\u50A8\u7684\u54CD\u5E94\u80FD\u591F\u88AB\u591A\u4E2A\u7528\u6237\u4F7F\u7528\u3002\u79C1\u6709\u7F13\u5B58\u53EA\u80FD\u7528\u4E8E\u5355\u72EC\u7528\u6237\u3002\u672C\u6587\u5C06\u4E3B\u8981\u4ECB\u7ECD\u6D4F\u89C8\u5668\u4E0E\u4EE3\u7406\u7F13\u5B58\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u6709\u7F51\u5173\u7F13\u5B58\u3001CDN\u3001\u53CD\u5411\u4EE3\u7406\u7F13\u5B58\u548C\u8D1F\u8F7D\u5747\u8861\u5668\u7B49\u90E8\u7F72\u5728\u670D\u52A1\u5668\u4E0A\u7684\u7F13\u5B58\u65B9\u5F0F\uFF0C\u4E3A\u7AD9\u70B9\u548C Web \u5E94\u7528\u63D0\u4F9B\u66F4\u597D\u7684\u7A33\u5B9A\u6027\u3001\u6027\u80FD\u548C\u6269\u5C55\u6027\u3002</p><ul><li><p>(\u79C1\u6709) \u6D4F\u89C8\u5668\u7F13\u5B58 \u79C1\u6709\u7F13\u5B58\u53EA\u80FD\u7528\u4E8E\u5355\u72EC\u7528\u6237\u3002\u4F60\u53EF\u80FD\u5DF2\u7ECF\u89C1\u8FC7\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E2D\u7684\u201C\u7F13\u5B58\u201D\u9009\u9879\u3002\u6D4F\u89C8\u5668\u7F13\u5B58\u62E5\u6709\u7528\u6237\u901A\u8FC7 HTTP \u4E0B\u8F7D\u7684\u6240\u6709\u6587\u6863\u3002\u8FD9\u4E9B\u7F13\u5B58\u4E3A\u6D4F\u89C8\u8FC7\u7684\u6587\u6863\u63D0\u4F9B\u5411\u540E/\u5411\u524D\u5BFC\u822A\uFF0C\u4FDD\u5B58\u7F51\u9875\uFF0C\u67E5\u770B\u6E90\u7801\u7B49\u529F\u80FD\uFF0C\u53EF\u4EE5\u907F\u514D\u518D\u6B21\u5411\u670D\u52A1\u5668\u53D1\u8D77\u591A\u4F59\u7684\u8BF7\u6C42\u3002\u5B83\u540C\u6837\u53EF\u4EE5\u63D0\u4F9B\u7F13\u5B58\u5185\u5BB9\u7684\u79BB\u7EBF\u6D4F\u89C8\u3002</p></li><li><p>(\u5171\u4EAB) \u4EE3\u7406\u7F13\u5B58 \u5171\u4EAB\u7F13\u5B58\u53EF\u4EE5\u88AB\u591A\u4E2A\u7528\u6237\u4F7F\u7528\u3002\u4F8B\u5982\uFF0CISP \u6216\u4F60\u6240\u5728\u7684\u516C\u53F8\u53EF\u80FD\u4F1A\u67B6\u8BBE\u4E00\u4E2A Web \u4EE3\u7406\u6765\u4F5C\u4E3A\u672C\u5730\u7F51\u7EDC\u57FA\u7840\u7684\u4E00\u90E8\u5206\u63D0\u4F9B\u7ED9\u7528\u6237\u3002\u8FD9\u6837\u70ED\u95E8\u7684\u8D44\u6E90\u5C31\u4F1A\u88AB\u91CD\u590D\u4F7F\u7528\uFF0C\u51CF\u5C11\u7F51\u7EDC\u62E5\u5835\u4E0E\u5EF6\u8FDF\u3002</p></li></ul><h2 id="\u7F13\u5B58\u64CD\u4F5C\u7684\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u64CD\u4F5C\u7684\u76EE\u6807" aria-hidden="true">#</a> \u7F13\u5B58\u64CD\u4F5C\u7684\u76EE\u6807</h2><p>\u867D\u7136 HTTP \u7F13\u5B58\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u91CD\u7528\u7F13\u5B58\u7684\u8D44\u6E90\u901A\u5E38\u662F\u5FC5\u8981\u7684\u3002\u7136\u800C\u5E38\u89C1\u7684 HTTP \u7F13\u5B58\u53EA\u80FD\u5B58\u50A8 GET \u54CD\u5E94\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u7C7B\u578B\u7684\u54CD\u5E94\u5219\u65E0\u80FD\u4E3A\u529B\u3002\u7F13\u5B58\u7684\u5173\u952E\u4E3B\u8981\u5305\u62EC Request Method \u548C\u76EE\u6807 URI\uFF08\u4E00\u822C\u53EA\u6709 GET \u8BF7\u6C42\u624D\u4F1A\u88AB\u7F13\u5B58\uFF09\u3002\u666E\u904D\u7684\u7F13\u5B58\u6848\u4F8B\uFF1A</p><ul><li>\u4E00\u4E2A\u68C0\u7D22\u8BF7\u6C42\u7684\u6210\u529F\u54CD\u5E94\uFF1A\u5BF9\u4E8E GET \u8BF7\u6C42\uFF0C\u54CD\u5E94\u72B6\u6001\u7801\u4E3A\uFF1A200\uFF0C\u5219\u8868\u793A\u4E3A\u6210\u529F\u3002\u4E00\u4E2A\u5305\u542B\u4F8B\u5982 HTML \u6587\u6863\uFF0C\u56FE\u7247\uFF0C\u6216\u8005\u6587\u4EF6\u7684\u54CD\u5E94\u3002</li><li>\u6C38\u4E45\u91CD\u5B9A\u5411\uFF1A\u54CD\u5E94\u72B6\u6001\u7801 301\u3002</li><li>\u9519\u8BEF\u54CD\u5E94\uFF1A\u54CD\u5E94\u72B6\u6001\u7801 404 \u7684\u4E00\u4E2A\u9875\u9762\u3002</li><li>\u4E0D\u5B8C\u5168\u7684\u54CD\u5E94\uFF1A\u54CD\u5E94\u72B6\u6001\u7801 206\uFF0C\u53EA\u8FD4\u56DE\u5C40\u90E8\u7684\u4FE1\u606F\u3002</li><li>\u9664\u4E86 GET \u8BF7\u6C42\u5916\uFF0C\u5982\u679C\u5339\u914D\u5230\u4F5C\u4E3A\u4E00\u4E2A\u5DF2\u88AB\u5B9A\u4E49\u7684 cache \u952E\u540D\u7684\u54CD\u5E94\u3002</li></ul><h2 id="\u7F13\u5B58\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u63A7\u5236" aria-hidden="true">#</a> \u7F13\u5B58\u63A7\u5236</h2><h3 id="cache-control-\u5934" tabindex="-1"><a class="header-anchor" href="#cache-control-\u5934" aria-hidden="true">#</a> Cache-control \u5934</h3><p><code>HTTP/1.1</code>\u5B9A\u4E49\u7684 <code>Cache-Control</code> \u5934\u7528\u6765\u533A\u5206\u5BF9\u7F13\u5B58\u673A\u5236\u7684\u652F\u6301\u60C5\u51B5\uFF0C\u8BF7\u6C42\u5934\u548C\u54CD\u5E94\u5934\u90FD\u652F\u6301\u8FD9\u4E2A\u5C5E\u6027\u3002\u901A\u8FC7\u5B83\u63D0\u4F9B\u7684\u4E0D\u540C\u7684\u503C\u6765\u5B9A\u4E49\u7F13\u5B58\u7B56\u7565\u3002</p><h4 id="\u6CA1\u6709\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u6CA1\u6709\u7F13\u5B58" aria-hidden="true">#</a> \u6CA1\u6709\u7F13\u5B58</h4><p>\u7F13\u5B58\u4E2D\u4E0D\u5F97\u5B58\u50A8\u4EFB\u4F55\u5173\u4E8E\u5BA2\u6237\u7AEF\u8BF7\u6C42\u548C\u670D\u52A1\u7AEF\u54CD\u5E94\u7684\u5185\u5BB9\u3002\u6BCF\u6B21\u7531\u5BA2\u6237\u7AEF\u53D1\u8D77\u7684\u8BF7\u6C42\u90FD\u4F1A\u4E0B\u8F7D\u5B8C\u6574\u7684\u54CD\u5E94\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control: no-store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u7F13\u5B58\u4F46\u91CD\u65B0\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u4F46\u91CD\u65B0\u9A8C\u8BC1" aria-hidden="true">#</a> \u7F13\u5B58\u4F46\u91CD\u65B0\u9A8C\u8BC1</h4><p>\u5982\u4E0B\u5934\u90E8\u5B9A\u4E49\uFF0C\u6B64\u65B9\u5F0F\u4E0B\uFF0C\u6BCF\u6B21\u6709\u8BF7\u6C42\u53D1\u51FA\u65F6\uFF0C\u7F13\u5B58\u4F1A\u5C06\u6B64\u8BF7\u6C42\u53D1\u5230\u670D\u52A1\u5668\uFF08\u8BD1\u8005\u6CE8\uFF1A\u8BE5\u8BF7\u6C42\u5E94\u8BE5\u4F1A\u5E26\u6709\u4E0E\u672C\u5730\u7F13\u5B58\u76F8\u5173\u7684\u9A8C\u8BC1\u5B57\u6BB5\uFF09\uFF0C\u670D\u52A1\u5668\u7AEF\u4F1A\u9A8C\u8BC1\u8BF7\u6C42\u4E2D\u6240\u63CF\u8FF0\u7684\u7F13\u5B58\u662F\u5426\u8FC7\u671F\uFF0C\u82E5\u672A\u8FC7\u671F\uFF08\u6CE8\uFF1A\u5B9E\u9645\u5C31\u662F\u8FD4\u56DE 304\uFF09\uFF0C\u5219\u7F13\u5B58\u624D\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u526F\u672C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control: no-cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u79C1\u6709\u548C\u516C\u5171\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u79C1\u6709\u548C\u516C\u5171\u7F13\u5B58" aria-hidden="true">#</a> \u79C1\u6709\u548C\u516C\u5171\u7F13\u5B58</h4><p><code>public</code> \u6307\u4EE4\u8868\u793A\u8BE5\u54CD\u5E94\u53EF\u4EE5\u88AB\u4EFB\u4F55\u4E2D\u95F4\u4EBA\uFF08\u8BD1\u8005\u6CE8\uFF1A\u6BD4\u5982\u4E2D\u95F4\u4EE3\u7406\u3001CDN \u7B49\uFF09\u7F13\u5B58\u3002\u82E5\u6307\u5B9A\u4E86 <code>public</code>\uFF0C\u5219\u4E00\u4E9B\u901A\u5E38\u4E0D\u88AB\u4E2D\u95F4\u4EBA\u7F13\u5B58\u7684\u9875\u9762\uFF08\u8BD1\u8005\u6CE8\uFF1A\u56E0\u4E3A\u9ED8\u8BA4\u662F private\uFF09\uFF08\u6BD4\u5982 \u5E26\u6709 HTTP \u9A8C\u8BC1\u4FE1\u606F\uFF08\u5E10\u53F7\u5BC6\u7801\uFF09\u7684\u9875\u9762 \u6216 \u67D0\u4E9B\u7279\u5B9A\u72B6\u6001\u7801\u7684\u9875\u9762\uFF09\uFF0C\u5C06\u4F1A\u88AB\u5176\u7F13\u5B58\u3002</p><p>\u800C &quot;private&quot; \u5219\u8868\u793A\u8BE5\u54CD\u5E94\u662F\u4E13\u7528\u4E8E\u67D0\u5355\u4E2A\u7528\u6237\u7684\uFF0C\u4E2D\u95F4\u4EBA\u4E0D\u80FD\u7F13\u5B58\u6B64\u54CD\u5E94\uFF0C\u8BE5\u54CD\u5E94\u53EA\u80FD\u5E94\u7528\u4E8E\u6D4F\u89C8\u5668\u79C1\u6709\u7F13\u5B58\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control: private
Cache-Control: public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FC7\u671F" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u671F" aria-hidden="true">#</a> \u8FC7\u671F</h4><p>\u8FC7\u671F\u673A\u5236\u4E2D\uFF0C\u6700\u91CD\u8981\u7684\u6307\u4EE4\u662F <code>max-age=&lt;seconds&gt;</code>\uFF0C\u8868\u793A\u8D44\u6E90\u80FD\u591F\u88AB\u7F13\u5B58\uFF08\u4FDD\u6301\u65B0\u9C9C\uFF09\u7684\u6700\u5927\u65F6\u95F4\u3002\u76F8\u5BF9 <code>Expires</code> \u800C\u8A00\uFF0C<code>max-age</code> \u662F\u8DDD\u79BB\u8BF7\u6C42\u53D1\u8D77\u7684\u65F6\u95F4\u7684\u79D2\u6570\u3002\u9488\u5BF9\u5E94\u7528\u4E2D\u90A3\u4E9B\u4E0D\u4F1A\u6539\u53D8\u7684\u6587\u4EF6\uFF0C\u901A\u5E38\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E\u4E00\u5B9A\u7684\u65F6\u957F\u4EE5\u4FDD\u8BC1\u7F13\u5B58\u6709\u6548\uFF0C\u4F8B\u5982\u56FE\u7247\u3001css\u3001js \u7B49\u9759\u6001\u8D44\u6E90\u3002</p><p>\u8BE6\u60C5\u770B\u4E0B\u6587\u5173\u4E8E\u7F13\u5B58\u6709\u6548\u6027\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control: max-age=31536000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u9A8C\u8BC1\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u65B9\u5F0F" aria-hidden="true">#</a> \u9A8C\u8BC1\u65B9\u5F0F</h4><p>\u5F53\u4F7F\u7528\u4E86 <code>must-revalidate</code> \u6307\u4EE4\uFF0C\u90A3\u5C31\u610F\u5473\u7740\u7F13\u5B58\u5728\u8003\u8651\u4F7F\u7528\u4E00\u4E2A\u9648\u65E7\u7684\u8D44\u6E90\u65F6\uFF0C\u5FC5\u987B\u5148\u9A8C\u8BC1\u5B83\u7684\u72B6\u6001\uFF0C\u5DF2\u8FC7\u671F\u7684\u7F13\u5B58\u5C06\u4E0D\u88AB\u4F7F\u7528\u3002\u8BE6\u60C5\u770B\u4E0B\u6587\u5173\u4E8E\u7F13\u5B58\u6821\u9A8C\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control: must-revalidate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pragma-\u5934" tabindex="-1"><a class="header-anchor" href="#pragma-\u5934" aria-hidden="true">#</a> Pragma \u5934</h3><p><code>Pragma</code> \u662F <code>HTTP/1.0</code> \u6807\u51C6\u4E2D\u5B9A\u4E49\u7684\u4E00\u4E2A header \u5C5E\u6027\uFF0C\u8BF7\u6C42\u4E2D\u5305\u542B Pragma \u7684\u6548\u679C\u8DDF\u5728\u5934\u4FE1\u606F\u4E2D\u5B9A\u4E49 Cache-Control: no-cache \u76F8\u540C\uFF0C\u4F46\u662F HTTP \u7684\u54CD\u5E94\u5934\u6CA1\u6709\u660E\u786E\u5B9A\u4E49\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u6240\u4EE5\u5B83\u4E0D\u80FD\u62FF\u6765\u5B8C\u5168\u66FF\u4EE3 <code>HTTP/1.1</code> \u4E2D\u5B9A\u4E49\u7684 Cache-control \u5934\u3002\u901A\u5E38\u5B9A\u4E49 Pragma \u4EE5\u5411\u540E\u517C\u5BB9\u57FA\u4E8E <code>HTTP/1.0</code> \u7684\u5BA2\u6237\u7AEF\u3002</p><h2 id="\u65B0\u9C9C\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u9C9C\u5EA6" aria-hidden="true">#</a> \u65B0\u9C9C\u5EA6</h2><p>\u7406\u8BBA\u4E0A\u6765\u8BB2\uFF0C\u5F53\u4E00\u4E2A\u8D44\u6E90\u88AB\u7F13\u5B58\u5B58\u50A8\u540E\uFF0C\u8BE5\u8D44\u6E90\u5E94\u8BE5\u53EF\u4EE5\u88AB\u6C38\u4E45\u5B58\u50A8\u5728\u7F13\u5B58\u4E2D\u3002\u7531\u4E8E\u7F13\u5B58\u53EA\u6709\u6709\u9650\u7684\u7A7A\u95F4\u7528\u4E8E\u5B58\u50A8\u8D44\u6E90\u526F\u672C\uFF0C\u6240\u4EE5\u7F13\u5B58\u4F1A\u5B9A\u671F\u5730\u5C06\u4E00\u4E9B\u526F\u672C\u5220\u9664\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A\u7F13\u5B58\u9A71\u9010\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5F53\u670D\u52A1\u5668\u4E0A\u9762\u7684\u8D44\u6E90\u8FDB\u884C\u4E86\u66F4\u65B0\uFF0C\u90A3\u4E48\u7F13\u5B58\u4E2D\u7684\u5BF9\u5E94\u8D44\u6E90\u4E5F\u5E94\u8BE5\u88AB\u66F4\u65B0\uFF0C\u7531\u4E8E HTTP \u662F <code>C/S</code> \u6A21\u5F0F\u7684\u534F\u8BAE\uFF0C\u670D\u52A1\u5668\u66F4\u65B0\u4E00\u4E2A\u8D44\u6E90\u65F6\uFF0C\u4E0D\u53EF\u80FD\u76F4\u63A5\u901A\u77E5\u5BA2\u6237\u7AEF\u66F4\u65B0\u7F13\u5B58\uFF0C\u6240\u4EE5\u53CC\u65B9\u5FC5\u987B\u4E3A\u8BE5\u8D44\u6E90\u7EA6\u5B9A\u4E00\u4E2A\u8FC7\u671F\u65F6\u95F4\uFF0C\u5728\u8BE5\u8FC7\u671F\u65F6\u95F4\u4E4B\u524D\uFF0C\u8BE5\u8D44\u6E90\uFF08\u7F13\u5B58\u526F\u672C\uFF09\u5C31\u662F\u65B0\u9C9C\u7684\uFF0C\u5F53\u8FC7\u4E86\u8FC7\u671F\u65F6\u95F4\u540E\uFF0C\u8BE5\u8D44\u6E90\uFF08\u7F13\u5B58\u526F\u672C\uFF09\u5219\u53D8\u4E3A\u9648\u65E7\u7684\u3002\u9A71\u9010\u7B97\u6CD5\u7528\u4E8E\u5C06\u9648\u65E7\u7684\u8D44\u6E90\uFF08\u7F13\u5B58\u526F\u672C\uFF09\u66FF\u6362\u4E3A\u65B0\u9C9C\u7684\uFF0C\u6CE8\u610F\uFF0C\u4E00\u4E2A\u9648\u65E7\u7684\u8D44\u6E90\uFF08\u7F13\u5B58\u526F\u672C\uFF09\u662F\u4E0D\u4F1A\u76F4\u63A5\u88AB\u6E05\u9664\u6216\u5FFD\u7565\u7684\uFF0C\u5F53\u5BA2\u6237\u7AEF\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\u65F6\uFF0C\u7F13\u5B58\u68C0\u7D22\u5230\u5DF2\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u9648\u65E7\u8D44\u6E90\uFF08\u7F13\u5B58\u526F\u672C\uFF09\uFF0C\u5219\u7F13\u5B58\u4F1A\u5148\u5C06\u6B64\u8BF7\u6C42\u9644\u52A0\u4E00\u4E2A <code>If-None-Match</code> \u5934\uFF0C\u7136\u540E\u53D1\u7ED9\u76EE\u6807\u670D\u52A1\u5668\uFF0C\u4EE5\u6B64\u6765\u68C0\u67E5\u8BE5\u8D44\u6E90\u526F\u672C\u662F\u5426\u662F\u4F9D\u7136\u8FD8\u662F\u7B97\u65B0\u9C9C\u7684\uFF0C\u82E5\u670D\u52A1\u5668\u8FD4\u56DE\u4E86 <code>304 (Not Modified)</code>\uFF08\u8BE5\u54CD\u5E94\u4E0D\u4F1A\u6709\u5E26\u6709\u5B9E\u4F53\u4FE1\u606F\uFF09\uFF0C\u5219\u8868\u793A\u6B64\u8D44\u6E90\u526F\u672C\u662F\u65B0\u9C9C\u7684\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0C\u53EF\u4EE5\u8282\u7701\u4E00\u4E9B\u5E26\u5BBD\u3002\u82E5\u670D\u52A1\u5668\u901A\u8FC7 <code>If-None-Match</code> \u6216 <code>If-Modified-Since</code> \u5224\u65AD\u540E\u53D1\u73B0\u5DF2\u8FC7\u671F\uFF0C\u90A3\u4E48\u4F1A\u5E26\u6709\u8BE5\u8D44\u6E90\u7684\u5B9E\u4F53\u5185\u5BB9\u8FD4\u56DE\u3002</p><p>\u4E0B\u9762\u662F\u4E0A\u8FF0\u7F13\u5B58\u5904\u7406\u8FC7\u7A0B\u7684\u4E00\u4E2A\u56FE\u793A\uFF1A <img src="`+r+`" alt="image"></p><p>\u5BF9\u4E8E\u542B\u6709\u7279\u5B9A\u5934\u4FE1\u606F\u7684\u8BF7\u6C42\uFF0C\u4F1A\u53BB\u8BA1\u7B97\u7F13\u5B58\u5BFF\u547D\u3002\u6BD4\u5982 <code>Cache-control: max-age=N</code> \u7684\u5934\uFF0C\u76F8\u5E94\u7684\u7F13\u5B58\u7684\u5BFF\u547D\u5C31\u662F N\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u4E8E\u4E0D\u542B\u8FD9\u4E2A\u5C5E\u6027\u7684\u8BF7\u6C42\u5219\u4F1A\u53BB\u67E5\u770B\u662F\u5426\u5305\u542B <code>Expires</code> \u5C5E\u6027\uFF0C\u901A\u8FC7\u6BD4\u8F83 Expires \u7684\u503C\u548C\u5934\u91CC\u9762 Date \u5C5E\u6027\u7684\u503C\u6765\u5224\u65AD\u662F\u5426\u7F13\u5B58\u8FD8\u6709\u6548\u3002\u5982\u679C <code>max-age</code> \u548C <code>expires</code> \u5C5E\u6027\u90FD\u6CA1\u6709\uFF0C\u627E\u627E\u5934\u91CC\u7684 <code>Last-Modified</code> \u4FE1\u606F\u3002\u5982\u679C\u6709\uFF0C\u7F13\u5B58\u7684\u5BFF\u547D\u5C31\u7B49\u4E8E\u5934\u91CC\u9762 Date \u7684\u503C\u51CF\u53BB <code>Last-Modified</code> \u7684\u503C\u9664\u4EE5 10\uFF08\u6CE8\uFF1A\u6839\u636E RFC2626 \u5176\u5B9E\u4E5F\u5C31\u662F\u4E58\u4EE5 10%\uFF09\u3002</p><p>\u7F13\u5B58\u5931\u6548\u65F6\u95F4\u8BA1\u7B97\u516C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>expirationTime = responseTime + freshnessLifetime - currentAge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u5F0F\u4E2D\uFF0C<code>responseTime</code> \u8868\u793A\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u6B64\u54CD\u5E94\u7684\u90A3\u4E2A\u65F6\u95F4\u70B9\u3002</p><h3 id="\u6539\u8FDB\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6539\u8FDB\u8D44\u6E90" aria-hidden="true">#</a> \u6539\u8FDB\u8D44\u6E90</h3><p>\u6211\u4EEC\u4F7F\u7528\u7F13\u5B58\u7684\u8D44\u6E90\u8D8A\u591A\uFF0C\u7F51\u7AD9\u7684\u54CD\u5E94\u80FD\u529B\u548C\u6027\u80FD\u5C31\u4F1A\u8D8A\u597D\u3002\u4E3A\u4E86\u4F18\u5316\u7F13\u5B58\uFF0C\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u5F97\u5C3D\u91CF\u957F\u662F\u4E00\u79CD\u5F88\u597D\u7684\u7B56\u7565\u3002\u5BF9\u4E8E\u5B9A\u671F\u6216\u8005\u9891\u7E41\u66F4\u65B0\u7684\u8D44\u6E90\uFF0C\u8FD9\u4E48\u505A\u662F\u6BD4\u8F83\u7A33\u59A5\u7684\uFF0C\u4F46\u662F\u5BF9\u4E8E\u90A3\u4E9B\u957F\u671F\u4E0D\u66F4\u65B0\u7684\u8D44\u6E90\u4F1A\u6709\u70B9\u95EE\u9898\u3002\u8FD9\u4E9B\u56FA\u5B9A\u7684\u8D44\u6E90\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u53D7\u76CA\u4E8E\u8FD9\u79CD\u957F\u671F\u4FDD\u6301\u7684\u7F13\u5B58\u7B56\u7565\uFF0C\u4F46\u4E00\u65E6\u8981\u66F4\u65B0\u5C31\u4F1A\u5F88\u56F0\u96BE\u3002\u7279\u6307\u7F51\u9875\u4E0A\u5F15\u5165\u7684\u4E00\u4E9B js/css \u6587\u4EF6\uFF0C\u5F53\u5B83\u4EEC\u53D8\u52A8\u65F6\u9700\u8981\u5C3D\u5FEB\u66F4\u65B0\u7EBF\u4E0A\u8D44\u6E90\u3002</p><p>Web \u5F00\u53D1\u8005\u53D1\u660E\u4E86\u4E00\u79CD\u88AB Steve Souders \u79F0\u4E4B\u4E3A revving \u7684\u6280\u672F[1]\u3002\u4E0D\u9891\u7E41\u66F4\u65B0\u7684\u6587\u4EF6\u4F1A\u4F7F\u7528\u7279\u5B9A\u7684\u547D\u540D\u65B9\u5F0F\uFF1A\u5728 URL \u540E\u9762\uFF08\u901A\u5E38\u662F\u6587\u4EF6\u540D\u540E\u9762\uFF09\u4F1A\u52A0\u4E0A\u7248\u672C\u53F7\u3002\u52A0\u4E0A\u7248\u672C\u53F7\u540E\u7684\u8D44\u6E90\u5C31\u88AB\u89C6\u4F5C\u4E00\u4E2A\u5B8C\u5168\u65B0\u7684\u72EC\u7ACB\u7684\u8D44\u6E90\uFF0C\u540C\u65F6\u62E5\u6709\u4E00\u5E74\u751A\u81F3\u66F4\u957F\u7684\u7F13\u5B58\u8FC7\u671F\u65F6\u957F\u3002\u4F46\u662F\u8FD9\u4E48\u505A\u4E5F\u5B58\u5728\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u6240\u6709\u5F15\u7528\u8FD9\u4E2A\u8D44\u6E90\u7684\u5730\u65B9\u90FD\u9700\u8981\u66F4\u65B0\u94FE\u63A5\u3002Web \u5F00\u53D1\u8005\u4EEC\u901A\u5E38\u4F1A\u91C7\u7528\u81EA\u52A8\u5316\u6784\u5EFA\u5DE5\u5177\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u5B8C\u6210\u8FD9\u4E9B\u7410\u788E\u7684\u5DE5\u4F5C\u3002\u5F53\u4F4E\u9891\u66F4\u65B0\u7684\u8D44\u6E90\uFF08JS / CSS\uFF09\u53D8\u52A8\u4E86\uFF0C\u53EA\u7528\u5728\u9AD8\u9891\u53D8\u52A8\u7684\u8D44\u6E90\u6587\u4EF6\uFF08HTML\uFF09\u91CC\u505A\u5165\u53E3\u7684\u6539\u52A8\u3002</p><p>\u8FD9\u79CD\u65B9\u6CD5\u8FD8\u6709\u4E00\u4E2A\u597D\u5904\uFF1A\u540C\u65F6\u66F4\u65B0\u4E24\u4E2A\u7F13\u5B58\u8D44\u6E90\u4E0D\u4F1A\u9020\u6210\u90E8\u5206\u7F13\u5B58\u5148\u66F4\u65B0\u800C\u5F15\u8D77\u65B0\u65E7\u6587\u4EF6\u5185\u5BB9\u4E0D\u4E00\u81F4\u3002\u5BF9\u4E8E\u4E92\u76F8\u6709\u4F9D\u8D56\u5173\u7CFB\u7684 CSS \u548C JS \u6587\u4EF6\uFF0C\u907F\u514D\u8FD9\u79CD\u4E0D\u4E00\u81F4\u6027\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002 <img src="`+c+'" alt="image"> \u52A0\u5728\u52A0\u901F\u6587\u4EF6\u540E\u9762\u7684\u7248\u672C\u53F7\u4E0D\u4E00\u5B9A\u662F\u4E00\u4E2A\u6B63\u5F0F\u7684\u7248\u672C\u53F7\u5B57\u7B26\u4E32\uFF0C\u5982 1.1.3 \u8FD9\u6837\u6216\u8005\u5176\u4ED6\u56FA\u5B9A\u81EA\u589E\u7684\u7248\u672C\u6570\u3002\u5B83\u53EF\u4EE5\u662F\u4EFB\u4F55\u9632\u6B62\u7F13\u5B58\u78B0\u649E\u7684\u6807\u8BB0\u4F8B\u5982 hash \u6216\u8005\u65F6\u95F4\u6233\u3002</p><h2 id="\u7F13\u5B58\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u9A8C\u8BC1" aria-hidden="true">#</a> \u7F13\u5B58\u9A8C\u8BC1</h2><p>\u7528\u6237\u70B9\u51FB\u5237\u65B0\u6309\u94AE\u65F6\u4F1A\u5F00\u59CB\u7F13\u5B58\u9A8C\u8BC1\u3002\u5982\u679C\u7F13\u5B58\u7684\u54CD\u5E94\u5934\u4FE1\u606F\u91CC\u542B\u6709 <code>Cache-control: must-revalidate</code> \u7684\u5B9A\u4E49\uFF0C\u5728\u6D4F\u89C8\u7684\u8FC7\u7A0B\u4E2D\u4E5F\u4F1A\u89E6\u53D1\u7F13\u5B58\u9A8C\u8BC1\u3002\u53E6\u5916\uFF0C\u5728\u6D4F\u89C8\u5668\u504F\u597D\u8BBE\u7F6E\u91CC\u8BBE\u7F6E Advanced-&gt;Cache \u4E3A\u5F3A\u5236\u9A8C\u8BC1\u7F13\u5B58\u4E5F\u80FD\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C\u3002</p><p>\u5F53\u7F13\u5B58\u7684\u6587\u6863\u8FC7\u671F\u540E\uFF0C\u9700\u8981\u8FDB\u884C\u7F13\u5B58\u9A8C\u8BC1\u6216\u8005\u91CD\u65B0\u83B7\u53D6\u8D44\u6E90\u3002\u53EA\u6709\u5728\u670D\u52A1\u5668\u8FD4\u56DE\u5F3A\u6821\u9A8C\u5668\u6216\u8005\u5F31\u6821\u9A8C\u5668\u65F6\u624D\u4F1A\u8FDB\u884C\u9A8C\u8BC1\u3002</p><h3 id="etags" tabindex="-1"><a class="header-anchor" href="#etags" aria-hidden="true">#</a> ETags</h3><p>\u4F5C\u4E3A\u7F13\u5B58\u7684\u4E00\u79CD\u5F3A\u6821\u9A8C\u5668\uFF0CETag \u54CD\u5E94\u5934\u662F\u4E00\u4E2A\u5BF9\u7528\u6237\u4EE3\u7406 (User Agent\uFF0C\u4E0B\u9762\u7B80\u79F0 UA) \u4E0D\u900F\u660E\uFF08\u8BD1\u8005\u6CE8\uFF1AUA \u65E0\u9700\u7406\u89E3\uFF0C\u53EA\u9700\u8981\u6309\u89C4\u5B9A\u4F7F\u7528\u5373\u53EF\uFF09\u7684\u503C\u3002\u5BF9\u4E8E\u50CF\u6D4F\u89C8\u5668\u8FD9\u6837\u7684 HTTP UA\uFF0C\u4E0D\u77E5\u9053 ETag \u4EE3\u8868\u4EC0\u4E48\uFF0C\u4E0D\u80FD\u9884\u6D4B\u5B83\u7684\u503C\u662F\u591A\u5C11\u3002\u5982\u679C\u8D44\u6E90\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u91CC\u542B\u6709 ETag\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u5728\u540E\u7EED\u7684\u8BF7\u6C42\u7684\u5934\u4E2D\u5E26\u4E0A If-None-Match \u5934\u6765\u9A8C\u8BC1\u7F13\u5B58\u3002</p><p>Last-Modified \u54CD\u5E94\u5934\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u79CD\u5F31\u6821\u9A8C\u5668\u3002\u8BF4\u5B83\u5F31\u662F\u56E0\u4E3A\u5B83\u53EA\u80FD\u7CBE\u786E\u5230\u4E00\u79D2\u3002\u5982\u679C\u54CD\u5E94\u5934\u91CC\u542B\u6709\u8FD9\u4E2A\u4FE1\u606F\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u5728\u540E\u7EED\u7684\u8BF7\u6C42\u4E2D\u5E26\u4E0A If-Modified-Since \u6765\u9A8C\u8BC1\u7F13\u5B58\u3002</p><p>\u5F53\u5411\u670D\u52A1\u7AEF\u53D1\u8D77\u7F13\u5B58\u6821\u9A8C\u7684\u8BF7\u6C42\u65F6\uFF0C\u670D\u52A1\u7AEF\u4F1A\u8FD4\u56DE 200 ok \u8868\u793A\u8FD4\u56DE\u6B63\u5E38\u7684\u7ED3\u679C\u6216\u8005 304 Not Modified(\u4E0D\u8FD4\u56DE body) \u8868\u793A\u6D4F\u89C8\u5668\u53EF\u4EE5\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u6587\u4EF6\u3002304 \u7684\u54CD\u5E94\u5934\u4E5F\u53EF\u4EE5\u540C\u65F6\u66F4\u65B0\u7F13\u5B58\u6587\u6863\u7684\u8FC7\u671F\u65F6\u95F4\u3002</p><h3 id="vary-\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#vary-\u54CD\u5E94" aria-hidden="true">#</a> Vary \u54CD\u5E94</h3><p>Vary HTTP \u54CD\u5E94\u5934\u51B3\u5B9A\u4E86\u5BF9\u4E8E\u540E\u7EED\u7684\u8BF7\u6C42\u5934\uFF0C\u5982\u4F55\u5224\u65AD\u662F\u8BF7\u6C42\u4E00\u4E2A\u65B0\u7684\u8D44\u6E90\u8FD8\u662F\u4F7F\u7528\u7F13\u5B58\u7684\u6587\u4EF6\u3002</p><p>\u5F53\u7F13\u5B58\u670D\u52A1\u5668\u6536\u5230\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u53EA\u6709\u5F53\u524D\u7684\u8BF7\u6C42\u548C\u539F\u59CB\uFF08\u7F13\u5B58\uFF09\u7684\u8BF7\u6C42\u5934\u8DDF\u7F13\u5B58\u7684\u54CD\u5E94\u5934\u91CC\u7684 Vary \u90FD\u5339\u914D\uFF0C\u624D\u80FD\u4F7F\u7528\u7F13\u5B58\u7684\u54CD\u5E94\u3002</p><p><img src="'+t+`" alt="image"></p><p>The Vary header leads cache to use more HTTP headers as key for the cache.</p><p>\u4F7F\u7528 vary \u5934\u6709\u5229\u4E8E\u5185\u5BB9\u670D\u52A1\u7684\u52A8\u6001\u591A\u6837\u6027\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528 Vary: User-Agent \u5934\uFF0C\u7F13\u5B58\u670D\u52A1\u5668\u9700\u8981\u901A\u8FC7 UA \u5224\u65AD\u662F\u5426\u4F7F\u7528\u7F13\u5B58\u7684\u9875\u9762\u3002\u5982\u679C\u9700\u8981\u533A\u5206\u79FB\u52A8\u7AEF\u548C\u684C\u9762\u7AEF\u7684\u5C55\u793A\u5185\u5BB9\uFF0C\u5229\u7528\u8FD9\u79CD\u65B9\u5F0F\u5C31\u80FD\u907F\u514D\u5728\u4E0D\u540C\u7684\u7EC8\u7AEF\u5C55\u793A\u9519\u8BEF\u7684\u5E03\u5C40\u3002\u53E6\u5916\uFF0C\u5B83\u53EF\u4EE5\u5E2E\u52A9 Google \u6216\u8005\u5176\u4ED6\u641C\u7D22\u5F15\u64CE\u66F4\u597D\u5730\u53D1\u73B0\u9875\u9762\u7684\u79FB\u52A8\u7248\u672C\uFF0C\u5E76\u4E14\u544A\u8BC9\u641C\u7D22\u5F15\u64CE\u6CA1\u6709\u5F15\u5165 Cloaking\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Vary: User-Agent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u79FB\u52A8\u7248\u548C\u684C\u9762\u7684\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u5934\u4E2D\u7684 User-Agent \u4E0D\u540C\uFF0C\u7F13\u5B58\u670D\u52A1\u5668\u4E0D\u4F1A\u9519\u8BEF\u5730\u628A\u79FB\u52A8\u7AEF\u7684\u5185\u5BB9\u8F93\u51FA\u5230\u684C\u9762\u7AEF\u5230\u7528\u6237\u3002</p>`,57),o=[n];function h(l,p){return a(),d("div",null,o)}var v=e(s,[["render",h],["__file","01.http_cache.html.vue"]]);export{v as default};
