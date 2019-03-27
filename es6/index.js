let user={
    name:'john',
    sex:'man',
    get username(){
        return this.name;
    },
    set username(name){
        this.name=name;
    }
}
console.log(user.name);
user.name='hlllll'
console.log(user.name );