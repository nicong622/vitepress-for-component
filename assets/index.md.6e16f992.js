import{b as n,o as a,c as s,e as t,t as p,s as e,I as o,K as c,C as l}from"./framework.78035dda.js";var u={setup(){const a=n(0);return{count:a,onClick:function(){a.value++}}}};const C=t("span",{style:{padding:"0 16px 0 4px","font-size":"14px",color:"#777"}},"点击次数:",-1);u.render=function(n,e,o,c,l,u){return a(),s("div",null,[t("p",null,[C,t("span",null,p(c.count),1)]),t("button",{onClick:e[1]||(e[1]=(...n)=>c.onClick(...n))},"count++")])};var E={components:{demo1:u}};const i='{"title":"介绍","description":"","frontmatter":{"title":"介绍"},"headers":[{"level":2,"title":"VFC 是什么?","slug":"vfc-是什么"},{"level":2,"title":"VFC 做了哪些增强?","slug":"vfc-做了哪些增强"},{"level":3,"title":"1. 内置Demo组件","slug":"_1-内置demo组件"},{"level":3,"title":"2. 像 dumi 一样的组织文件","slug":"_2-像-dumi-一样的组织文件"},{"level":3,"title":"3. 更合适的默认样式","slug":"_3-更合适的默认样式"}],"relativePath":"index.md","lastUpdated":1606118058713.1929}',r=c('<h1 id="vitepress-for-component"><a class="header-anchor" href="#vitepress-for-component" aria-hidden="true">#</a> vitepress-for-component</h1><p>下面简称<code>VFC</code>。</p><h2 id="vfc-是什么"><a class="header-anchor" href="#vfc-是什么" aria-hidden="true">#</a> VFC 是什么?</h2><p><code>VFC</code> Fork 自<a href="https://github.com/vuejs/vitepress" target="_blank" rel="noopener noreferrer"><code>VitePress</code></a>，针对 <strong>组件开发</strong> 场景做了一些功能增强和默认样式修改。</p><div class="warning custom-block"><p>可以理解为是一个在 <code>VitePress</code> 的基础上向 <a href="https://d.umijs.org/" target="_blank" rel="noopener noreferrer"><code>dumi</code></a> 靠拢的工具。</p></div><h2 id="vfc-做了哪些增强"><a class="header-anchor" href="#vfc-做了哪些增强" aria-hidden="true">#</a> VFC 做了哪些增强?</h2><h3 id="_1-内置demo组件"><a class="header-anchor" href="#_1-内置demo组件" aria-hidden="true">#</a> 1. 内置<code>Demo</code>组件</h3><p>我们可以在<code>.md</code>文件中这样来引入<code>demo</code>。</p><div class="language-md"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demo.vue<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Demo演示<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>这是一个Demo渲染示例<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',9),k=l("渲染效果如下 "),d=c('<h3 id="_2-像-dumi-一样的组织文件"><a class="header-anchor" href="#_2-像-dumi-一样的组织文件" aria-hidden="true">#</a> 2. 像 dumi 一样的组织文件</h3><p>在组件编写的场景中，我们觉得 <a href="https://d.umijs.org/zh-CN/guide" target="_blank" rel="noopener noreferrer">dumi</a> 的文件结构更合适。</p><h4 id="示例："><a class="header-anchor" href="#示例：" aria-hidden="true">#</a> 示例：</h4><p>假设我们有这样一个组件库。</p><p><code>VitePress</code>文件结构如下。</p><div class="language-"><pre><code>docs\n├─ index.md\n├─ loading\n│  └─ index.md\n├─ zh\n│  ├─ index.md\n│  └─ loading\n│     └─ index.md\nsrc\n├── loading\n│ ├── demo\n│ │ └── demo.vue\n│ └── loading.vue\n└── ...\n</code></pre></div><p><code>vitepress-for-componnet</code>文件结构如下。</p><div class="language-"><pre><code>docs\n├── index.en-US.md\n├── index.zh-CN.md\nsrc\n├── loading\n│ ├── demo\n│ │ └── demo.vue\n│ ├── index.en-US.md\n│ ├── index.zh-CN.md\n│ └── loading.vue\n└── ...\n</code></pre></div><p>我们觉得<code>dumi</code>的组织结构有如下好处：</p><ul><li>demo.vue 和 <a href="http://loading.md" target="_blank" rel="noopener noreferrer">loading.md</a> 都放在 src 下面，源码和文档联系感更强。</li><li>用后缀<code>.zh-CN</code>来区分 locale，更加有对比度。</li></ul><p><a href="/guide/mapping.html">映射原理</a>。</p><h3 id="_3-更合适的默认样式"><a class="header-anchor" href="#_3-更合适的默认样式" aria-hidden="true">#</a> 3. 更合适的默认样式</h3><ul><li>修改了默认主题，包括布局，颜色等。</li><li>增加右侧目录。</li></ul><p>示例站点：(需要能访问 <a href="http://github.io" target="_blank" rel="noopener noreferrer">github.io</a>)</p><ul><li><a href="https://dewfall123.github.io/ahooks-vue/zh/" target="_blank" rel="noopener noreferrer">ahooks-vue</a></li></ul>',15);E.render=function(n,p,c,l,u,C){const E=e("demo1"),i=e("demo");return a(),s("div",null,[r,t("p",null,[k,t(i,{src:"./demo.vue",language:"vue",title:"Demo演示",desc:"这是一个Demo渲染示例",componentName:"demo1",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style-attr%20language-css%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3D%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20property%22%3Epadding%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%200%2016px%200%204px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20property%22%3Efont-size%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2014px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20property%22%3Ecolor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20%23777%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E7%82%B9%E5%87%BB%E6%AC%A1%E6%95%B0%3A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20count%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EonClick%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Ecount%2B%2B%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20count%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EonClick%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20count%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20operator%22%3E%2B%2B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20count%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20onClick%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cspan%20style%3D%22padding%3A%200%2016px%200%204px%3B%20font-size%3A%2014px%3B%20color%3A%20%23777%22%0A%20%20%20%20%20%20%20%20%3E%E7%82%B9%E5%87%BB%E6%AC%A1%E6%95%B0%3A%3C%2Fspan%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cspan%3E%7B%7B%20count%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22onClick%22%3Ecount%2B%2B%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20count%20%3D%20ref(0)%0A%20%20%20%20function%20onClick()%20%7B%0A%20%20%20%20%20%20count.value%2B%2B%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20count%2C%0A%20%20%20%20%20%20onClick%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E%0A"},{default:o((()=>[t(E)])),_:1})]),d])};export default E;export{i as __pageData};
