import { Command, Argument } from "discord-akairo";
import { Message } from "discord.js";

export default class PollCommand extends Command {
  constructor() {
    super("poll", {
      aliases: ["poll"],
    });
  }

  async exec(message: Message) {
    try {
      let title = message.content.slice(process.env.PREFIX.length + this.id.length);
      let reply = await message.channel.send(`:ballot_box: ${title}`);
      await reply.react("👍");
      await reply.react("👎");
    } catch (err) {
      console.log(err);
    }
  }
}
