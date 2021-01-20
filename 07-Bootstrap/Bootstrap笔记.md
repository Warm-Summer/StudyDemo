# Bootstrap

## 什么是响应式原理？

一个网站能够兼容多个终端

例如：www.starbucks.com.cn

## 响应式所具有的特点

1. 网页的宽度自动调整

- 随着视口/屏幕的大小不断变化

2. 尽量少使用绝对宽度

- 根据 % 去设置宽度

3. 字体要使用rem、em做为单位

- rem[r:root],即根据html元素的字体去改变子元素的字体大小
- em：根据子元素的父级去改变自身的字体大小，如果父级没有就一层一层往上看，如果都没有，浏览器就会根据基准字号去设置（浏览器字体大小）

4. 布局要是用浮动、弹性布局

```html
float: left/right;
display:flex;
```

## 媒体查询

根据一个或多个基于设备类型、具体特点和环境来应用样式@media

1. 媒体类型
2. 媒体特性
3. 逻辑运算符

参考：https://drafts.csswg.org/mediaqueries/

### 媒体类型

1. all      所有设备
   
```html
@media all {
            .isDiv {
                width: 400px;
                height: 400px;
                background: gray;
            }
        }
```
2. print    打印机设备
   
3. screen   彩色的电脑屏幕
   
4. speech   听觉设备(针对有视力障碍的人士，可以把页面的内容以语音的方式呈现的设备)

### 媒体特性[设备上的属性]

1. width        宽度

- min-width     最小的宽度，宽度只能比这个大
- max-width     最大的宽度，宽度只能比这个小

```css
/*屏幕尺寸大于500的时候*/
        @media (min-width: 500px) {
            .isDiv {
                background: #008c8c;
            }
        }

        /*屏幕尺寸小于600的时候*/
        @media (max-width: 600px) {
            .isDiv {
                background: black;
            }
        }
```

2. height       高度

- min-height    最小的高度，高度只能比这个大
- max-height    最大的高度，高度只能比这个小

3. orientation  方向

- landscape     横屏(宽度大于高度)
- portrait      竖屏(高度大于宽度)

```css
/*横屏*/
        @media (orientation: landscape) {
            .isDiv {
                width: 400px;
                height: 100px;
            }
        }

        /*竖屏*/
        @media (orientation: portrait) {
            .isDiv {
                width: 100px;
                height: 400px;
            }
        }
```

4. aspect-ratio 宽度比

- -webkit-device-pixel-ratio    像素比(webkit内核的私有属性)

```css
/*宽高比*/
        @media (aspect-ratio: 4/3) {
            .isDiv {
                border: 3px solid #ffff00;
            }
        }

        /*像素比*/
        @media (-webkit-device-pixel-ratio: 2) {
            .isDiv:after {
                content: 'xxx';
                font-size: 50px;
            }
        }
```

### 逻辑运算符[用来做条件判断]

1. and          合并多个媒体类型(并且的意思)
   
```css
/*屏幕的尺寸比700大的时候以及横屏的时候满足*/
        @media all and (min-width: 700px) and (orientation: landscape) {
            .isDiv {
                background: gold;
            }
        }
```

2. ,            匹配某个媒体查询(或者的意思)
   
```css
/*屏幕尺寸小于800，或者屏幕为横屏的时候满足*/
        @media (max-width: 800px),(orientation: landscape) {
            .isDiv {
                background: pink;
            }
        }
```

3. not          对媒体查询结果取反
   
```css
/*屏幕尺寸大于800，整个才满足*/
        @media not all and (max-width: 800px) {
            .isDiv {
                background: blue;
            }
        }
```

4. only         仅在媒体查询匹配成功后应用样式(防范老旧浏览器)

```css
@media only screen and (min-width: 1000px) {
            .isDiv {
                background: yellow;
            }
        }
```


## 栅格系统

1. 栅格系统一般被分为12列，并且格式是固定的

```html
<!--盒子宽度铺满全屏-->
    <div class="container-fluid">
        <!--行-->
        <div class="row">
            <div></div>
        </div>
    </div>

<!--盒子宽度并不确定，自己去设定-->
    <div class="container">
        <div class="row"></div>
    </div>
```
