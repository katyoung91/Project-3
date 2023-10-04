DROP TABLE taylor;

CREATE TABLE "taylor" (
	"index" int PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"album" varchar NOT NULL,
	"release_date" date NOT NULL,
	"track_number" int NOT NULL,
	"id" varchar NOT NULL,
	"uri" varchar NOT NULL,
	"acousticness" float NOT NULL,
	"danceability" float NOT NULL,
	"energy" float NOT NULL,
	"instrumentalness" float NOT NULL,
	"liveness" float NOT NULL,
	"loudness" float NOT NULL,
	"speechiness" float NOT NULL,
	"tempo" float NOT NULL,
	"valence" float NOT NULL,
	"popularity" int NOT NULL,
	"duration_ms" int NOT NULL
);

SELECT * FROM taylor;