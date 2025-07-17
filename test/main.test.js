const net = require('net');
const path = require('path');
const { spawn } = require('child_process');

// Helper to connect and send a command to the server
function sendCommand(command, callback) {
  const client = net.createConnection({ port: 6379 }, () => {
    client.write(command);
  });
  let data = '';
  client.on('data', (chunk) => {
    data += chunk.toString();
    client.end();
  });
  client.on('end', () => {
    callback(data);
  });
}

let serverProcess;

describe('Redis Server', () => {
  beforeAll((done) => {
    // Start the server as a child process
    serverProcess = spawn('node', [path.join(__dirname, '../app/main.js')], {
      stdio: 'ignore',
    });
    // Wait a moment for the server to start
    setTimeout(done, 500);
  });

  afterAll(() => {
    if (serverProcess) {
      serverProcess.kill();
    }
  });

  test('responds to PING with +PONG', (done) => {
    sendCommand('PING\r\n', (response) => {
      expect(response).toBe('+PONG\r\n');
      done();
    });
  });
});
