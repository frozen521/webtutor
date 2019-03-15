/*
* @Author: frozen521
* @Date:   2019-03-15 14:23:14
* @Last Modified by:   frozen521
* @Last Modified time: 2019-03-15 14:27:36
*/
var a={
    user:'zhuimeg',
    fn(e,ee){
        console.log(this)
        console.log(this.user);
        console.log(e+ee)
    }
}
var b=a.fn;
b.apply(null,[4,5])