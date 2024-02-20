const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Replies the manual of help'),
	async execute(interaction) {
        const helpembed = new EmbedBuilder()
            .setTitle("Manual")
            .setColor(0xE12424)
            .setThumbnail('https://i.pinimg.com/564x/b8/76/71/b8767130cc0092f259cc8bb212a3b8b1.jpg')
            .addFields(
                { name: '/help-moderation', value: 'Help of moderation commands' },
                { name: '/help-usage', value: 'Basic manual of use', inline: false },
                { name: '/help-bot-config', value: 'Only the author of this bot', inline: false },
            )


		await interaction.reply({embeds: [helpembed]});
	},
};