import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

test('Hello World ok', () => {
  const component = renderer.create(
    <App/>
  );
  let tree = component.toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
})
