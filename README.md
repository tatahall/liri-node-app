# liribot
* Purpose:
The purpose of the app is to provide a a way for users to query the system to obtain information regarding concerts, movies or music.  In addition to providing information regarding a song, the spotify option will also provide a song preview URL, which can was utilized to hear a sample of the return.

* Organization:
The code utilizes nodejs as the primary code.

* There are two primary js documents:
    * liri.js -- this is the primary js file, where most of the code can be found. 
    * Item 2 Keys.js -- the spotify API had a separate key and client secret code.  The Keys.js code is linked to the .env document to pull this information and allow it to be exported for use in the primary js file.
    * In addition to the two js files, there are also two text files: one is utilized for storing a default request option and another is being used to write a log of all searches.

App Instructions:
* 1. Open terminal/bash.
* 2. Enter the following based on whether you want to search for a song, movie or concert:
    node liri.js concert-this ""
    node liri.js movie-this ""
    node liri.js spotify-this-song ""

    *Please note that the quotation marks are being used as placeholders and should be replaced with either the concert/artist, movie title or song/artist being searched for with each option.  For example, if I wanted to search for the matrix, I would enter: node liri.js movie-this the matrix.

Screenprints:
<p><img src="/images/image 1.png"/></p>
<p><img src="/images/image 2.png"/></p>
<p><img src="/images/image 3.png"/></p>
<p><img src="/images/image 4.png"/></p>
<p><img src="/images/image 5.png"/></p>
<p><img src="/images/image 6.png"/></p>
Github repo link:
https://github.com/tatahall/liri-node-app


Technology Used:
* Spotify API
* Nodejs
* Axios
* Terminal/Bash

Role:
* I completed all the coding for this project.
