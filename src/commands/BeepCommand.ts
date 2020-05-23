import { Command } from "discord-akairo";
import { Message } from "discord.js";


export default class BeepCommand extends Command {
    constructor() {
        super('beep', {
            aliases: ['beep']
        })
    }

    exec(message: Message): Promise<Message> {
        return message.reply("🤖 Boop")
    }
}