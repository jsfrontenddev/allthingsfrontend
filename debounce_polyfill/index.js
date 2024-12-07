const callback = () => {
  console.log("print sonmething in console");
};

const myDebounce = function (callback, delay) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
};

const betterFunction = myDebounce(callback, 3000);
