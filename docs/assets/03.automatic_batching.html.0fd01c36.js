import{_ as i,r as l,o as a,c as s,a as e,b as d,e as t,d as c}from"./app.f46079ae.js";const r={},v=t(`<h1 id="automatic-batching-\u81EA\u52A8\u6279\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#automatic-batching-\u81EA\u52A8\u6279\u5904\u7406" aria-hidden="true">#</a> Automatic Batching \u81EA\u52A8\u6279\u5904\u7406</h1><h2 id="\u4EC0\u4E48\u662F\u6279\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6279\u5904\u7406" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6279\u5904\u7406\uFF1F</h2><p>\u6279\u5904\u7406\u662F React \u4E2D\u5BF9\u4E8E <code>setState</code> \u7684\u5408\u5E76\uFF0C\u4E5F\u5C31\u662F\u5E38\u8003\u5E38\u8BF4\u7684\uFF0C\u4E3A\u4EC0\u4E48 react \u4E2D <code>setState</code> \u5E76\u4E0D\u662F\u4E00\u4E2A\u5B9E\u65F6\u7684\u52A8\u4F5C\u3002\u5C31\u662F\u56E0\u4E3A\u6846\u67B6\u5185\u90E8\u66FF\u4F60\u505A\u4E86\u4E00\u4E2A\u5408\u5E76\uFF0C\u4EE5\u6B64\u51CF\u5C11\u6E32\u67D3\u6B21\u6570\u3002\u4F46\u662F react18 \u4E4B\u524D\u8FD9\u79CD\u5408\u5E76\u4EC5\u9650\u4E8E\u540C\u6B65\u4EE3\u7801\u4E2D\u3002\u5982\u679C\u4F60\u5728\u4EFB\u610F\u5F02\u6B65\u4EFB\u52A1\u4E2D\u8FDB\u884C\u4E86\u591A\u6B21\u7684 <code>setState</code>\uFF0C\u8FD9\u4E9B\u884C\u4E3A\u5E76\u4E0D\u4F1A\u88AB\u81EA\u52A8\u5408\u5E76\u3002\u800C react18 \u5BF9\u6B64\u505A\u4E86\u4F18\u5316\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// React 17 \u652F\u6301\u7684\u6279\u5904\u7406
function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        setCount((c) =&gt; c + 1); // Does not re-render yet
        setFlag((f) =&gt; !f); // Does not re-render yet
        // React will only re-render once at the end (that&#39;s batching!)
    }

    return (
        &lt;div&gt;
            &lt;button onClick={handleClick}&gt;Next&lt;/button&gt;
            &lt;h1 style={{ color: flag ? &quot;blue&quot; : &quot;black&quot; }}&gt;{count}&lt;/h1&gt;
        &lt;/div&gt;
    );
}

// react 18 \u4E2D\u7684\u6279\u5904\u7406\uFF0C\u652F\u6301promise\u7B49\u5F02\u6B65
function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        fetchSomething().then(() =&gt; {
            // React 17 and earlier does NOT batch these because
            // they run *after* the event in a callback, not *during* it
            setCount((c) =&gt; c + 1); // Causes a re-render
            setFlag((f) =&gt; !f); // Causes a re-render
        });
    }

    return (
        &lt;div&gt;
            &lt;button onClick={handleClick}&gt;Next&lt;/button&gt;
            &lt;h1 style={{ color: flag ? &quot;blue&quot; : &quot;black&quot; }}&gt;{count}&lt;/h1&gt;
        &lt;/div&gt;
    );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EC0\u4E48\u662F\u81EA\u52A8\u6279\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u81EA\u52A8\u6279\u5904\u7406" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u81EA\u52A8\u6279\u5904\u7406?</h2><p>\u5C31\u662F\u4E0A\u6587\u6240\u8BF4\u7684\uFF0CReact \u4F1A\u5C06\u4E4B\u524D\u672A\u505A\u5904\u7406\u7684\u7C7B\u4F3C\u5F02\u6B65\u4EFB\u52A1\u8FDB\u884C\u4E00\u4E2A\u5408\u5E76\u4EE5\u51CF\u5C11\u6E32\u67D3\u3002\u4E3B\u8981\u5408\u5E76\u9014\u5F84\u6709\u4E24\u79CD</p><ul><li>\u5BF9\u4E8E Promise\uFF0CsetTimeout\u3001\u7B49\u57FA\u7840\u5F02\u6B65\u4EFB\u52A1\u4E2D\u7684\u591A\u4E2A state \u53D8\u66F4\uFF0C\u8FDB\u884C\u81EA\u52A8\u5408\u5E76\u3002</li><li>\u5BF9\u4E8E\u57FA\u4E8E createRoot \u521B\u5EFA\u51FA\u6765\u7684\u7EC4\u4EF6\uFF0C\u5176\u4E0B\u7684\u6240\u6709\u72B6\u6001\u90FD\u4F1A\u5E94\u7528\u6279\u91CF\u66F4\u65B0\u3002 \u4EE5\u4E0B\u56DB\u79CD\u5199\u6CD5\u6548\u679C\u4E00\u81F4\uFF0C\u90FD\u4F1A\u8FDB\u884C\u81EA\u52A8\u7684\u6279\u5904\u7406\u5408\u5E76</li></ul><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// example 1
function handleClick() {
    setCount((c) =&gt; c + 1);
    setFlag((f) =&gt; !f);
    // React will only re-render once at the end (that&#39;s batching!)
}

// example 2
setTimeout(() =&gt; {
    setCount((c) =&gt; c + 1);
    setFlag((f) =&gt; !f);
    // React will only re-render once at the end (that&#39;s batching!)
}, 1000);

// example 3
fetch(/*...*/).then(() =&gt; {
    setCount((c) =&gt; c + 1);
    setFlag((f) =&gt; !f);
    // React will only re-render once at the end (that&#39;s batching!)
});

// example 4
elm.addEventListener(&quot;click&quot;, () =&gt; {
    setCount((c) =&gt; c + 1);
    setFlag((f) =&gt; !f);
    // React will only re-render once at the end (that&#39;s batching!)
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u5173\u95ED\u6279\u5904\u7406\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5173\u95ED\u6279\u5904\u7406\u66F4\u65B0" aria-hidden="true">#</a> \u5982\u4F55\u5173\u95ED\u6279\u5904\u7406\u66F4\u65B0?</h2><p>ReactDOM.flushSync(),\u7528\u8BE5\u65B9\u6CD5\u5305\u88F9\u4F4F\u4E0D\u671F\u671B\u88AB\u5408\u5E76\u5904\u7406\u7684 state \u76F8\u5173\u64CD\u4F5C\uFF0C\u5373\u53EF\u4FDD\u8BC1\u5176\u5355\u6B21 render</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { flushSync } from &quot;react-dom&quot;; // Note: react-dom, not react

function handleClick() {
    flushSync(() =&gt; {
        setCounter((c) =&gt; c + 1);
    });
    // React has updated the DOM by now
    flushSync(() =&gt; {
        setFlag((f) =&gt; !f);
    });
    // React has updated the DOM by now
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E9F\u5F03\u7684-api" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03\u7684-api" aria-hidden="true">#</a> \u5E9F\u5F03\u7684 API</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>unstable_batchedUpdates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6CA1\u6709\u81EA\u52A8\u6279\u5904\u7406\u4E4B\u524D\uFF0C\u4E00\u4E9B\u7C7B\u5E93\u4E2D\u7528\u4E8E\u5F3A\u5236\u8FDB\u884C\u6BD4\u5904\u7406\u5408\u5E76\u7684 API\uFF0C\u4E4B\u540E\u53EF\u80FD\u5E9F\u5F03\u5904\u7406\uFF0C\u4F46\u662F\u76EE\u524D\u4ECD\u53EF\u4EE5\u4F7F\u7528\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { unstable_batchedUpdates } from &quot;react-dom&quot;;

unstable_batchedUpdates(() =&gt; {
    setCount((c) =&gt; c + 1);
    setFlag((f) =&gt; !f);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-\u7EC4\u4EF6\u4E2D\u7684\u6539\u53D8" tabindex="-1"><a class="header-anchor" href="#class-\u7EC4\u4EF6\u4E2D\u7684\u6539\u53D8" aria-hidden="true">#</a> class \u7EC4\u4EF6\u4E2D\u7684\u6539\u53D8</h2><p>\u5199 react \u7684\u65F6\u5019\uFF0Cclass \u7EC4\u4EF6\u662F\u4E00\u4E2A\u5F88\u5E38\u89C1\u7684\u5199\u6CD5\uFF0C\u4F46\u662F\u4E00\u822C\u8FD9\u79CD\u7EC4\u4EF6\u4F1A\u5199\u7684\u66F4\u52A0\u590D\u6742\uFF0C\u90A3\u4E48\u4E4B\u524D\u5176\u5B9E\u53EF\u80FD\u4F1A\u5B58\u5728\u5176\u4E2D\u7684\u67D0\u4E9B\u5F02\u6B65\u4EFB\u52A1\u4E2D\uFF0C\u591A\u6B21 <code>setState</code> \u4E4B\u95F4\u8FDB\u884C <code>state</code> \u8BFB\u53D6\u7684\u60C5\u51B5\u3002\u4E4B\u524D\u8FD9\u79CD\u8BFB\u53D6\u662F\u53EF\u4EE5\u6B63\u5E38\u53D6\u503C\u7684\u3002\u4F46\u662F\u73B0\u5728\u4E0D\u884C\u4E86\u3002</p><div class="language-javaScript ext-javaScript line-numbers-mode"><pre class="language-javaScript"><code>// 17 code\u6848\u4F8B
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            flag: false,
        };
    }

    handleClick = () =&gt; {
        setTimeout(() =&gt; {
            this.setState(({ count }) =&gt; ({ count: count + 1 }));
            // In React 17
            console.log(this.state);
            // {count:1, flag:false}
            this.setState(({ flag }) =&gt; ({ flag: !flag }));
        });
    };

    render() {
        const { flag, count } = this.state;
        return (
            &lt;div&gt;
                &lt;button onClick={this.handleClick}&gt;Next&lt;/button&gt;
                &lt;h1&gt;{count}&lt;/h1&gt;
            &lt;/div&gt;
        );
    }
}

export default App;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,19),u={href:"https://zhuanlan.zhihu.com/p/523683561",target:"_blank",rel:"noopener noreferrer"},o=c("React18 \u7CBE\u8BFB\u4E00\uFF1AAutomatic Batching \u81EA\u52A8\u6279\u5904\u7406"),m=e("hr",null,null,-1),b=e("ul",null,[e("li",null,"\u66F4\u65B0\u65F6\u95F4\uFF1A2022-06-15"),e("li",null,"\u8D21\u732E\u8005\uFF1A\u5F20\u5C0F\u6155")],-1);function h(g,p){const n=l("ExternalLinkIcon");return a(),s("div",null,[v,e("ul",null,[e("li",null,[e("a",u,[o,d(n)])])]),m,b])}var _=i(r,[["render",h],["__file","03.automatic_batching.html.vue"]]);export{_ as default};
