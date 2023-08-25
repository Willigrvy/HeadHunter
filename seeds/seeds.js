const sequelize = require('../config/connection');
//const seedCandidate = require('.HeadhunterData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    process.exit(0);
};
seedAll();