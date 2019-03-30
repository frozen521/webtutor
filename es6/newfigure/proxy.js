{
    console.log("________________________________________________");
    const obj = new Proxy(
        {},
        {
            get: function(target, key, receiver) {
                console.log(`getting ${key}!`);
                return Reflect.get(target, key, receiver);
            },
            set: function(target, key, value, receiver) {
                console.log(`setting ${key}!`);
                return Reflect.set(target, key, value, receiver);
            }
        }
    );
}

{
    console.log("________________________________________________");
    let handler = {
        get: (target, name) => {
            return name in target ? target[name] : 29;
        }
    };
    let p = new Proxy({}, handler);
    p.a = 1;
    p.b = undefined;
    console.log("c" in p, p.c);
}
