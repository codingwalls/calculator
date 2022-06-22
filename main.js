const screen = document.querySelector("#show");

const handleClick = (val) => {
    if(val == 'clear') 
        clear();
    else if(val == 'delete')
        del();
    else {
        val == '*' ? val = 'x' : (val == '/' ? val = '÷' : null);
        screen.value += val;
    }
};

const handleSubmit = () => {
  let str = ''
  for(let i = 0; i < screen.value.length; i++){
    str += (screen.value[i] == 'x' ? screen.value[i] = '*' : (screen.value[i] == '÷' ? screen.value[i] = '/' : screen.value[i]));
  }
  const ans = eval(str);
  ans != undefined ? screen.value = ans : null
  setTimeout(() => {
    screen.value = "";
  }, 5000);
};

const clear = () => {
    screen.value = "";
}

const del = () => {
    screen.value = screen.value.slice(0, screen.value.length - 1)
}