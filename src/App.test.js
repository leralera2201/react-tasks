import React from 'react';
import {mount, shallow} from "enzyme";

import App from "./App";
import {BookCard, BooksPagination, Error, Footer, Header, Loader} from "./components";

import {Books} from "./pages/Books/Books";
import {BookForm} from "./pages/Book/BookForm/BookForm";
import Home from "./pages/Home";
import {Provider} from "react-redux";
import store from "./store/store";

import {Book} from "./pages/Book/Book";
import {componentWithRouter} from "./utils/routerUtils";



describe('App', () => {


    it('renders the Home', () => {
        const wrapper = mount(componentWithRouter());
        expect(wrapper.find(Home).length).toEqual(1);
    });

    it('renders the Books', () => {
        const wrapper = mount(<Provider store={store}>{componentWithRouter('/books')}</Provider>);
        expect(wrapper.find(Books).length).toEqual(1);
        expect(wrapper.find(Home).length).toEqual(0);
    });

    it('renders the Book', () => {
        const wrapper = mount(<Provider store={store}>{componentWithRouter('/books/:id')}</Provider>);
        expect(wrapper.find(Book).length).toEqual(1);
    });

    it('renders the BookForm', () => {
        const wrapper = mount(<Provider store={store}>{componentWithRouter('/books/create')}</Provider>);
        expect(wrapper.find(BookForm).length).toEqual(1);
        expect(wrapper.find(Books).length).toEqual(0);
    });




    it('should have 5 inputs', () => {
        const wrapper = mount(<BookForm match={{params: {}}} location={{state: {}}}/>);
        expect(wrapper.find('input').length).toEqual(5)
    });

    it('should change the state after change the input value', () => {
        const newValue = 'testing component';
        const wrapper = mount(<BookForm match={{params: {}}} location={{state: {}}}/>)
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { name: 'title', value: newValue }});

        expect(wrapper.state().title.value).toEqual(newValue);
    });

    describe('News container', () => {
        const props = {
            loading: true,
            currentBooks: [],
            error: null,
            booksPerPage: 20,
            currentPage: 1,
            books: [],
            paginate: () => {},
            getAllBooks: () => {},
            location: {
                state: {}
            }
        }
        it('render with loading', () => {
            const newsContainer = shallow(<Books {...props} />)
            expect(newsContainer.find(Loader)).toHaveLength(1)
        })

        it('render no books', () => {
            props.loading = false
            const newsContainer = shallow(<Books {...props} />)
            expect(newsContainer.find('#no-books')).toHaveLength(1) // .find + поиск по имени компонента
        })

        it('render books', () => {
            props.currentBooks = [{
                title: "d",
                description: "d",
                id: 'd'
            }]
            const newsContainer = shallow(<Books {...props} />)
            expect(newsContainer.find(BookCard)).toHaveLength(1)
            expect(newsContainer.find(BooksPagination)).toHaveLength(1)
        })

        it('render with error', () => {
            props.error = 'Some error'
            const newsContainer = shallow(<Books {...props} />)
            expect(newsContainer.find(Error)).toHaveLength(1)
        })

    })

    describe('book', () => {
        const props = {
            loading: true,
            error: null,
            book: null,
            deleteSuccess: false,
            getBookById: () => {},
            deleteBook: () => {},
            match: {
                params: {}
            },
            history: {}
        }
        it('render with loading', () => {
            const newsContainer = shallow(<Book {...props} />)
            expect(newsContainer.find(Loader)).toHaveLength(1)
        })

        it('render no books', () => {
            props.loading = false
            const newsContainer = shallow(<Book {...props} />)
            expect(newsContainer.find('#no-book')).toHaveLength(1) // .find + поиск по имени компонента
        })

        it('render books', () => {
            props.book = {
                title: "d",
                description: "d",
                excerpt: "d",
                publishDate: "2000-20-20",
                pageCount: 2,
                id: 'd'
            }
            const newsContainer = mount(<Book {...props} />)
            expect(newsContainer.find('h3').text()).toEqual(props.book.title)
        })

        it('render with error', () => {
            props.error = 'Some error'
            const newsContainer = shallow(<Book {...props} />)
            expect(newsContainer.find(Error)).toHaveLength(1)
        })

    })
})
