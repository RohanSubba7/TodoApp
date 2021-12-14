const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task_name: {
      type: String,
      required: true,
      trim: true,
    },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);
//CreatedAt
//UpdatedAt

module.exports = mongoose.model("Task", taskSchema);
