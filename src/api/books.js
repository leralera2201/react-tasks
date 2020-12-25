import client from "./client";

export const getBooks = () => client.get("/api/v1/Books");

export const getBook = (id) => client.get(`/api/v1/Books/${id}`);
