// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// import CheckboxWithLabel from '../CheckboxWithLabel';

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

test('App test changement de tri', () => {
  // Render a checkbox with label in the document
  const sort = shallow(
    <App lines={products} />
  );
  // console.log(sort);

  expect(sort.state().sortedBy).toEqual('decathlon_id');
  
  sort.find('th').at(1).simulate('click');

  expect(sort.state().sortedBy).toEqual('title');
});




//
//
// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <App />
//   );
//
//   let tree = component.toJSON();
//   console.log("Tree initial=",tree.children[0]);
//   expect(tree.children[0]).toMatchSnapshot();
//
//   // manually trigger the callback
//   tree.children[0].props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   console.log("Tree avec onMouseEnter=",tree.children[0]);
//   expect(tree.children[0]).toMatchSnapshot();
//
//   // manually trigger the callback
//   tree.children[0].props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   console.log("Tree avec onMouseLeave=",tree.children[0]);
//   expect(tree.children[0]).toMatchSnapshot();
//
// });
