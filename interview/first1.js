var name='HELLO'
var obj = {
    name: 'ya LV'
}

function func() {
    console.log(this.name);
}

//将func的代码拷贝一份，并且永远改变其拷贝出来的函数中的this，为bind第一个参数所指向的对象。把这     份永远改变着this指向的函数返回给func1.
var func1 = func.bind(obj);
//bind方法不会立即执行，是返回一个改变上下文this的函数，要对这个函数调用才会执行。
func1();  //ya LV
//可以看到，现在这份改变this之后拷贝过来的函数，this的指向永远是bind（）绑定的那个，不管之后去call    重新指向对象，func1 都不会改变this的指向。永远！可知，bind比call优先级还高。
func1.call({name:'CALL'});   //ya LV

//又从func重新拷贝一份永远改变this指向对象为{name:'LI SI'}这个对象的函数，返回给func2.
var func2 = func.bind({name:'LI SI'});
func2();   //LI SI

//注意，这里是拷贝一份func2(而不是func)的代码，而func2之前已经绑定过去永远改变this的指向了，所以这   里并不去改变！还是会输出原来的最先bind的this指向对象。
var func3 = func2.bind({name:'ZHANG SAN'});
func3();   //LI SI

//上面对func最初的函数进行了多次绑定，绑定后原函数 func 中的 this 并没有被改变，依旧指向全局对象      window。因为绑定bind的过程是拷贝代码的一个过程，而不是在其自身上修改。window.name = HELLO
func();   //HELLO
