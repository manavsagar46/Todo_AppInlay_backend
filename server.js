import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./Routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// db connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected ");
//   } catch (err) {
//     console.error("MongoDB connection failed:", err.message);
//     process.exit(1); 
//   }
// };

let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    throw new Error(err);
  }
};

connectDB();

app.use("/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Todo Backend !!");
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;