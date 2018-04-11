# liri-node-app

### What Each Command Should Do

1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

    ![screen shot 2018-04-10 at 21 40 20](https://user-images.githubusercontent.com/34383988/38643142-322e1162-3daa-11e8-9132-55fac0c37db2.png)

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

    ```
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from
     ```
    ![screen shot 2018-04-10 at 21 40 33](https://user-images.githubusercontent.com/34383988/38643273-9dfa1a26-3daa-11e8-833f-e8dcddc233df.png)

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

    ![screen shot 2018-04-10 at 21 41 09](https://user-images.githubusercontent.com/34383988/38643230-7792f9ca-3daa-11e8-9d92-df1843684128.png)

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```
    ![screen shot 2018-04-10 at 21 40 46](https://user-images.githubusercontent.com/34383988/38643309-bfc0e446-3daa-11e8-86b9-984b26d9c1a6.png)

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    ![screen shot 2018-04-10 at 21 40 58](https://user-images.githubusercontent.com/34383988/38643196-5ed75d4a-3daa-11e8-8e47-7a53cc23fcc3.png)

4. `node liri.js do-what-it-says`
   
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
5. `log.txt`
* In addition to logging the data to your terminal/bash window, you will 

    ![screen shot 2018-04-10 at 21 36 49](https://user-images.githubusercontent.com/34383988/38643351-db1254e6-3daa-11e8-84a6-25459db3ab29.png)
