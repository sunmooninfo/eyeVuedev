# 项目




# 代码规范

## 换行
`[强制]` 必须在语句的结尾换行。

`[强制]` 单行字符数不能超过120个，超出则需要换行。

`[强制]` 如果需要换行，运算符必须放在新行的开头。
```js
// 正例
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // Code
}

var result = number1 + number2 + number3
    + number4 + number5;


// 反例
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // Code
}

var result = number1 + number2 + number3 +
    number4 + number5;
```

`[强制]` 如果括号中的内容有多行，必须为 )、 ]、 } 另开一个新行，并使新行与 (、 [、 { 所在行的缩进相对应。
```js
// 正例
if (product) {
    product.load();
    if (user.isAuthenticated()
        && user.isInRole('admin')
        && user.hasAuthority('add-admin')
    ) {
        sendProduct(user, product);
    }
}
var arr = [
    'candy', 'sugar'
];

// 反例
if (product) {
    product.load();
    if (user.isAuthenticated()
        && user.isInRole('admin')
        && user.hasAuthority('add-admin')) {
        sendProduct(user, product);
    }
}
var arr = [
        'candy', 'sugar'
    ];
```

`[强制]` , 或 ; 前不能有换行。
```js
// 正例
var obj = {
    a: 1,
    b: 2,
    c: 3
};

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);


// 反例
var obj = {
    a: 1
    , b: 2
    , c: 3
};

foo(
    aVeryVeryLongArgument
    , anotherVeryLongArgument
    , callback
);
```

`[推荐]` 建议换行和缩进遵循如下风格：
```js
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
) {
    // Code
}

foo(
    aVeryVeryLongArgument,
    anotherVeryLongArgument,
    callback
);

baidu.format(
    dateFormatTemplate,
    year, month, date, hour, minute, second
);

$('#items')
    .find('.selected')
    .highlight()
    .end();

var result = thisIsAVeryVeryLongCondition
    ? resultA : resultB;

var result = condition
    ? thisIsAVeryVeryLongResult
    : resultB;
```

`[强制]` 如果使用多行代码块，else 和 catch 必须另开一个新行。
```js
// 正例

if (condition) {
    // some statements;
}
else {
    // some statements;
}

try {
    // some statements;
}
catch (ex) {
    // some statements;
}


// 反例

if (condition) {
    // some statements;
} else {
    // some statements;
}

try {
    // some statements;
} catch (ex) {
    // some statements;
}
```

## 语句

`[强制]` 如果只有一行，{} 不能被省略。
```js
// 正例
if (condition) {
    callFunc();
}

// 反例
if (condition) callFunc();
if (condition)
    callFunc();
```

`[强制]` 函数定义的末尾不能有分号 ;。
```js
// 正例
function funcName() {
}

// 反例
function funcName() {
};

// 对于函数表达式，不能忽略分号
var funcName = function () {
};
```
`[强制]` 对象和数组的声明中不能有尾随逗号。
```js
// 正例

var obj = {
    attr1: 'xxx',
    attr2: 'yyy'
};

var arr = [
    'xxx',
    'yyy'
];


// 反例

var obj = {
    attr1: 'xxx',
    attr2: 'yyy',
};

var arr = [
    'xxx',
    'yyy',
];
```

## 命名规约
### html
> `[强制]` 
- html标签必须使用`-`作为间隔，并且不得出现大写字母。
- html类名必须使用`-`作为间隔，不得出现大写字母。
- html自定义标签必须使用至少两个至多四个单词，并含有语义。
- html部分不得使用`''`作为包裹属性值，一律使用`""`。
- 除特殊用法例如`echarts`锚dom，不得使用id。

```html
<custom-component class="custom-list-group">
  <custom-component-item class="custom-list-item" />
</custom-component>
```
### css

`[强制]` 除全局样式、公用样式，样式代码一律写入组件内部。

`[推荐]` 模块内公用样式建立模块内部less/[componetName].less，各处按需引用。
```css
/** less/custom-list.less */
.custom-list-group {
  padding:  60px;
}
.custom-list-item {
  margin-left: 30px;
}
.list-item-link-color {
  color: red;
}
```

`[推荐]` 非公用样式尽量不使用属性关键字作为`class`起始名称，需要使用关键字的，一般为公用样式，请至全局样式文件中查询使用。
```css
.margin-right-gutter {
  margin-right: 20px
}
.cursor-pointer {
  cursor: pointer;
}
.link-text-color-red {
  color: red
}
```

### js
> `[强制]` js中一律使用`''`单引号。

> `[强制]` 变量名、属性名及函数名的命名必须遵循 lowerCamelCase（小骆驼拼写法）。

```js
var loadingModules = {};
function loadProduct() {
}
```

> `[强制]` class类的命名必须遵循 UpperCamelCase (Pascal)，即大骆驼拼写法（帕斯卡拼写法）。
```js
function Element(options) {
}

```
> `[推荐]` 缩略词的所有字符应当一并大写或一并小写。
```
function parseSVG() {
}
var svgParser;
```

> `[强制]`禁止使用`var`关键字定义变量，块级变量使用`let`，不变量使用`const`
```js
let name = '张三'
const config = {
  type: '测试',
  name: name
}
```

### 文件名称
`[强制]` 单文件组件使用大驼峰。

`[强制]` 其余文件一律使用小写加 `-` 间隔。

`[强制]` 文件夹使用小驼峰

### 文件引用

`[强制]` 除页面入口，一律使用相对路径，页面入口可以使用`@`方式引入，但不建议。

`[推荐]` 对引用就行分类，以包引用、组件引用、函数方法引用为顺序，中间以单空行分隔。

```js
import {mapState, mapActions} from 'vuex'
import SplitPane from 'split-pane'

import CustomComponent from './components/CustomComponent'
import CustomListGroup from './components/CustomListGroup'

import {queryUserList, updateUserInfo, deleteUserForList} from '../../services/user'
```

## 类型转换
`[推荐]` 建议使用 + '' 将值转为字符串。
```js
// 正例
num + '';

// 反例
new String(num);
num.toString();
String(num);
```

`[推荐]` 建议使用 + 将值转为数值。
```js
// 正例
+str;

// 反例
Number(str);
```

`[强制]` 在使用 parseInt 时，必须传入第二个参数。
```js
// 正例
parseInt(str, 10);

// 反例
parseInt(str);
```

### 字符串，对象，数组

`[强制]` 必须使用 ' 而不是 " 定义字符串。

`[强制]` 必须使用对象字面量 {} 来创建简单对象。
```js
// 正例
var obj = {};

// 反例
var obj = new Object();
```

`[强制]` 如果一个对象字面量的所有属性都不需要引号，引号必须省略。如果需要加引号，须使用 ' 而不是 "。
```js
// 正例
var info = {
    name: 'someone',
    age: 28
};

// 反例
var info = {
    'name': 'someone',
    'age': 28
};
var info2 = {
    "age": 40
};
```

`[强制]` 禁止修改内置对象的原型。
```js
// 禁止
String.prototype.trim = function () {
};
```

`[推荐]` 尽可能使用 . 而不是 [] 访问对象的属性。

`[推荐]` 使用 for ... in ... 时，应当注意使用 hasOwnProperty 以防 Object 的原型在某些运行时环境中被添加一些额外属性的情况。
```js
var newInfo = {};
for (var key in info) {
    if (info.hasOwnProperty(key)) {
        newInfo[key] = info[key];
    }
}
```

`[强制]` 除非需要创建指定长度的数组，否则必须使用数组字面量 [] 创建数组。
```js
// 正例
var arr = [];
var arr2 = new Array(1e4);

// 反例
var arr = new Array();
```

`[强制]` 不要使用 for in 语句对数组进行遍历。

### 其他
`[强制]` 不要使用 eval 和 with。允许使用new Function。


# `ps:`

> 1. 业务驱动模型  
> 2. 而不是页面驱动模型、需求驱动模型  
> 3. 需求是变动的，业务模型是稳定的  
> 4. 前后分离，但是前后一致  
> 5. 分离领域层、视图层，领域层是复杂的，轻视图层。  
> 6. 领域层是以层为单位可以复用的，视图层无论怎么变动，领域层都是稳定可控的。  
> 7. 主导接口约定  
> 8. 业务含义  
> 9. 同步开发，一体两面，前端是后端的映射，后端是前端的背面  
> 10. 接口约定尽量前端主导，因为接口是前端使用。所以前端更要和后端就领域层模块划分进行交流，尽量前后一致。  
> 11. 团队一体。确保团队所有同学都要熟悉业务模型。  
> 12. 领域层能够很大程度上降低项目复杂度，特别是业务需求开发过程的耗时，随着业务增长，愈加明显。  
> 13. 同时轻view层可以解耦需求，需求迭代更加敏捷，而涉及业务核心的变动，也不会和具体需求页耦合而难以变动。  
> 14. 交互可以分为两类，一类是业务交互，一类是用户交互。业务交互主要是前后端交互，数据变动。  
> 15. 用户交互则是简单的页面变动。
