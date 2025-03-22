const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { 
  createSetupEmbed, 
  createSetupButtons, 
  createErrorEmbed, 
  createInfoEmbed, 
  createWarningEmbed 
} = require('../utils/embeds');
const { verifySetup, cleanupInvalidSetup } = require('../utils/setupHandler');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Configurer le système de vocaux temporaires')
    .addStringOption(option =>
      option.setName('interface')
        .setDescription('Le type d\'interface à utiliser')
        .setRequired(true)
        .addChoices(
          { name: 'Original', value: 'original' },
          { name: 'Standard', value: 'standard' }
        )
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  
  async execute(interaction) {
    // Check if user has administrator permissions
    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
      return interaction.reply({
        embeds: [createErrorEmbed(
          'Autorisation reniée', 
          'Vous avez besoin d\'autorisations d\'administrateur pour utiliser cette commande.'
        )],
        ephemeral: true
      });
    }

    await interaction.deferReply({ ephemeral: true });

    // Verify if setup is still valid
    const setupStatus = await verifySetup(interaction.guild);
    
    if (setupStatus.valid) {
      return interaction.editReply({
        embeds: [createInfoEmbed(
          'Déjà Configuré', 
          'Vocal Manager est déjà configuré sur ce serveur.',
          [
            { 
              name: 'Configuration actuelle', 
              value: `Catégorie: <#${setupStatus.settings.categoryId}>\nCréateur de salon: <#${setupStatus.settings.creatorChannelId}>\nInterface du salon: <#${setupStatus.settings.interfaceChannelId}>`, 
              inline: false 
            }
          ]
        )],
        ephemeral: true
      });
    } else {
      // If setup is invalid, clean it up
      if (setupStatus.reason !== 'Aucun paramètre trouvé') {
        await cleanupInvalidSetup(interaction.guild);
        await interaction.editReply({
          embeds: [createWarningEmbed(
            'Configuration non valide réinitialisé', 
            `La configuration précédente n'était pas valide (${setupStatus.reason}). Il a été nettoyé. Veuillez exécuter à nouveau la commande pour configurer Vocal Manager.`
          )],
          ephemeral: true
        });
        return;
      }
    }

    const interfaceType = interaction.options.getString('interface') || 'standard';
    const setupEmbed = createSetupEmbed(interfaceType);
    const setupButtons = createSetupButtons();

    await interaction.editReply({
      embeds: [setupEmbed],
      components: [setupButtons],
      ephemeral: false
    });
  }
}; 