/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "zhongli",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/M25TmVGyi0QAAAPo/zhongling.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: ` *𝗭𝗛𝗢𝗡𝗚𝗟𝗜* \n\n *Description: A Mysterious Expert Contracted By The Wangsheng Funeral Parlor.Extremely Knowledgeable In All Things.* \n`,
			}
		);
	};
}
