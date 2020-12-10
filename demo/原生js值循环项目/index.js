
/**
 * 
 * @param {String} method 请求方式
 * @param {String} url    请求地址
 * @param {String} data   请求数据  key=value&key1=value1
 * @param {Function} cb     成功的回调函数
 * @param {Boolean} isAsync 是否异步 true
 */
function ajax(method, url, data, cb, isAsync) {
    // get   url + '?' + data
    // post 
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // xhr.readyState    1 - 4  监听是否有响应
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            if (xhr.status == 200) {
                cb(JSON.parse(xhr.responseText))
            }
        }
    }

    if (method == 'GET') {
        xhr.open(method, url + '?' + data, isAsync);
        xhr.send();
    } else if (method == 'POST') {
        xhr.open(method, url, isAsync);
        // key=value&key1=valu1
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}

//用于书写当前系统中所有的事件绑定
function bindEvent () {
    var menu = document.querySelector('.menu')
    menu.onclick = function (e) {
        if(e.target.tagName == 'DD') {
            var id = e.target.getAttribute('data-id')
            var content = document.getElementById(id)
            e.target.classList.add('active')
            var targetSibling = getSiblings(e.target)
            for(var i = 0; i < targetSibling.length; i++) {
                targetSibling[i].classList.remove('active')
            }
            content.style.display = 'block'
            var contentSiblings = getSiblings(content)
            for(var i = 0; i < contentSiblings.length; i++) {
                contentSiblings[i].style.display = 'none'
            }
        }
    }

    var addStudentBtn = document.getElementById('add-student-btn')
    addStudentBtn.onclick = function (e) {
        e.preventDefault();
    }


}

//获取node节点的所有兄弟节点 
function getSiblings(node) {
    var parentNode = node.parentNode;
    var children = parentNode.children
    var siblings = [];
    for( var i = 0; i < children.length; i++) {
        if(children[i] != node) {
            siblings.push(children[i])
        }
    }
    return siblings;
}
bindEvent()


//获取表单数据
function getFormData () {
    var name = form.name.value;
    var sex = form.sex.value;
    var email = form.email.value;
    var sNo = form.sNo.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value
}