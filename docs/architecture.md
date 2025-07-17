# System Architecture

This document provides a high-level overview of the architecture for the Build Your Own Redis project.

## Overview

- The server is implemented in Node.js using the `net` module.
- The main entry point is `app/main.js`.
- The server listens for TCP connections on port 6379 and processes basic Redis commands.

## Main Components

- **TCP Server**: Handles incoming client connections.
- **Command Parser**: (To be implemented) Parses incoming data into Redis commands.
- **Command Handlers**: (To be implemented) Implements logic for commands like PING, SET, GET, etc.
- **Data Store**: (To be implemented) In-memory storage for key-value pairs.

## Diagram

```
[Client] <--> [TCP Server (main.js)] <--> [Command Parser] <--> [Command Handlers] <--> [Data Store]
```

## Extensibility

- New commands can be added by extending the command handler logic in `main.js`.
- Observability and logging can be added for better monitoring.
