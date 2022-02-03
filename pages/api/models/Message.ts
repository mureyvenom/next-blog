import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Message || model("Message", messageSchema);
