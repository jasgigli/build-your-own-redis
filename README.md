[![Codecrafters Redis Challenge](https://backend.codecrafters.io/progress/redis/3accaa81-1de8-4edd-aec7-6d22ab5a9a50)](https://app.codecrafters.io/users/codecrafters-bot?r=2qF)

# Build Your Own Redis (Node.js)

A modern, educational, and community-friendly Redis clone built in JavaScript for the [Codecrafters Redis Challenge](https://codecrafters.io/challenges/redis). This project demonstrates how to implement a TCP server that speaks the Redis protocol, supporting commands like `PING`, `SET`, and `GET`.

---

## 🚀 Features
- **Educational:** Learn about TCP servers, event loops, and the Redis protocol.
- **Extensible:** Easily add new Redis commands and features.
- **Tested:** Modern test suite using [Jest](https://jestjs.io/).
- **Documented:** Clear documentation and contribution guidelines.
- **Community-Ready:** Welcoming to contributors of all experience levels.

---

## 📦 Quick Start

1. **Install Node.js (v21 or higher):**
   ```sh
   node --version
   # Download: https://nodejs.org/en/download/current
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the server:**
   ```sh
   npm start
   # For auto-reload during development:
   npm run dev
   ```
4. **Run tests:**
   ```sh
   npm test
   ```

---

## 🛠️ Usage
- The server listens on **port 6379** by default (like real Redis).
- Connect using any Redis client or `netcat`:
  ```sh
  nc localhost 6379
  PING
  # Should respond with: +PONG
  ```
- Edit `app/main.js` to add or modify command handling.

---

## 🗂️ Project Structure

| Path                | Description                                 |
|---------------------|---------------------------------------------|
| `app/`              | Main application code (entry: `main.js`)    |
| `test/`             | Jest test cases and utilities               |
| `docs/`             | Architecture, observability, contributors   |
| `README.md`         | Project overview and setup                  |
| `CONTRIBUTING.md`   | How to contribute                           |
| `CODE_OF_CONDUCT.md`| Community standards                         |
| `LICENSE`           | Open source license (MIT)                   |

---

## 🧪 Testing
- All features and bug fixes should include tests in `test/`.
- Run tests with:
  ```sh
  npm test
  ```
- See [`test/README.md`](test/README.md) for details.

---

## 📚 Documentation
- See [`docs/`](docs/) for:
  - [Architecture](docs/architecture.md)
  - [Observability](docs/observability.md)
  - [Contributors](docs/CONTRIBUTORS.md)

---

## 🤝 Contributing
We welcome all contributions! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines on:
- Filing issues
- Submitting pull requests
- Code style and testing

All participants are expected to follow our [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

> **Inspired by the Codecrafters Redis Challenge.**
