# Documentation for Build Your Own Redis

Welcome to the documentation! This section provides deeper technical details, design decisions, and guidance for contributors.

## Architecture Overview

- The main server is implemented in `app/main.js` using Node.js and the `net` module.
- The server listens on port 6379 and handles basic Redis commands.

## Design Decisions

- Simplicity and clarity are prioritized for educational purposes.
- The codebase is structured to be easily extensible for new Redis commands.

## Extending the Project

- To add new commands, edit `app/main.js` and follow the existing structure.
- Add tests for new commands in the `test/` directory.
- Update this documentation as you extend the project.

## Additional Resources

- [Redis Protocol Specification](https://redis.io/docs/reference/protocol-spec/)
- [Node.js net module documentation](https://nodejs.org/api/net.html)
