import mongoose from "mongoose";
export const connectMongo = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("Database Connected");
};
