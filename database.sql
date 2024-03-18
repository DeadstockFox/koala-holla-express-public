CREATE TABLE "koalas" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(250) NOT NULL,
    "favorite_color" VARCHAR(100) NOT NULL,
    "age" INTEGER,
    "ready_to_transfer" BOOLEAN DEFAULT FALSE
    "notes" VARCHAR(250)
);

INSERT INTO "koalas"
    ("name", "favorite_color", "age", "ready_to_transfer", "notes")
VALUES
    ('Scotty', 'Red', 4, True, 'Born in Guatemala'),
    ('Jean', 'Green', 5, True, 'Allergic to lots of lava'),
    ('Ororo', 'Yellow', 7, False, 'Loves listening to Paula (Abdul)'),
    ('K''leaf', 'Purple', 15, False, 'Never Refuses a treat'),
    ('Charlie', 'Orange', 9, True, 'Favorite band is Nirvana'),
    ('Betsy', 'Blue', 4, True, 'Has a pet iguana');

