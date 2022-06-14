import{_ as s,o as n,c as a,e}from"./app.e136e648.js";const t={},p=e(`<h1 id="_3-vue-press-\u914D\u7F6E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_3-vue-press-\u914D\u7F6E\u7BA1\u7406" aria-hidden="true">#</a> #3. VUE Press \u914D\u7F6E\u7BA1\u7406</h1><p>\u901A\u8FC7\u914D\u7F6E\uFF0C\u80FD\u591F\u66F4\u597D\u7684\u81EA\u5B9A\u4E49\u7F51\u7AD9\uFF0C\u5426\u5219<code>VuePress</code>\u53EA\u80FD\u5B8C\u6210\u4E00\u4E9B\u6700\u57FA\u7840\u7684\u529F\u80FD\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u4F7F\u7528<code>vuepress build docs</code>\uFF0C\u4F1A\u9ED8\u8BA4\u89E3\u6790\u7F16\u8BD1<code>/docs</code>\u4E0B\u7684 markdown \u6587\u6863\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u521B\u5EFA<code>/docs/.vuepress</code>\u4E34\u65F6\u76EE\u5F55\u3002\u9ED8\u8BA4\u60C5\u51B5\u7684\u4E0B\u7684\uFF0C\u9879\u76EE\u4F7F\u7528<code>/docs/.vuepress/config.js</code>\u914D\u7F6E\u6587\u4EF6\u3002 \u53EF\u4EE5\u901A\u8FC7<code>--config vuepress.config.js</code>\u6267\u884C\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vuepress dev docs --config vuepress.config.js
vuepress build docs --config vuepress.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u83DC\u5355\u680F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u83DC\u5355\u680F" aria-hidden="true">#</a> \u521B\u5EFA\u83DC\u5355\u680F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u5C0F\u6155\u7684\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A VuePress \u7AD9\u70B9&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u4F7F\u7528 Github Pages \u642D\u5EFA Blog&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/blog/&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;/blog/01.create_github_pages.md&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;/blog/02.create_blog_by_vuepress.md&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>\u66F4\u65B0\u65F6\u95F4\uFF1A2022-06-14</li><li>\u8D21\u732E\u8005\uFF1A\u5F20\u5C0F\u6155</li></ul>`,7),o=[p];function c(i,l){return n(),a("div",null,o)}var u=s(t,[["render",c],["__file","03.config_vuepress.html.vue"]]);export{u as default};
