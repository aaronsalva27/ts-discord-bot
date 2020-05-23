import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class KickCommand extends Command {
  constructor() {
    super("kick", {
      aliases: ["kick"],
    });
  }

  async exec(message: Message) {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    if (member) {
      await member.kick();
      return message.channel.send("Por espabilado");
    }
  }
}
