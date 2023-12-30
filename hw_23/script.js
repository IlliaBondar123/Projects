let greenElement = document.getElementById('green');
let yellowElement = document.getElementById('yellow');
let redElement = document.getElementById('red');

// Задаем размер и цвет
greenElement.style.cssText = 'height: 100px; width: 100px; background-color: green; border-radius: 50%; border: 1px solid black;';
yellowElement.style.cssText = 'height: 100px; width: 100px; background-color: yellow; border-radius: 50%; border: 1px solid black;';
redElement.style.cssText = 'height: 100px; width: 100px; background-color: red; border-radius: 50%; border: 1px solid black;';  


let button = document.getElementById('btn');

// Добавляем обработчик события для события "click" на кнопке
button.addEventListener('click', function() {
  if (greenElement.classList.contains('active')) {
    greenElement.classList.remove('active');
    greenElement.classList.add('disabled');
    yellowElement.classList.remove('disabled');
    yellowElement.classList.add('active');
  } else if (yellowElement.classList.contains('active')){
    yellowElement.classList.remove('active');
    yellowElement.classList.add('disabled');
    redElement.classList.remove('disabled');
    redElement.classList.add('active');
  }else if (redElement.classList.contains('active')){
    redElement.classList.remove('active');
    redElement.classList.add('disabled');
    greenElement.classList.remove('disabled');
    greenElement.classList.add('active');
  } 
}
);

const resizableBlock = document.getElementById('textbox');
resizableBlock.style.cssText = 'position: absolute; border: 1px solid black; resize: both; overflow: hidden; padding: 10px; background-color: grey'
let isResizing = false;

resizableBlock.addEventListener('mousedown', function (event) {
    if (event.target === resizableBlock) {
        isResizing = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.removeEventListener('mousemove', handleMouseMove);
        });
    }
});

function handleMouseMove(event) {
    if (isResizing) {
        resizableBlock.style.width = event.clientX - resizableBlock.offsetLeft + 'px';
        resizableBlock.style.height = event.clientY - resizableBlock.offsetTop + 'px';
    }
}