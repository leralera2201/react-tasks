import * as api from '@api/books';

const dummyBook = {
    id: 0,
    title: 'string',
    description: 'string',
    pageCount: 0,
    excerpt: 'string',
    publishDate: '2020-12-30T16:01:13.371Z',
};

const dummyBooks = [dummyBook]

describe("api requests", () => {
    it('fetch books', async () => {
        jest.spyOn(api, 'getBooks')
            .mockImplementation(() => Promise.resolve(dummyBooks));
        const data = await api.getBooks();
        await expect(data).toBe(dummyBooks);
    });

    it('fetch book', async () => {
        jest.spyOn(api, 'getBook')
            .mockImplementation(() => Promise.resolve(dummyBook));
        const data = await api.getBook(dummyBook.id);
        await expect(data).toBe(dummyBook);
    });

    it('create book', async () => {
        jest.spyOn(api, 'createBook')
            .mockImplementation(() => Promise.resolve(dummyBook));
        const data = await api.createBook(dummyBook);
        await expect(data).toBe(dummyBook);
    });

    it('update book', async () => {
        jest.spyOn(api, 'updateBook')
            .mockImplementation(() => Promise.resolve(dummyBook));
        const data = await api.updateBook(dummyBook);
        await expect(data).toBe(dummyBook);
    });

    it('delete book', async () => {
        jest.spyOn(api, 'deleteBook')
            .mockImplementation(() => Promise.resolve());
        const data = await api.deleteBook(dummyBook.id);
        await expect(data).toBe(undefined);
    });
})