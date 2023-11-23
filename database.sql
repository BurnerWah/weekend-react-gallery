CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO
  "gallery" ("url", "title", "description")
VALUES
  (
    'images/goat_small.jpg',
    'Goat!',
    'Photo of a goat taken at Glacier National Park.'
  ),
  (
    'images/d-ma-cgI7m5qBp2M-unsplash.jpg',
    'Hyena',
    'Photo of a hyena cub'
  ),
  (
    'images/dusan-veverkolog-rtypYCit-hw-unsplash.jpg',
    'Lynx',
    'Photo of a lynx'
  ),
  (
    'images/jean-wimmerlin-YxDENE4HgMM-unsplash.jpg',
    'Cheetah',
    'Photo of a cheetah'
  ),
  (
    'images/jeremy-hynes-mwIqqM1otnk-unsplash.jpg',
    'Foxes',
    'Photo of a fox cub and its mother'
  ),
  (
    'images/jonatan-pie-xgTMSz6kegE-unsplash.jpg',
    'Arctic Fox',
    'Photo of an arctic fox'
  ),
  (
    'images/joshua-j-cotten-e8t9o3eJ36o-unsplash.jpg',
    'Red Panda',
    'Photo of a red panda in a tree'
  ),
  (
    'images/robert-linder-5YNdnOjlPyE-unsplash.jpg',
    'Opossum',
    'Photo of an opossum walking along a fence'
  ),
  (
    'images/satyabratasm-u_kMWN-BWyU-unsplash.jpg',
    'Rabbit',
    'Photo of a rabbit'
  );
