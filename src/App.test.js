import React from 'react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  })

  it('Poprawnie wyświetla H1 z loaderem', () => {
    expect(wrapper.find('h1').text()).toBe('Loading')
  });

  it('Poprawnie wyświetla H1 z powitaniem "Witaj" po 2 sekundach', () => {
    jest.useFakeTimers();
    jest.runAllTimers();
    setTimeout(() => {
      expect(wrapper.find('h1').text()).toBe('Witaj')
    }, 2100);
  });
});