# HTML 表格

 能够利用表格、列表和表单完成注册页面的综合案例

* 表格用来做什么的？
  - 表格是用来展示数据,可以让数据显示整齐规范
* 列表用来做什么的？

  - 列表用来布局，列表可以让页面布局整齐规范
* 表单用来做什么的？
  - 表单用来收集用户信息

# 表格 table(会使用)

**表格作用：**

存在即是合理的。  表格的现在还是较为常用的一种标签，但不是用来布局，**常见显示、展示表格式数据。**

因为它可以让数据显示的非常的规整，可读性非常好。

**特别是后台展示数据的时候表格运用是否熟练就显得很重要**，一个清爽简约的表格能够把繁杂的数据表现得很有条理，虽然 div 布局也可以做到，但是总没有表格来得方便。

## 1. 创建表格

在HTML网页中，要想创建表格，就需要使用表格相关的标签。

**创建表格的基本语法：**

```html
<table>
  <tr>
    <td>单元格内的文字</td>
    ...
  </tr>
  ...
</table>
```

要深刻体会表格、行、单元格他们的构成。

在上面的语法中包含基本的三对HTML标签，分别为 table、tr、td，他们是创建表格的基本标签，缺一不可，下面对他们进行具体地解释

1. table用于定义一个表格标签。

2. tr标签 用于定义表格中的行，必须嵌套在 table标签中。

3. td 用于定义表格中的单元格，必须嵌套在<tr></tr>标签中。

4. 字母 td 指表格数据（table data），即数据单元格的内容，现在我们明白，表格最合适的地方就是用来存储数据的。


**总结： **

* 表格的主要目的是用来显示特殊数据的
* 一个完整的表格有表格标签（table），行标签（tr），单元格标签（td）组成，没有列的标签

- <tr></tr>中只能嵌套<td></td> 类的单元格
- <td></td>标签，他就像一个容器，可以容纳所有的元素

## 2. 表格属性

表格有部分属性我们不常用，这里重点记住 cellspacing 、 cellpadding。

```
cellspacing : 设置单元格与单元格边框之间的空白间距
cellpadding : 设置单元格内容与单元格边框之间的空白间距
```

我们经常有个说法，是三参为0，  平时开发的我们这三个参数    border  cellpadding  cellspacing  为  0

**案例1：**

```html
<table width="500" height="300" border="1" cellpadding="20" cellspacing="0" align="center">
   <tr>  <th>姓名</th>   <th>性别</th> <th>年龄</th>  </tr>
   <tr>  <td>刘德华</td> <td>男</td> <td>55</td>  </tr>
   <tr>  <td>郭富城</td> <td>男</td> <td>52</td>  </tr>
   <tr>  <td>张学友</td> <td>男</td> <td>58</td>  </tr>
   <tr>  <td>黎明</td>   <td>男</td> <td>18</td>  </tr>
   <tr>  <td>刘晓庆</td> <td>女</td> <td>63</td>  </tr>
</table>
```

## 3. 表头单元格标签th

- 作用：
  - 一般表头单元格位于表格的第一行或第一列，并且文本加粗居中
- 语法：
  - 只需用表头标签&lt;th&gt;</th&gt;替代相应的单元格标签&lt;td&gt;</td&gt;即可。 

​	代码：

***

```html
<table width="500" border="1" align="center" cellspacing="0" cellpadding="0">
		<tr>  
			<th>姓名</th> 
			<th>性别</th>
			<th>电话</th>
		</tr>
		<tr>
			<td>小王</td>
			<td>女</td>
			<td>110</td>
		</tr>
		<tr>
			<td>小明</td>
			<td>男</td>
			<td>120</td>
		</tr>	
	</table>
```

**pink老师 一句话说出他们:**

> th 也是一个单元格   只不过和普通的 td单元格不一样，它会让自己里面的文字居中且加粗

## 4. 表格标题caption

**定义和用法**

```html
<table>
   <caption>我是表格标题</caption>
</table>
```

**注意： **

1. caption 元素定义**表格标题**，通常这个标题会被居中且显示于表格之上。
2. caption 标签必须紧随 table 标签之后。
3. 这个标签只存在 表格里面才有意义。你是风儿我是沙

## 5. 合并单元格(难点)

###  5.1 合并单元格2种方式

* 跨行合并：rowspan="合并单元格的个数"      
* 跨列合并：colspan="合并单元格的个数"

### 5.2 合并单元格顺序

> **合并的顺序我们按照   先上 后下     先左  后右 的顺序 **

### 5.3 合并单元格三步曲

1. 先确定是跨行还是跨列合并
2. 根据 先上 后下   先左  后右的原则找到目标单元格    然后写上 合并方式 还有 要合并的单元格数量  比如 ： <td colspan="3">   </td>
3. 删除多余的单元格 单元格      

## 6. 总结表格

| 标签名              | 定义           | 说明                                         |
| ------------------- | :------------- | :------------------------------------------- |
| <table></table>     | 表格标签       | 就是一个四方的盒子                           |
| <tr></tr>           | 表格行标签     | 行标签要再table标签内部才有意义              |
| <td></td>           | 单元格标签     | 单元格标签是个容器级元素，可以放任何东西     |
| <th></th>           | 表头单元格标签 | 它还是一个单元格，但是里面的文字会居中且加粗 |
| <caption></caption> | 表格标题标签   | 表格的标题，跟着表格一起走，和表格居中对齐   |
| clospan 和 rowspan  | 合并属性       | 用来合并单元格的                             |

1. 表格提供了HTML 中定义表格式数据的方法。
2. 表格中由行中的单元格组成。
3. 表格中没有列元素，列的个数取决于行的单元格个数。
4. 表格不要纠结于外观，那是CSS 的作用。
5. 表格的学习要求：  能手写表格结构，并且能简单合并单元格。


## 7. 拓展阅读@

### 表格划分结构（了解）

```
对于比较复杂的表格，表格的结构也就相对的复杂了，所以又将表格分割成三个部分：题头、正文和脚注。而这三部分分别用:thead,tbody,tfoot来标注， 这样更好的分清表格结构
```

**注意：**

1. <thead></thead>：用于定义表格的头部。用来放标题之类的东西。<thead> 内部必须拥有 <tr> 标签！
2. <tbody></tbody>：用于定义表格的主体。放数据本体 。
3. <tfoot></tfoot>放表格的脚注之类。
4. 以上标签都是放到table标签中。

# table的css

### border-collapse

> **`border-collapse`** [CSS](https://developer.mozilla.org/zh-CN/docs/CSS) 属性是用来决定表格的边框是分开的还是合并的。在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。

**值**

- `collapse`

  相邻的单元格共用同一条边框（采用 collapsed-border 表格渲染模型）。

- `separate`

  默认值。每个单元格拥有独立的边框（采用 separated-border 表格渲染模型）。

### empty-cells

> CSS中 **`empty-cells`** 属性定义了用户端应该怎么来渲染表格中没有可见内容的单元格的边框和背景。

**值**

show

- 边框和背景正常渲染。与普通元素一样。

hide

- 边框和背景被隐藏。



### border-spacing

> `border-spacing` 属性指定相邻单元格边框之间的距离（只适用于 [边框分离模式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-collapse) ）。相当于 HTML 中的 `cellspacing` 属性，但是第二个可选的值可以用来设置不同于水平间距的垂直间距。

**值**

- *length*

  描述单元格之间的水平和垂直距离的一个 length值。它只在单值语法下使用。

- *horizontal*

  描述相邻两列的单元格之间的水平距离的一个 length值。它只在双值语法下使用。

- *vertical*

  描述相邻两行的单元格之间的垂直距离的一个length值。它只在双值语法下使用。

- `inherit`

  一个表示父元素的 `border-spacing` 的计算值的关键字，其父元素必须应用了 `border-spacing` 。

### table-layout

> **table-layout** CSS属性定义了用于布局表格*单元格*，*行*和*列*的算法。

**值**

- [`auto`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/auto)

  大多数浏览器采用自动表格布局算法对表格布局。表格及单元格的宽度取决于其包含的内容。

- `fixed`

  表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽。  使用 “fixed” 布局方式时，整个表格可以在其首行被下载后就被解析和渲染。这样对于 “automatic” 自动布局方式来说可以加速渲染，但是其后的单元格内容并不会自适应当前列宽。任何一个包含溢出内容的单元格可以使用 [`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 属性控制是否允许内容溢出。

### caption-side

> [CSS ](https://developer.mozilla.org/zh-CN/CSS)中 **`caption-side`** 属性会将表格的标题caption 放到规定的位置。但是具体显示的位置与表格的 [`writing-mode`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode) 属性值有关。

**值**

- `top`

  标题会出现在表格的上方。

- `bottom`

  标题会出现在表格的下方。

### vertical-align

> [CSS](https://developer.mozilla.org/en-US/docs/CSS) 的属性 **`vertical-align`** 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。

**值**

- `baseline` (以及 `sub`, `super`, `text-top`, `text-bottom`, `<length>`, `<percentage>`)

  使单元格的基线，与该行中所有以基线对齐的其它单元格的基线对齐。

- `top`

  使单元格内边距的上边缘与该行顶部对齐。

- `middle`

  使单元格内边距盒模型在该行内居中对齐。

- `bottom`

  使单元格内边距的下边缘与该行底部对齐。

可以是负数。