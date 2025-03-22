const { connectToDatabase } = require('../utils/database');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    // Connect to MongoDB
    await connectToDatabase();
    
    console.log(`Connecté au bot ${client.user.tag}`);
    
    // Set bot status
    client.user.setPresence({
      activities: [{ name: 'Vocal Manager', type: 2 }],
      status: 'dnd'
    });
  }
}; 