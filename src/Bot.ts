import * as dotenv from "dotenv";
import { Client, Message } from "discord.js";

dotenv.config();

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg: Message) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
