-- BEGIN;

-- INSERT INTO users (name, email, password,picture) VALUES 
--   ('john', 'john@gmail.com', 'john123','https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg'),
--   ('jane', 'jane@gmail.com', 'jane123','https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg'),
--   ('joe', 'joe@gmail.com', 'joe123','https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg');

-- INSERT INTO post (userId, post, postTime, postImg,votes) VALUES 
--   (1, 'post blablabla1', '13-03-2022', 'img_url',1),
--  (2, 'post blablabl2a2', '13-03-2022', 'img_url',5),
-- (2, 'post blablabla2', '13-03-2022', 'img_url',7),
-- (3, 'post blablabla3', '13-03-2022', 'img_url',11),
-- (3, 'post blablabla3', '13-03-2022', 'img_url',0),
-- (1, 'post blablabla4', '13-03-2022', 'img_url',1);


-- INSERT INTO comments (userId, postId, comment,commentTime,votes) VALUES 
--   (1, 1, 'blablabla','13-03-2022',1),
--   (1, 2, 'blablabla','13-03-2022',5),
--   (1, 3, 'blablabla','13-03-2022',5),
--   (2, 2, 'blablabla','13-03-2022',5),
--   (2, 3, 'blablabla','13-03-2022',5),
--   (2, 1, 'blablabla','13-03-2022',5),
--   (3, 2, 'blablabla','13-03-2022',5),
--   (3, 1, 'blablabla','13-03-2022',5),
--   (3, 2, 'blablabla','13-03-2022',5);

-- COMMIT;