# HTML5新增属性

## input新增属性

### placeholder[提示性属性]

```css
<input type="text" placeholder= "电话/邮箱/用户名">
<input type="password" placeholder= "请输入密码">
```
![img.png](img.png)

当获取焦点，在文本框内输入信息时，提示信息就会隐藏；当删除文本信息获取到焦点时，就会和重现出现。

### Calendar类

data：日期 chrome支持，safari，IE不支持
time：时间 chrome支持，safari，IE不支持
week：周  chrome支持，safari，IE不支持
datetime-loca：日期+周数 chrome支持，safari，IE不支持
number：数字（只能输入数字） chrome支持，safari、IE不支持
email：邮箱    chrome、火狐支持，Safari、IE不支持
color：颜色    chrome支持，safari、IE不支持
range：滑动块   chrome、safari支持，火狐、IE不支持
search：提示（浏览器密码提示）   chrome支持，safari支持一点，IE不支持
url：地址  chrome、火狐支持，safari、IE不支持

## contenteditable属性

使用方法：
```css
<div contenteditable="true">
    可以修改的内容，没有兼容性问题，是可以使用的
</div>
```

注意事项：
- contenteditable属性没有兼容性问题，可以使用
- contenteditable属性是可以继承的，如果父级有，子级是可以继承的；
    但是如果子级的 **contenteditable="false"时，子级是不可以进行修改的**
- 不建议的使用情况：
```css
<div contenteditable="true">
    <span contenteditable="false">name:</span>summer <br>
    <span contenteditable="false">sex:</span>male
</div>
name 和 sex不可以修改，但是summer和male可以进行修改；在修改时甚至会**删除**br标签和span标签
```


## draggable属性

draggable属性：可以实现按下拖拽

```css
<div class="isDiv" draggable="true"></div>
```
![img_2.png](img_2.png)

- draggable兼容性：chrome、safari可以正常使用，firefox不支持
- **a标签** 和 **img标签**默认也是可以进行拖拽的
- 拖拽的生命周期：1.拖拽开始，拖拽进行中，拖拽结束。
- 拖拽的组成：1.被拖拽的物体，目标区域。
- 按下一瞬间是不会触发事件的。
![img_1.png](img_1.png)
```js
    var isDiv = document.getElementsByClassName("isDiv")[0];
    //拖拽开始
    isDiv.ondragstart = function (e) {
        console.log(e)
    }
    //拖拽时间
    isDiv.ondrag = function (e) {
        console.log(e)
    }
    //拖拽结束
    isDiv.ondragend = function (e) {
        console.log(e);
    }
```

```js
 e.dataTransfer.effectAllowed = "link"; //copy move copyMove linkMove all
该属性只能在 **ondragstart**中使用
```

```js
e.dataTransfer.dropEffect = "link";
该属性只能在**ondrop** 中使用
```
