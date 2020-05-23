import { AkairoClient, CommandHandler } from "discord-akairo"

export default class DiscordClient extends AkairoClient {
    commandHandler: CommandHandler;

    constructor() {
        super()

        this.commandHandler = new CommandHandler(this, {
            directory: __dirname + '/commands/',
            prefix: process.env.PREFIX
        })

        this.commandHandler.loadAll()
    }
}