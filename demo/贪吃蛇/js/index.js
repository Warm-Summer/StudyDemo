var sw = 20,//一个方块的宽度
	sh = 20,//一个方块的高度
	tr = 30,//行数
	td = 30;//列数
var snake = null;//蛇的实例

// 方块构造函数
function Square (x,y,classname) {
	this.x = x * sw;
	this.y = y * sh;
	this.class = classname;
	// 每一个小方块所对应的dom元素
	this.viewContent = document.createElement('div');

	this.viewContent.className = this.class;
	// 方块的父级
	this.parent = document.getElementById('snakewrap')
}
// 创建方块DOM
Square.prototype.create = function () {
	this.viewContent.style.ppsition = "absolute";
	this.viewContent.style.width = sw + 'px';
	this.viewContent.style.height = sh +  'px';
	this.viewContent.style.left = this.x +  'px'
	this.viewContent.style.top = this.y + 'px';
	this.parent.appendChild(this.viewContent)
};
Square.prototype.remove = function () {
	this.parent.removeChild(this.viewContent)
};

//蛇
function Snake () {
	this.head = null;//存一下蛇头的信息
	this.tail = null;//存一下蛇尾的信息
	this.pos = [
		
	];//存一下方块的位置
	this.directionNum = {//存储蛇走的方向，用一个对象来表示

	}
}
Snake.prototype.init = function () {
	// 创建一个蛇头
	var snakeHeader = new Square(2, 0, 'snakeHeader');
	snakeHeader.create();
	this.head = snakeHeader;//存储蛇头信息
}
snake = new Snake();
snake.init();