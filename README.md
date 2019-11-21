# todays-movies-notifier
An automated push notification service for [Today's Movies](https://github.com/MlkMahmud/todays-movies) application. 

## How It Works
At exactly 10:30AM everyday, this service;
- Fetches a list of movie reminders from a firestore database.
- Fetches a map object of all movies currenlty showing.
- Loops through the reminders, checking if the movie title for each reminder exist in the 'currently showing' map oject.
- If it exists, a push notification is sent to all subscribed users, and the reminder object is deleted.
- Else the reminder object remains untouched.

## Dependencies
- [Firebase](https://firebase.google.com/)
- [web-push](https://www.npmjs.com/package/web-push)
