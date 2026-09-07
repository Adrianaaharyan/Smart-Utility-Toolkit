## Smart-Utility-Toolkit
# 📌 Project Overview

The **Smart Utility Toolkit** is a hands-on backend project built using **native Node.js core modules**. It demonstrates command-line argument processing, modular programming, web server creation, file system CRUD operations, and secure randomness generation—**without using any external npm packages or third-party frameworks**.


# 🚀 Features & Modules

## 1. 🧮 CLI-Based Calculator (`calculator.js`)
Performs basic arithmetic operations directly from the terminal using `process.argv`.
- **Supported Operations:** Addition (`add`), Subtraction (`subtract`), Multiplication (`multiply`), Division (`divide`).
- **Features:** Graceful error handling for missing arguments, invalid operations, and division by zero.

## 2. 🧩 Custom Modules & Reusability (`modules/` & `app.js`)
Demonstrates CommonJS modularity (`module.exports` and `require`).
- **`modules/isEven.js`**: Exportable helper function to check whether a given number is even.
- **`modules/logger.js`**: Logging utility that prepends ISO timestamps to messages.
- **`app.js`**: Entry point demonstrating cross-file module imports and reusability.

## 3. 🌐 Native HTTP Web Server (`server.js`)
A lightweight web server built using the native `http` module.
- **Routes Handled:**
  - `GET /` → `Welcome to Node Server`
  - `GET /about` → `About Page`
  - `GET /contact` → `Contact Page`
  - *Other Routes* → `404 Not Found`

## 4. 📁 File Manager (`fileManager.js`)
Demonstrates asynchronous file operations using Node's `fs` module:
- **`fs.writeFile()`**: Creates new text files.
- **`fs.readFile()`**: Reads file content.
- **`fs.appendFile()`**: Updates and appends content.
- **`fs.unlink()`**: Deletes files securely with error handling.

## 5. 🎲 Random Dice Generator (`dice.js`)
Uses the cryptographically secure `crypto` module (`crypto.randomInt`) to simulate unbiased dice rolls (1–6) and logs history to a text file.


## 📁 Directory Structure

```text
smart-utility-toolkit/
│
├── modules/
│   ├── isEven.js          # Custom module checking even/odd numbers
│   └── logger.js          # Custom logger with timestamp output
│
├── calculator.js          # CLI calculator receiving arguments via process.argv
├── app.js                 # Script demonstrating custom module import/usage
├── server.js              # Native HTTP web server with basic routing
├── fileManager.js         # File CRUD operations using fs module
├── dice.js                # Cryptographically secure dice roll generator
└── README.md              # Project documentation
