import http from 'http';

const port = process.env.PORT || 4000;

http.createServer((_, response) => {
  response.writeHead(301, {
    location: 'https://github.com/MlkMahmud/todays-movies-notifier',
  });
  response.end();
}).listen(port, () => console.log('Running!!'));
