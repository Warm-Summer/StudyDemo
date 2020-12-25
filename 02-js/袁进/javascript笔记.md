# 比较运算符

大小比较： >  <   >=   <=
相等比较： ==   != === !==

**比较运算符的返回类型：boolean**
**算数运算符的优先级高于比较运算符**

## 大小比较

两个字符串比较大小，比较的是字符串的字符编码。
> 字符串比较大小时，是一位一位进行比较
```js
console.log("AB" > "A");
第一步：先比较第一位，即："A"与"A"比较，然后"B"在进行比较
```

**细节**

1. 两个字符串比较大小，比较的是字符串的字符编码。
2. 如果一个不是字符串，并不且两个都是原始类型，将他们都转换为数字进行比较
   ```js
    console.log("1" >= 1);
    console.log("2" > true);
    ```
- NaN与任何数字进行比较，得到的结果都是**false**
    ```js
    console.log(NaN > 0);
    ```
- Infinity比任何数字都大
- -Infinity比任何数字都小

3. 如果其中一个是对象，讲对象转换为原始类型，然后按照规则1或者规则2进行比较

> 目前，对象转换为原始类型后，是字符串 "[Object Object]"
```js
console.log(1 > {});//false
1.{}转换为字符串为:"[Object Object]"
2.字符串"[Object Object]"转换为数字为NaN
3.NaN与任何数字进行比较,结果都是false
console.log(null > -1);//true
console.log(undefined > -1);//false
undefined转换为数字为NaN
```

## 相等比较

### == 和 !=  （相等比较和不相等比价）

==: 比较两个数据是否相等，相等返回true，不相等返回false
!=: 比较两个数据是否不相等

```js
console.log(1 == 1);//true
console.log(1 != 1);//false
console.log("abc" == "abc");//true
```

**细节**

1. 两端的数据类型相同：直接比较两个数据本身是否相同（两个对象比较的地址）

2. 两端的类型不同
        
1). null 和 undefined，他们直接相等，和其他原始类型比较，则不相等
```js
console.log(null == undefined);//true
console.log(null != undefined);//false
console.log(null == 0);//false
console.log(null >= 0); //true
console.log(undefined == 0); //false
```

2). 其他原始类型比较时，先转换为数字，再进行比较
```js
console.log("1" == 1);//true
```

3). NaN与任何数字比较，包括自身都是**false**

4). Infinity 和 -Infinity，**自身和自身相等**

5). 对象比较时，要先转换为原始类型，再进行比较

**由于相等和不相等比较，对于不同类型的数据比较违反直觉，因此，通常我们不使用这种比较方式，而是使用功能架接近直觉的严格相等和严格不相等进行比较**

### ===  和 !==  （严格相等和严格不相等）

===： 两端的数据和类型必须相同，才为true
!==:  两端的数据或类型不相同
```js
console.log(1 === true);//false
```

1. 两端类型相同，规则和相等比较一致。
2. 两端类型不同，为false

数字规则：
1). NaN与任何数字比较，包括自身都是**false**
2). Infinity 和 -Infinity，**自身和自身相等**


# 逻辑运算符

