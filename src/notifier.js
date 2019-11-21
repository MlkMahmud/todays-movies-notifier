import sendNotification from './config/webpush';
import { fetchMovies, fetchReminders, deleteReminder } from './helpers';

async function notifier() {
  const reminders = await fetchReminders();
  const movies = await fetchMovies();
  const notifications = [];
  reminders.forEach(({ title, subscriptions }) => {
    if (movies.has(title)) {
      subscriptions.forEach((subscription) => {
        notifications.push(sendNotification(subscription, title));
      });
    }
    deleteReminder(title);
  });
  await Promise.all(notifications);
}

console.time('Notifier');
notifier()
  .then(() => console.log('Success'))
  .catch((err) => console.error(err))
  .finally(() => console.timeEnd('Notifier'));
