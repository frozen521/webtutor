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
    var proxy = new Proxy(
        {},
        {
            get: function(target, property) {
                return 35;
            }
        }
    );
    console.log(proxy.time);
}
