const countDOM = document.querySelector('#count');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

const [counter, setCounter] = useState(3);

incrementBtn.addEventListener('click', () => {
  setCounter(counter() + 1);
});

render();

function render() {
  countDOM.innerHTML = counter();
}

function useState(init) {
  let _val = init;
  console.log('@@@@outer : ', _val);

  function state() {
    return _val;
  }

  function setState(newState) {
    if (newState) {
      _val = newState;
    }
    console.log('@@@@inner : ', _val);
    render();
  }
  return [state, setState];
}
