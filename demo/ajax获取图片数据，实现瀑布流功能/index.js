function getData () {
    ajax ({
        url:'./data.json',
        success: function (res) {
            console.log(res)
            renderDom(res)
        }
    })
    
}
//获取最短的一列
function getMinLi() {
    var oLi = document.getElementsByClassName('col');
    var minHeight = oLi[0].offsetHeight;
    var minIndex = 0;
    for (var i = 1; i < oLi.length; i++ ) {
        if (oLi[i].offsetHeight < minHeight) {
            minHeight = oLi[i].offsetHeight;
            minIndex = i;
        }
    }
    return {
        minHeight: minHeight,
        minIndex: minIndex
    }
}

//获取数据
function renderDom(data) { 
    var oLi = document.getElementsByClassName('col')
    var imgWidth = oLi[0].offsetWidth - 20;
    data.forEach( function(item) {
        //创建每张图片的区域
        var div = document.createElement('div')
        div.className = 'item'
        var img = new Image()
        img.src = item.img
        img.height = imgWidth * item.height / item.width
        var oP = document.createElement('p')
        oP.innerText = item.desc
        div.appendChild(img)
        div.appendChild(oP)
        // 将图片插入到最短的列
        var minIndex = getMinLi().minIndex;
        oLi[minIndex].appendChild(div);
        
        
    } )
}
getData()

//监听滚动条滚动事件
var timer = null;
window.onscroll = function () {
    // 500毫秒之内不断的滚动滚动条的话只进行最后一次的网络请求
    clearTimeout(timer);
    // 获取页面可视高度
    var clientHeight = document.documentElement.clientHeight;
    //  获取滚动的距离
    var scrollTop = document.documentElement.scrollTop;
    var minHeight = getMinLi().minHeight;
    if (minHeight < clientHeight + scrollTop) {
        timer = setTimeout(function () {
            getData();
        }, 500)
    }
}