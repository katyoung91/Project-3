from flask import Flask, jsonify, render_template
import sqlalchemy as sql
import json


app = Flask(__name__)

# make database connection
engine=sql.create_engine('sqlite:///static/taylor_data.sqlite')

# create landing page
@app.route('/')
def home():
    return render_template('index.html')

# get all song data
@app.route('/songdata')
def get_songs(): 
    song_results=engine.execute('select * from songs').fetchall()
    tswift_songs = []
    for song in song_results: 
        song = dict(song)
        tswift_songs.append(song)
    return jsonify(tswift_songs)

# get all metadata
@app.route('/metadata')
def get_meta(): 
    metadata_results=engine.execute('select * from metadata').fetchall()
    tswift_metadata = []
    for metadata in metadata_results:
        metadata = dict(metadata)
        tswift_metadata.append(metadata)
    return jsonify(tswift_metadata)

# get all album data
@app.route('/albumdata')
def get_albums():
    album_results=engine.execute('select * from albums').fetchall()
    tswift_albums = []
    for album in album_results: 
        album = dict(album)
        tswift_albums.append(album)
    return jsonify(tswift_albums)
   
# create songs dashboard
@app.route('/songs')
def songs():
    return render_template('songs.html')

# create albums dashboard
@app.route('/albums')
def albums():
    return render_template('albums.html')

# run app
if __name__ == '__main__':
    app.run(debug=True)