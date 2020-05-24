import { Command } from "discord-akairo";
import { Message } from "discord.js";
import RoleService from "../roles/RoleService";
import { RoleTitle, factoryRoleFromTitle, Role } from "../roles/Role";
import { GuildMember } from "discord.js";

export default class KickCommand extends Command {
  private roleService: RoleService;

  constructor() {
    super("kick", {
      aliases: ["kick"],
      args: [
        {
          id: "mention",
          type: "member",
        },
      ],
    });

    this.roleService = new RoleService();
  }

  exec(message: Message, args: any): Promise<Message> {
    const mention: GuildMember = args.mention;

    if (!this.ensureAuthorHasRole(message, [RoleTitle.GOD, RoleTitle.TIER1])) {
      return message.channel.send(
        "🛑 You don't have permissions to do this, only Tier1 is available to do this."
      );
    }

    if (!this.ensureAuthorIsMorePowerfulThanMention(message, mention)) {
      return message.channel.send("🛑 Your mention is more powerful than you.");
    }

    if (mention) {
      return message.channel.send("🤒 Temporaly this commands is disabled.");
    }
  }

  private ensureAuthorHasRole(
    message: Message,
    guardingRoles: string[]
  ): boolean {
    const authorRole = this.getRoleFromMember(
      message.guild.member(message.author.id)
    );

    return guardingRoles.includes(authorRole.title);
  }

  private ensureAuthorIsMorePowerfulThanMention(
    message: Message,
    mention: GuildMember
  ): boolean {
    const authorRoles = this.getRoleFromMember(
      message.guild.member(message.author.id)
    );
    const mentionRoles = this.getRoleFromMember(mention);

    return authorRoles.priority < mentionRoles.priority;
  }

  private getRoleFromMember(member: GuildMember): Role {
    return (
      member.roles.cache
        .filter((r) => r.name in RoleTitle)
        .map((r) => factoryRoleFromTitle(r.name))
        .pop() ?? factoryRoleFromTitle(RoleTitle.NONE)
    );
  }
}
