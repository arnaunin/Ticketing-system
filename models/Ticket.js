import mongoose from "mongoose";
import crypto from "node:crypto";

const ticketSchema = new mongoose.Schema(
  {
    id: { type: String, default: () => crypto.randomUUID(), required: true },
    user: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed"],
      default: "open",
    },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        delete ret._id;
      },
      virtuals: true,
    },
  },
);

ticketSchema.index({ id: 1, user: 1 });

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
