import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import App from './App';
import { Books } from './pages/Books/Books';
import { BookForm } from './pages/Book/BookForm/BookForm';
import { Book } from './pages/Book/Book';
import Home from './pages/Home';
import store from './store/store';
import { componentWithRouter } from './utils/routerUtils';

describe('App', () => {
  it('renders the Home', () => {
    const wrapper = mount(componentWithRouter());
    expect(wrapper.find(Home).length).toEqual(1);
  });
});
