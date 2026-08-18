---
layout: project
title: "Redis CLI Clone in C"
slug: redis-cli-clone
category: "Systems & Networking"
date: 2025-01-10
featured: true
order: 1
status: "Completed"
github: "https://github.com/vishwas2628/redis-cli-clone"
demo: ""
tech_stack:
  - "C"
  - "TCP Sockets"
  - "RESP Protocol"
  - "POSIX"
  - "Makefile"
summary: "A lightweight custom Redis command-line interface written from scratch in C implementing the Redis Serialization Protocol (RESP) over raw TCP sockets."
---

## 🎯 Overview

The **Redis CLI Clone** is a lightweight, low-level command-line tool implemented in **pure C** without relying on third-party Redis client libraries. It connects directly to a live Redis server instance over standard TCP sockets (port 6379) and implements the **Redis Serialization Protocol (RESP)** from scratch.

This project was built to master low-level systems programming, socket handling, dynamic memory buffers, and custom binary protocol parsing.

---

## 🏗️ Architectural Design

```
+-------------------------------------------------------------+
|                      User Input REPL                        |
|             (e.g., SET user:100 "Vishwas", GET user:100)    |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|               RESP Protocol Encoder / Parser                |
|       * Converts commands to RESP format: *3\r\n$3\r\nSET... |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     POSIX TCP Socket                        |
|            connect() -> send() -> recv() -> close()         |
+------------------------------+------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                     Redis Server Instance                   |
+-------------------------------------------------------------+
```

---

## 🚀 Key Features

* **Direct Socket Communication**: Opens and manages non-blocking/blocking TCP socket connections via standard POSIX socket library.
* **RESP Serialization & Deserialization**:
  * Simple Strings (`+OK\r\n`)
  * Errors (`-Error message\r\n`)
  * Integers (`:1000\r\n`)
  * Bulk Strings (`$6\r\nfoobar\r\n`)
  * Arrays (`*2\r\n$3\r\nfoo\r\n$3\r\nbar\r\n`)
* **Interactive REPL**: A clean terminal loop supporting command history, argument tokenization, and dynamic output formatting.
* **Zero External Dependencies**: Pure C with standard libc headers and a clean Makefile build script.

---

## 💡 Engineering Challenges & Solutions

### 1. Handling Fragmented Socket Slices
**Problem:** TCP does not guarantee that entire RESP responses arrive in a single packet. Large bulk strings or nested arrays can be fragmented across multiple `recv()` syscalls.  
**Solution:** Built a dynamic growable ring-buffer parser with state machine tracking to handle partial packets cleanly until full delimiter `\r\n` tokens are received.

### 2. Quoted Argument Tokenization
**Problem:** Commands containing quoted arguments with whitespace (e.g. `SET greeting "Hello World"`) break simple `strtok` parsers.  
**Solution:** Implemented a custom lexer capable of tracking quote boundaries, escape characters, and variable argument counts.

---

## 🛠️ How to Build & Run

```bash
# Clone the repository
git clone https://github.com/vishwas2628/redis-cli-clone.git
cd redis-cli-clone

# Compile with GCC
make

# Run the CLI against a running Redis instance
./redis-cli -h 127.0.0.1 -p 6379

# Example commands inside REPL:
127.0.0.1:6379> PING
PONG
127.0.0.1:6379> SET developer "Vishwas Chourasiya"
OK
127.0.0.1:6379> GET developer
"Vishwas Chourasiya"
```
