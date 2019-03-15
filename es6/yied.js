function *show() {  
    alert('a');
    yield ;
    alert('b')
}
let gen=show();
gen.next(12)