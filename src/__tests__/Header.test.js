import React from 'react';
import Header from '../components/App/Header';
import {shallow} from 'enzyme';

test('Header shows a div with text "Header" ', () => {
  const component = shallow(
    <Header></Header>
  );
    expect(component.text()).toEqual('Header');

});