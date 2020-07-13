// new 实现
function newObt(obt, ...args) {
  const newObject = Object.create(obt.prototype);
  const result = obt.apply(newObject, args);
  return typeof result === 'object'? result: newObject;
}

// 组合继承

function parent() {
  this.name = 'wang';
}

function children() {
  parent.call(this);
}

// children的原型对象指向parent的原型， 避免属性的多次创建
children.prototype = Object.create(parent.prototype);
children.prototype.constructor = children;

// bind实现

