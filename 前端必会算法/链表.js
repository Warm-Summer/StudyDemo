var b = {
    value: 3,
    next:null
};

var a = {
    value:4,
    next:b
};

console.log(a.next === b);//true
