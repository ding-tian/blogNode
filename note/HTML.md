## HTML 初始

- HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)是用来描述网页的一种语言。

- HTML 不是一种编程语言，而是一种标记语言 (markup language)

- 标记语言是一套标记标签 (markup tag)

- > 网页是由网页元素组成的 ， 这些元素是利用 html 标签描述出来，然后通过浏览器解析，就可以显示给用户了。

<br/>

### 所谓超文本，有 2 层含义：

- 因为它可以加入图片、声音、动画、多媒体等内容（**超越文本限制** ）
- 不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（**超级链接文本 **）。

<br/>

### html 总结:

- html 是超文本标记(标签)语言
- 我们学习 html 主要学习 html 标签
- 我们用 html 标签描述网页元素。 比如 图片标签 、文字标签、链接标签等等
- 标签有自己的语法规范，所有的 html 标签都是用 <> 表示的

<br/>

#### 团队约定大小写

HTML 标签名、类名、标签属性和大部分属性值统一用小写

<br/>

## html 骨架标签总结

| 标签名 |    定义    | 说明                                                      |
| ------ | :--------: | :-------------------------------------------------------- |
| html   | HTML 标签  | 页面中最大的标签，我们成为 根标签                         |
| head   | 文档的头部 | 注意在 head 标签中我们必须要设置的标签是 title            |
| titile | 文档的标题 | 让页面拥有一个属于自己的网页标题                          |
| body   | 文档的主体 | 元素包含文档的所有内容，页面内容 基本都是放到 body 里面的 |

```javascript
<!DOCTYPE html> //=> 声明文档类型 , 一个不含任何 DOCTYPE 的网页将会以 怪异(quirks) 模式渲染。
```

<br/>

### 页面语言 `lang`

```javascript
<html lang="en"> //=> 指定html 语言类型
// 1. en定义语言为英语
// 2. zh-CN定义语言为中文
```

**团队约定：**

> ```
> 考虑浏览器和操作系统的兼容性，目前仍然使用 zh-CN 属性值
> ```

**@拓展阅读：**``

简单来说，可能对于程序来说没有太大的作用，但是它可以告诉浏览器，搜索引擎，一些处理 Html 的程序对页面语言内容来做一些对应的处理或者事情。
比如可以

- 根据根据 lang 属性来设定不同语言的 css 样式，或者字体
- 告诉搜索引擎做精确的识别
- 让语法检查程序做语言识别
- 帮助翻译工具做识别
- 帮助网页阅读程序做识别
  等等

#### 3. base

> **HTML <base> 元素** 指定用于一个文档中包含的所有相对 URL 的根 URL。一份中只能有一个 <base> 元素。

一个文档的基本 URL, 可以通过使用 [`document.baseURI`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/baseURI) 的 JS 脚本查询。如果文档不包含 `<base>` 元素，`baseURI` 默认为 `document.location.href`。

`值:`

**`href`**

- 用于文档中相对 URL 地址的基础 URL。允许绝对和相对 URL。
- 会影响页内锚

**`target`**

> 当没有明确目标的链接 `<a>` 或表单 `<form>` 导致导航被激活时显示其结果,就用 base 的值

- `_self`: 载入结果到当前浏览上下文中。（该值是元素的默认值）。
- `_blank`: 载入结果到一个新的未命名的浏览上下文。
- `_parent`: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和`_self`一样。
- `_top`: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和\_self 一样。

如果指定了多个 `<base>` 元素，只会使用第一个 `href `和 `target `值, 其余都会被忽略。

#### 3.使用 ico 图标

- 首先把 favicon.ico 这个图标放到根目录下。

- 再 html 里面， head 之间 引入 代码。

  > <link rel="shortcut icon" href="favicon.ico"  type="image/x-icon"/>

##### 3.1 制作 ico 图标

我们可以自己做的图片，转换为 ico 图标，以便放到我们站点里面。

方法步骤：

- 首先把我们想要的切成图片。
- 要把图片转换为 ico 图标，我们借助于第三方转换网站： http://www.bitbug.net/。 比特虫

注意：

1. 她（它）是显示在浏览器中的网页图标。
2. 它是图标形式，不是一个图片
3. 位置是放到 head 标签中间。
4. 后面的 type="image/x-icon" 属性可以省略。（我相信你也愿意省略。）
5. 为了兼容性，请将 favicon.ico 这个图标放到根目录下。

#### 4. title

```html
<title>元素始终在页面的<head>块使用
  一个 <head> 元素只能包含一个 <title> 元素
  <!--搜索引擎通常显示页面标题的前55至60个字符。 超出此范围的文本可能会丢失，因此请尽量不要使标题更长。 如果您必须使用较长的标题，请确保重要的部分出现在前面，并且标题中可能要删除的部分中没有关键内容。-->
```

#### 5. 内联框架

> 使用内联框架可以引入一个外部的页面

```html
<!-- 使用iframe来创建一个内联框架
属性: 
src: 指向一个外部页面的路径,可以使用相对路径
width:
height:
name: 可以为内联框架指定一个name属性,可以超链接过来
-->
<iframe src="demo.html"> </iframe>
在现实开发中不推荐使用内联框架, 因为内联框架中的内容不会被搜索引擎所检索
```

#### 框架集

```html
<!--
框架集和内联框架的作用类似,都是用于在一个页面中引入其他的外部的页面,
	框架集可以同时引入多个页面,而内联框架只能引入一个，
	在h5标准中,推荐使用框架集，而不是内联框架
	属性:
		rows: 指定框架集中的所有的框架，一行一行的排列
		cols: 指定框架集中的所有的框架，一列一列的排列
		这两个属性frameset必须选择一个，并且需要在属性中指定每一部分所占大小
		frameset中还可以在嵌套frameset
	frameset和iframe一样,它里面的内容都不会被搜索所检索，
		所以如果搜索引擎检索到的页面是一个框架页的话，它是不能去判断里面的内容的
	使用框架集则以为着页面中不能有自己的内容(因为没body),只能引入其他的页面，
	而我们每单独加载一个页面，浏览器都需要重新发生一次请求，引入几个页面就需要发送几次请求
-->
<frameset cols="“50%,*,20%”">
  *就是剩余空间
  <frame src="1.html" />
  <frame src="2.html" />
  <frame src="3.html" />
</frameset>
```