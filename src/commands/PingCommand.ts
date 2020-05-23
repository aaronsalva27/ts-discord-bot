import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping"],
    });
  }

  exec(message: Message): Promise<Message> {
    let ping = Date.now() - message.createdTimestamp;
    return message.reply("🏓 Your ping is `" + `${ping}` + " ms`");
  }
}
