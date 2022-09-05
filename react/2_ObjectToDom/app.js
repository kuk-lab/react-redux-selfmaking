function createDOM(node) {
  console.log(node);
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);
  // node.children //
  //   .map(child => element.appendChild(createDOM(child)));

  node.children //
    .map(createDOM)
    .forEach(element.appendChild.bind(element));

  return element;
}

// const vdom = {
//   tag: 'p',
//   props: {},
//   children: ['hihi'],
// };

// 이 객체 안에 어떤 모양으로 만들 것인가?
const vdom = {
  tag: 'div',
  props: {},
  children: [
    {
      tag: 'h1',
      props: {},
      children: ['Hello, React!'],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {},
          children: ['첫 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['두 번째 아이템'],
        },
        {
          tag: 'li',
          props: {},
          children: ['세 번째 아이템'],
        },
      ],
    },
  ],
};

document //
  .querySelector('#root')
  .appendChild(createDOM(vdom));
