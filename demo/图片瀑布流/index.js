// 1.加入图片元素
var divContainer = document.getElementById('container')
var imgWidth = 220;//每张图片的固定宽度
function createImage() {
   
    //将所有的十张图片引入到html的img标签里
    for(var i = 0; i <= 10; i++) {
        var src = 'img/'+i+'.jpg'
        var img = document.createElement('img')
        img.src = src
        img.style.width = imgWidth + "px";
        divContainer.appendChild(img)
    }
}
createImage()

//2.设置每张图片的位置
function setPoisions() {
    var info = cal(); // 得到列数 和 间隙的空间
    var nextToos = new Array(info.columns)//该数组的长度为列数，每一项表示的时下一个图片的纵坐标

    for(var i = 0; i < divContainer.children.length; i++) {
        var img = divContainer.children[i]
    //    找到nextTop中的最小值作为当前图片的纵坐标
        
    }
}

// 计算一共有多少列，一级每一列之间的间隙
function cal () {
    var containerWidth = divContainer.clientWidth;//容器的宽度
    //计算列的数量
    var columns = Math.floor(containerWidth / imgWidth);
    //计算间隙
    var spaceNumber = columns + 1
    // 剩余的空间
    var leftSpace = containerWidth - columns * imgWidth
    var space = leftSpace / spaceNumber
    return {
        space:space,
        columns:columns
    }
}


setPoisions()


//3.设置容器的高度