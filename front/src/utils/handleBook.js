import {v4 as uuid} from 'uuid';

function createBookWithID(book) {
  return {
    ...book,
    isFavorite: false,
    id: uuid()
  };
};

export {createBookWithID}
