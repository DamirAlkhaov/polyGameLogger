import { MessageEmbed, WebhookClient } from "discord.js";
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/985619536671813674/dOgmGb1qtOGdeui1rtGR8jI2sxB4ln_hmGseDqH4yjEb5dfuLevk3PaDVDRaKG_E7yhk' });
export async function send(id, username) {
    const embed = new MessageEmbed()
        .setTitle('Got a ping!')
        .setColor('#0099ff')
        .addField('ID', id)
        .addField('Username', username);
    webhookClient.send({
        embeds: [embed],
    });
}
