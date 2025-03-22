const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Orphan = require('./Orphan');

const Donation = sequelize.define('Donation', {
    id: {

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    donorName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true 
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0.01 
        }
    },
    category: {
        type: DataTypes.ENUM('general', 'education', 'medical'),
        allowNull: false,
        defaultValue: 'general'
    },
    donationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true, 
    tableName: 'donations' 
});


Donation.belongsTo(Orphan, { 
    foreignKey: { 
        name: 'orphanId', 
        allowNull: false 
    }, 
    onDelete: 'CASCADE' 
});

Orphan.hasMany(Donation, { 
    foreignKey: 'orphanId',
    onDelete: 'CASCADE' 
});

module.exports = Donation;
