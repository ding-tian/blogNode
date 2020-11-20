### 1.字符集

```javascript
<meta charset="UTF-8" />
```

~~~javascript
字符集(Character set)是多个字符的集合。

计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。
~~~

utf-8是目前最常用的字符集编码方式，常用的字符集编码方式还有gbk和gb2312。

* gb2312 简单中文  包括6763个汉字  GUO BIAO
* BIG5   繁体中文 港澳台等用
* GBK包含全部中文字符    是GB2312的扩展，加入对繁体字的支持，兼容GB2312
* UTF-8则基本包含全世界所有国家需要用到的字符
* **这句代码非常关键， 是必须要写的代码，否则可能引起乱码的情况。**

> 这句话是让 html 文件是以 UTF-8 编码保存的， 浏览器根据编码去解码对应的html内容。

> ```
> 一般情况下统一使用 "UTF-8" 编码, 请尽量统一写成标准的 "UTF-8"，不要写成 "utf-8" 或 "utf8" 或 "UTF8"。
> ```

XHTML写法: <meta http-equiv="content-type" content="text/html; charset=utf-8" />

### 2. Description  网站说明

对于关键词的作用明显降低，但由于很多搜索引擎，仍然大量采用网页的MATA标签中描述部分作为搜索结果的“内容摘要”。 就是简要说明我们网站的主要做什么的。
我们提倡，Description作为网站的总体业务和主题概括，多采用“我们是…”“我们提供…”“×××网作为…”“电话：010…”之类语句。

品优购网：

```
<meta name="description" content="品优购JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
```

注意点：

1. 描述中出现关键词，与正文内容相关，这部分内容是给人看的，所以要写的很详细，让人感兴趣， 吸引用户点击。
2. 同样遵循简短原则，字符数含空格在内不要超过 120  个汉字。
3. 补充在 title  和 keywords  中未能充分表述的说明.
4. 用英文逗号 关键词1,关键词2

```html
<meta name="description" content="小米商城直营小米公司旗下所有产品，囊括小米手机系列小米MIX、小米Note 2，红米手机系列红米Note 4、红米4，智能硬件，配件及小米生活周边，同时提供小米客户服务及售后支持。" />
```

### 3. Keywords 关键字

Keywords是页面关键词，是搜索引擎关注点之一。Keywords应该限制在6～8个关键词左右，电商类网站可以多 少许。

品优购网：

```html
<meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,品优购" />
```

小米网：

```html
<meta name="keywords" content="小米,小米6,红米Note4,小米MIX,小米商城" />
```

### 4. 作者

`author`，就是这个文档的作者名称，可以用自由的格式去定义；

```html
<meta name="author" content="作者信息" />
```

### 5.重定向

```html
<meta http-equiv = "refreah" content="5;url=http://www.baidu.con" />
<meta http-equiv = "refreah" content="秒数;url=目标路径" />
```

### 6. 视口

```html
<meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1, maximum-scale=1, minimum-scale=1,  minimal-ui">
```

### 7. 使用最新ie渲染

```html
< meta http-equiv = "X-UA-Compatible" content = "IE=edge,chrome=1" />
```

这样写可以达到的效果是如果安装了GCF(谷歌插件)，则使用GCF来渲染页面，如果为安装GCF，则使用最高版本的IE内核进行渲染。

