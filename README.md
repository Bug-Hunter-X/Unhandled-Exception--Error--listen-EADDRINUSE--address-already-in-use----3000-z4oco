# Node.js Server Error: Accessing Address Before Listening

This repository demonstrates a common error in Node.js when attempting to access the server's address (e.g., port) before it has fully started listening for connections.

## The Problem

The provided `bug.js` file contains a simple HTTP server.  However, it attempts to access `server.address().port` immediately after creating the server, before it has started listening. This leads to an error because the address information isn't available yet.

## The Solution

The `bugSolution.js` file shows the correct way to handle this scenario. The code waits until the server emits the 'listening' event before accessing the address information.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.  Observe the error.
3. Run `node bugSolution.js`.  Observe the correct behavior.