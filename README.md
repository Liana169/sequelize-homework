# Library Management System (Sequelize Starter)

This project is a **foundational backend architecture** built with **Node.js** and **Sequelize ORM**. It demonstrates how to manage a relational database for a library system.

## 🛠 Features
- **Relational Schema:** Designed complex associations like One-to-Many and Many-to-Many.
- **Junction Table:** Managed the `Borrowings` table to link Members and Books.
- **Custom Methods:** Implemented `getFullName()` and `isActive()` instance methods.
- **Automation:** Included a `migrate.js` script for automated schema synchronization and data seeding.

## Installation
1. Clone the repo: `git clone https://github.com/Liana169/sequelize-homework.git`
2. Run `npm install`
3. Execute `node migrate.js` to build the database.
