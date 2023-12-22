// Generate a random color with Hex values
const randomColor = function () {
    hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changingBgColor, 1000);
    }
  
    function changingBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  const startBtn = document.querySelector('#start');
  startBtn.addEventListener('click', startChangingColor);
  
  const stopBtn = document.querySelector('#stop');
  stopBtn.addEventListener('click', stopChangingColor);