import client from "./client";

/**
 * @typedef {Object} Book
 * @property {number} id
 * @property {string} [title]
 * @property {string} [description]
 * @property {number} [pageCount]
 * @property {string} [excerpt]
 * @property {string} [publishDate]
 */

/**
 * fetch books
 * @function
 * @returns {Promise}
 */
export const getBooks = () => client.get("/Books");

/**
 * fetch book by id
 * @function
 * @param {number} id
 * @returns {Promise}
 */
export const getBook = (id) => client.get(`/Books/${id}`);

/**
 * create book
 * @function
 * @param {Book} book
 * @returns {Promise}
 */
export const createBook = (book) => client.post("/Books", book);

/**
 * update book
 * @function
 * @param {Book} book
 * @returns {Promise}
 */
export const updateBook = (book) => client.put(`/Books/${book.id}`, book);

/**
 * delete book
 * @function
 * @param {number} id
 * @returns {Promise}
 */
export const deleteBook = (id) => client.delete(`/Books/${id}`);
