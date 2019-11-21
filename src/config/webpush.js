import webPush from 'web-push';

webPush.setVapidDetails(
  process.env.CLIENT_EMAIL,
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY,
);

export default async function (subscription, title) {
  try {
    await webPush.sendNotification(subscription, JSON.stringify({ title }));
  } catch (error) {
    console.error(error);
  }
}
