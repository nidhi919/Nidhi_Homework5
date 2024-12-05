// Fibonacci calculation in the worker
function fibonacci(n: number): number {
    // return -1;
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

self.addEventListener("message", (e) => {
    const number = e.data;  
    const startTime = performance.now();
    const result = fibonacci(number);
    const endTime = performance.now();

    self.postMessage({
        value: result,
        duration: endTime - startTime,
    });
});
