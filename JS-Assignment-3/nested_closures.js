"use strict";
function outer() {
    var count = 5;
    const inner = () => {
        var count = 10;
        console.log(count);
    };
    inner();
    console.log(count);
}
outer();
