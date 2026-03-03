# Ticketing System API

A lightweight RESTful backend built with **Node.js** and **Express** for managing tickets and users. Designed for simplicity, this project serves as a foundation for learning and prototyping common API features.

## 🔍 Key Features

- **User authentication** (signup/login)
- **Admin endpoints** for ticket management
- **CRUD operations** on tickets
- **Filtering & pagination** support
- **Middleware** for logging, error handling, rate limiting, and authorization
- **Request validations** using Joi
- **Automated tests** with Jest
- **Database population script** for quick setup
- Sample `.rest` requests in `rest-request/` for easy API testing

## 📁 Project Structure

- `models/` – Mongoose schemas for **User** and **Ticket**
- `routes/` – Express routers
- `middlewares/` – Reusable middleware (auth, error, pagination, etc.)
- `helpers/` – Utility functions (logging, rate limiting)
- `validations/` – Joi validation schemas
- `scripts/` – DB setup script
- `test/` – Unit and integration tests
- `.rest` files for API usage examples

## 🚀 Getting Started

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (e.g., MongoDB URI, JWT secret)
4. Run tests:
   ```bash
   npm test
   ```
5. Start server:
   ```bash
   npm start
   ```

> **Note:** Ensure MongoDB is running and environment variables are configured before starting the server.

---

**Perfect for** developers learning Express or building a quick ticketing prototype.
