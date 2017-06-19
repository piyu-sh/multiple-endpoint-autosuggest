import React from 'react';
import ConnectedAutoComplete from '../components/AutoComplete/ConnectedAutoComplete';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from "react-redux";


describe('AutoComplete', function () {
    const initialState = {autoComplete:{
      value: '',
      suggestions: [],
      isLoading: false}
    };
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedAutoComplete /></Provider> )
    })


    it('render the ConnectedAutoComplete component', () => {
       expect(wrapper.find(ConnectedAutoComplete).length).toEqual(1)
    });

    it('check Prop matches with initialState', () => {
       expect(wrapper.find(ConnectedAutoComplete).prop('isLoading')).toEqual(initialState.isLoading)
    });

})
