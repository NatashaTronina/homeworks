//Задача № 1
function cachingDecoratorNew(func) {
let cache = [];

    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            return "Из кеша: " + objectInCache.value;
        }

        let result = func(...args); 
        cache.push({hash: hash, value: result}) ; 
        if (cache.length > 5) { 
        cache.shift(); 
        }
        return "Вычисляем: " + result;  
    }
    return wrapper;
}


const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кеша: 9
upgraded(2, 2, 3); // вычисляем: 12
upgraded(3, 2, 3); // вычисляем: 15
upgraded(4, 2, 3); // вычисляем: 18
upgraded(5, 2, 3); // вычисляем: 21
upgraded(6, 2, 3); // вычисляем: 24 (при этом кеш для 1, 2, 3 уничтожается)
upgraded(1, 2, 3); // вычисляем: 9  (снова вычисляем, кеша нет)


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        if(!timeoutId){
            wrapper.count++;
            func.apply(this, [args]);
        }
        wrapper.allCount++;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {func.apply(this, [args]); wrapper.count++;}, delay);
        
    }
    return wrapper;
}
