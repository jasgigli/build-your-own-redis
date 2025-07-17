[![progress-banner](https://backend.codecrafters.io/progress/redis/3accaa81-1de8-4edd-aec7-6d22ab5a9a50)](https://app.codecrafters.io/users/codecrafters-bot?r=2qF)

This is a starting point for JavaScript solutions to the
["Build Your Own Redis" Challenge](https://codecrafters.io/challenges/redis).

In this challenge, you'll build a toy Redis clone that's capable of handling
basic commands like `PING`, `SET` and `GET`. Along the way we'll learn about
event loops, the Redis protocol and more.

**Note**: If you're viewing this repo on GitHub, head over to
[JasGigli](https://github.com/jasgigli/build-your-own-redis) to try the challenge.

# Passing the first stage

The entry point for your Redis implementation is in `app/main.js`. Study and
uncomment the relevant code, and push your changes to pass the first stage:

```sh
git commit -am "pass 1st stage" # any msg
git push origin master
```

That's all!

# Stage 2 & beyond

Note: This section is for stages 2 and beyond.

1. Ensure you have `node (21)` installed locally
1. Run `./your_program.sh` to run your Redis server, which is implemented in
   `app/main.js`.
1. Commit your changes and run `git push origin master` to submit your solution
   to CodeCrafters. Test output will be streamed to your terminal.

# Development Environment Setup

To get started developing your own Redis clone in JavaScript, follow these steps:

1. **Install Node.js 21**
   - Make sure you have Node.js version 21 or higher installed. You can check your version with:
     ```sh
     node --version
     ```
   - [Download Node.js 21 here](https://nodejs.org/en/download/current) if you need to upgrade.

2. **Install dependencies**
   - Run the following command to install development dependencies:
     ```sh
     npm install
     ```

3. **Run your Redis server**
   - To start the server:
     ```sh
     npm start
     ```
   - For automatic restarts on file changes (recommended for development):
     ```sh
     npm run dev
     ```

4. **Edit your implementation**
   - The main entry point is `app/main.js`. Edit this file to implement Redis commands and logic.

5. **Testing and Submission**
   - Commit your changes and push to your repository to test your solution on Codecrafters:
     ```sh
     git commit -am "your message"
     git push origin master
     ```

# Notes
- The server listens on port 6379 by default, just like Redis.
- Use the provided scripts for a smooth development workflow.
- If you encounter issues, ensure your Node.js version matches the required version in `package.json`.

# Project Structure

This repository is organized as follows:

- `app/` - Main application code (entry point: `main.js`)
- `test/` - Test cases and test utilities (to be created)
- `docs/` - Additional documentation (to be created)
- `README.md` - Project overview and setup instructions
- `CONTRIBUTING.md` - Guidelines for contributing to this project
- `CODE_OF_CONDUCT.md` - Code of conduct for contributors
- `LICENSE` - Open source license

# Contributing

We welcome contributions from the community! Please read `CONTRIBUTING.md` for guidelines on how to propose changes, submit pull requests, and report issues.

# Code of Conduct

This project follows a Code of Conduct to foster an open and welcoming environment. Please read `CODE_OF_CONDUCT.md` before participating.

# Documentation

For more detailed documentation, see the `docs/` directory.

# Testing

All new features and bug fixes should include appropriate tests in the `test/` directory. See `CONTRIBUTING.md` for details on running and writing tests.
