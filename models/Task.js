import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    priority: { 
      type: String, 
      enum: ["High", "Medium", "Low"],
      default: "Low" 
    },
    status: {
      type: String,
      enum: ["Incomplete", "Complete"],
      default : "Incomplete"
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
