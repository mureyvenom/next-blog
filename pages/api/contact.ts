import { NextApiRequest, NextApiResponse } from "next";
import Message from "./models/Message";
import dbConnect from "./mongoConnect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      if (!email || !email.includes("@") || !name || !message) {
        res.status(422).json({
          message: "Fill all fields properly",
        });
        return;
      }

      await dbConnect();

      const addMessage = new Message({
        name,
        email,
        message,
      });

      await addMessage.save();

      res.status(201).json({
        message: "Message sent",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default handler;
