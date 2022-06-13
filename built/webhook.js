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
//#0099
//#ED4245
export async function send(id, username, color, desc) {
    const embed = new MessageEmbed()
        .setTitle('Got a ping!')
        .setColor(color)
        .addField('ID', id)
        .addField('Username', username)
        .setDescription(desc);
    webhookClient.send({
        embeds: [embed],
    });
    return 1;
}
