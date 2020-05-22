import * as dotenv from "dotenv";
import { Client, Message } from "discord.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message: Message) => {
  const prefix = process.env.PREFIX;

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    let ping = Date.now() - message.createdTimestamp;
    message.reply("🏓 Your ping is `" + `${ping}` + " ms`");
  }

  if (command === "beep") {
    message.reply("🤖 Boop");
  }

  if (command === "poll") {
    try {
      let title = message.content.slice(prefix.length + command.length);
      let reply = await message.channel.send(`:ballot_box: ${title}`);
      await reply.react("👍");
      await reply.react("👎");
    } catch (err) {
      console.log(err);
    }
  }
});

client.login(process.env.TOKEN);
