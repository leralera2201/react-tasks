import React from 'react';
import {mount, shallow} from "enzyme";
import { MemoryRouter } from 'react-router';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import App from "./App";
import {Footer, Header} from "./components";

import { BrowserRouter as Router } from 'react-router-dom';
import Books from "./pages/Books";
import BookForm from "./pages/Book/BookForm";
import Field from "./components/Field";
import store from "./store/store";
import Home from "./pages/Home";

const mockStore = configureMockStore();
// const store = mockStore({});

let app = <Router><App /></Router>

const formRouterWithProvider = (route, component = <App/>) => <MemoryRouter initialEntries={[route]}>
    <Provider store={store}>
        {component}
    </Provider>
</MemoryRouter>


describe('App', () => {
    it('renders the Header', () => {
        const wrapper = mount(app);
        expect(wrapper.find(Header).length).toEqual(1);
    });

    it('renders the Home', () => {
        const wrapper = mount(formRouterWithProvider('/'));
        expect(wrapper.find(Home).length).toEqual(1);
    });

    it('renders the Books', () => {
        const wrapper = mount(formRouterWithProvider('/books'));
        expect(wrapper.find(Books).length).toEqual(1);
        expect(wrapper.find(Home).length).toEqual(0);
    });

    it('renders the BookForm', () => {
        const wrapper = mount(formRouterWithProvider('/books/create'));
        expect(wrapper.find(BookForm).length).toEqual(1);
        expect(wrapper.find(Books).length).toEqual(0);
    });

    it('Header text is Blog', () => {
        const wrapper = mount(app);
        const headerWrapper = wrapper.find(Header);

        expect(headerWrapper.find('.header-logo').first().text()).toEqual('Blog');
    });

    it('renders the Footer', () => {
        const wrapper = mount(app);
        expect(wrapper.find(Footer).length).toEqual(1);
    });

    // it('should change the state after change the input value', () => {
    //     const newValue = 'testing component';
    //     const wrapper = mount(formRouterWithProvider('/books/create', <BookForm match={{params: {}}} location={{state: {}}}/>));
    //
    //     expect(wrapper.find(Field).length).toEqual(5);
    //
    //     // const field = wrapper.find(Field).first()
    //
    //     // const input = wrapper.find('#title');
    //     // field.simulate('change', { target: { value: newValue }});
    //     // expect(field.value).toEqual(newValue);
    // });
})
