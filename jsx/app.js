const Title = () => {
  const hihi = '소통해요';
  return `
  <div>
    <h1>${hihi}</h1>
  </div>
`;
};

const Counter = () => {
  let count = 1;

  function setCount() {
    count++;
  }

  return `
    <h1>Counter</h1>
    <p>now : ${count}</p>
    <button onclick="()=>count++">+</button>
  `;
};

const $root = document.querySelector('#root');

function parseDOM(jsx) {
  const stack = document.createElement('div');
  if (typeof jsx === 'function') {
    stack.innerHTML = jsx();
  } else {
    stack.innerHTML = jsx;
  }
  return stack;
}

console.log(parseDOM(Title));

$root.appendChild(parseDOM(Counter));
