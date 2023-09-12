DROP TABLE book IF EXISTS;

CREATE TABLE book (
  book_id VARCHAR(4),
  title VARCHAR(40),
  author VARCHAR(40),
  publisher VARCHAR(40),
  release_date VARCHAR(8),
  isbn VARCHAR(13),
  PRIMARY KEY(book_id)
);