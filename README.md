# Project-3
Repository for Project 3

Team Members: Kat Young, Amie Shank, Bolima Tafah, Arjay Thakoorie, Siobhan Byrne

Our project creates a Flask App Webpage that pulls Spotify data on Taylor Swift to create 2 interactive dashboards, one for her songs and one for her albums.

With Taylor Swift showing up in the news a lot recently because of her Era's tour and possible thing with Travis Kelce, we thought analyzing and creating dashboards on Taylor Swift would be fun to do but also give approachable data for anyone to look at. 

This repo contains: UPDATE

When all files are loaded, our app.py file can be launched locally. The app references and pulls data from a SQLite database used to store our Taylor Swift data. When the app is launched it will first display a landing page showing all the possible routes that can be input into the URL. 
- The /songdata route displays the list of unique songs in the dataset
- The /albumdata route displays the list of unique albums in the dataset
- The /metadata route displays the json data of all entries from the original dataset
- The /songs route takes you to an interactive dashboard with a dropdown menu for Taylor's songs. In the dropdown, you can select any of Taylor's songs and all charts will update accordingly. The small table will display the song's album, track number and release date. A Polar Radial chart will update with various characteristics about the song and Bullet Guage chart will display the song's popularity compared to the average popularity of all her songs.
- The /albums route takes you to an interactive dashboard with a dropdown menu for Taylor's albums. In the dropdown, you can select any of Taylor's albums and all charts will update accordingly. The small table will display the release date and number of tracks on the album. A Bubble bhart will show comparative data about each song on the album and Bullet Guage chart will  will display the album's popularity compared to the average popularity of all her songs.
