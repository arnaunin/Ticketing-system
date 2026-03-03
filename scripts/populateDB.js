import mongoose from "mongoose";
import crypto from "node:crypto";
import User from "../models/User.js";
import Ticket from "../models/Ticket.js";
import { create } from "node:domain";

// Connect to the local database
mongoose
  .connect("mongodb://localhost:27017/ticketing")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Failed to connect to MongoDB", err));

const users = [
  { name: "user", role: "user", email: "user@email.com", password: "12345678" },
  {
    name: "admin",
    role: "admin",
    email: "admin@email.com",
    password: "12345678",
  },
];

const status = ["open", "in-progress", "closed"];
const priorities = ["low", "medium", "high"];

async function deleteCollections() {
  await User.deleteMany({});
  console.log("🗑️  Deleted all users");
  await Ticket.deleteMany({});
  console.log("🗑️  Deleted all tickets");
}

async function createUsers() {
  for (const userData of users) {
    const user = new User(userData);
    await user.save();
  }
}

async function createTickets() {
  const users = await User.find();

  for (let i = 0; i < 15; i++) {
    const ticket = new Ticket({
      title: `Ticket #${i + 1}`,
      description: `Description for ticket #${i + 1}`,
      status: status[Math.floor(Math.random() * status.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      user: users[Math.floor(Math.random() * users.length)].id,
    });

    await ticket.save();
  }
}

async function populateDB() {
  await deleteCollections();
  await createUsers();
  await createTickets();
  console.log("🚀 Database populated successfully");
  mongoose.disconnect();
}

populateDB();