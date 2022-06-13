import { MessageEmbed, WebhookClient } from "discord.js";
import "dotenv/config";
//setup the discord wehbook client
const webhookClient = new WebhookClient({ url: process.env.DISCORD_URL });
//log a message
export async function log(id, username, msg) {
    const embed = new MessageEmbed()
        .setTitle('Someone sent message on the server!')
        .setColor('#37ff77')
        .addField('ID', id)
        .addField('Username', username)
        .addField('Message:', msg);
    webhookClient.send({
        embeds: [embed],
    });
    return 1;
}
//send a ping
export async function send(id, username) {
    const embed = new MessageEmbed()
        .setTitle('Got a ping!')
        .setColor('#0099ff')
        .addField('ID', id)
        .addField('Username', username)
        .setDescription(username + " joined server.");
    webhookClient.send({
        embeds: [embed],
    });
    return 1;
}
