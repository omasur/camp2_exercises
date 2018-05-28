// Link.test.js
import React from 'react';
import Link from './Link.js';
import './index.css';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  let tree = component.toJSON();
  console.log("Tree initial=",tree.children[0]);
  expect(tree.children[0]).toMatchSnapshot();

  // manually trigger the callback
  tree.children[0].props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  console.log("Tree avec onMouseEnter=",tree.children[0]);
  expect(tree.children[0]).toMatchSnapshot();

  // manually trigger the callback
  tree.children[0].props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  console.log("Tree avec onMouseLeave=",tree.children[0]);
  expect(tree.children[0]).toMatchSnapshot();

});


//// IMPORTANT
// J'ai mis tree.children[0] à la place de tree quand j'ai ajouté le parent div dans le render
