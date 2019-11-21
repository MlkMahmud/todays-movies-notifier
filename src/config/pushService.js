import pushService from 'web-push';

pushService.setVapidDetails(
  process.env.CLIENT_EMAIL,
  process.env.PUBLIC_VAPID_KEY,
  process.env.PRIVATE_VAPID_KEY,
);

export default pushService;
