let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
    function nested() {
        console.log("Nested Count Check:", count);
    }
    nested();
}

function decrement() {
    count--;
    console.log("Count:", count);
}

increment();
increment();
decrement();
