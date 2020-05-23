import dotenv from "dotenv";
import DiscordClient from "./Client";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const client = new DiscordClient();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
