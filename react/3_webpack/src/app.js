import { createDOM, render } from './react';

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
          props: { style: 'color: blue' },
          children: ['첫 번째 아이템'],
        },
        {
          tag: 'li',
          props: { style: 'color: #ff4747' },
          children: ['두 번째 아이템'],
        },
        {
          tag: 'li',
          props: { style: 'color: yellow' },
          children: ['세 번째 아이템'],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector('#root'));
