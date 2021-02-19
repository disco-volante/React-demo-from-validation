import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './Form';
import FormField from '../containers/FormField';

configure({ adapter: new Adapter() });

describe('<Form />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  it('should render 5 fields', () => {
    expect(wrapper.find(FormField)).toHaveLength(5);
  });
  it('should have deactivation date field disabled', () => {
    expect(wrapper.find(FormField).filter('[disabled=true]')).toHaveLength(1);
  });

  it('should enable deactivation date field on inactive status', () => {
    wrapper.find(FormField).filter('[name="userStatus"]').simulate('change', { target: { value: 'inactive' } });
    expect(wrapper.find(FormField).filter('[disabled=true]')).toHaveLength(0);
  });
});
