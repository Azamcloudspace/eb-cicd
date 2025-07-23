
const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head><title>Elastic Beanstalk App</title></head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 40px;">
          <h1>🚀 Welcome to Your Elastic Beanstalk App!</h1>
          <p>This is a canary-deployed Node.js app running on AWS.</p>
          <p>You're served by: <strong>${os.hostname()}</strong></p>
          <p>Visit <a href="/api">/api</a> to test a JSON API response.</p>
        </body>
      </html>
    `);
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: '🎉 Canary deployment successful!', served_by: os.hostname() }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
