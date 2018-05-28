Fun stuff
===
> How to find usernames and match them to players

## Step 1: Finding the data
Visit the (original) [`o5i8i2`](https://o5i8i2.herokuapp.com) website. Open
the developer console and go to the network tab. Make sure you are viewing all network
activity (or WebSocket (WS)).

You should notice a connection with a name starting ".ws?v=...". Click on it and navigate to the frames window. Look for the longest transcation (It's significantly longer than the others). Click on it and voila! You can view all the relevant information about players.

<sub>_It seems that the front end requests the entire user database in order to verify that a 
username and email are not already taken. Later on, agent codes and group allocations were also made public._ </sub>

## Step 2: Finding the database url
While it's true that we have access to the database (at least some of it, anyway), we
might want something a bit more convient to work with. Since the database is hosted by firebase, we want to find the database url.

If you return to the network panel(or sources panel) you'll find a file called "app.js".
This file contains all the main logic for the website. I used this to get around many of the puzzles when I didn't have the patience to solve a puzzle. This was possible because the `angular` router logic was also included here and allowed me to simply look for the url suffix corresponding to the solution. What we're actually looking for is right at the bottom of the script : 

```javascript
var config = {
	apiKey: "AIzaSyCwavB292uRNfpXFqdqN6NYucebaloPESQ",
	authDomain: "slack-67fe0.firebaseapp.com",
	databaseURL: "https://slack-67fe0.firebaseio.com",
	projectId: "slack-67fe0",
	storageBucket: "slack-67fe0.appspot.com",
	messagingSenderId: "70094143053"
};
```
I wasn't able to determine why the url included "slack", but it didn't seem too important after all. Furthermore, I couldn't find any exploits using the other values, the apiKey in particular. Now that we have the database url, we can write some scripts to extract more info.

## Step 3: Extracting student emails
We see that each user in the database has an associated `emailHash`. These hashes are produced by md5 (I guessed because of the format and the presence of `angular-md5.js` and verified this using my own email). This means we can run through all possible student numbers and check if the corresponding hash is present in the database, like this:

```javascript
for(let studentNumber = 10000000;studentNumber<24000000;studentNumber++){
        let email = `${studentNumber}@sun.ac.za`
        const hash = crypto.createHash('md5').update(email).digest('hex')
        const index = hashArr.indexOf(hash)
        if(index != -1){
                console.log(`${hashArr[index]} : ${email}`)
        }
}
```
[from [email.js](./email.js)]

This didn't return as many numbers as I'd hoped, but it was a start. Using MS office search I was able to match email addresses to names.

[TBC]
