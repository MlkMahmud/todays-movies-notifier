import admin from '../config/admin';

const movieCollection = admin.firestore().collection('movies');
const reminderCollection = admin.firestore().collection('reminders');

export const fetchReminders = async () => {
  try {
    const reminders = [];
    const { docs } = await reminderCollection.get();
    docs.forEach((doc) => reminders.push(doc.data()));
    return reminders;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMovies = async () => {
  try {
    const movies = new Map();
    const { docs } = await movieCollection.where('now_showing', '==', true).get();
    docs.forEach((doc) => {
      const { showtimes, title } = doc.data();
      if (showtimes.length) movies.set(title, true);
    });
    return movies;
  } catch (error) {
    console.error(error);
    return new Map();
  }
};

export const deleteReminder = async (title) => {
  try {
    await reminderCollection.doc(title).delete();
  } catch (error) {
    console.error(error);
  }
}; 
