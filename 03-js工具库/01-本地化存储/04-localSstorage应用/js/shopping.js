
//请求数据
ajax('js/shoppingData.json', function (data) {
    console.log(data);
    createGoodsDom(data);
    // addEvent();
});

//创建商品结构
function createGoodsDom(data) {
    var str = '';

    data.forEach(function (item) {
        var color = '';  //用来存储每条数据里面的所有颜色信息
        item.list.forEach(function (product) {
            color += '<span data-id="' + product.id + '">' + product.color + '</span>';
        });

        str += '<tr>' +
            '<td>' +
            '<img src="' + item.list[0].img + '" />' +
            '</td>' +
            '<td>' +
            ' <p>' + item.name + '</p>' +
            '<div class="color">' + color + '</div>' +
            '</td>' +
            '<td>' + item.list[0].price + '.00元</td>' +
            '<td>' +
            '<span>-</span>' +
            '<strong>0</strong>' +
            '<span>+</span>' +
            '</td>' +
            '<td><button>加入购物车</button></td>' +
            '</tr> ';
    });

    var tbody = document.querySelector('.product tbody');
    tbody.innerHTML = str;
}

//添加商品操作事件

