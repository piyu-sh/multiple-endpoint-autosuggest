import React from 'react';
import Footer from '../components/App/Footer';
import {shallow} from 'enzyme';

test('Footer shows a div with text "Footer" ', () => {
  const component = shallow(
    <Footer></Footer>
  );
    expect(component.text()).toEqual('Footer');

});