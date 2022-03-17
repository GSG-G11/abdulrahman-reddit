BEGIN;

DROP TABLE IF EXISTS users, post, comment CASCADE;

CREATE TABLE users (
  id SERIAL  PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) unique,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255)
);

CREATE TABLE post (
  id SERIAL  PRIMARY KEY,
  post TEXT NOT NULL,
  postTime DATE,
  postImg  TEXT,
  votes INT,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);
CREATE TABLE votes_post (
  id SERIAL  PRIMARY KEY,
  votes BIT,
  vote_up INT,
  vote_down INT,
  userId INT NOT NULL,
  postId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (postId) REFERENCES post(id)
);

COMMIT;