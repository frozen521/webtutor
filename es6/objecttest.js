{
    console.log("________________________________________________");
    const oaepPa = {
        method() {
            console.log("x");
        }
    };
    console.log(oaepPa.method);
}
{
    console.log("________________________________________________");
    function getpoint() {
        const x = 1;
        const y = 10;
        return { x, y };
    }
    console.log(getpoint());
}
{
    console.log("________________________________________________");

    const cart = {
        get whells() {
            return this._whells;
        },
        set whells(value) {
            this._whells = value;
        }
    };
    console.log(cart._whells);
}
