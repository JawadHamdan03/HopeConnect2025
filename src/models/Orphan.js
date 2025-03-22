const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orphan = sequelize.define('Orphan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, 
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0, 
        }
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true 
    },
    needs: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sponsored: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    dateAdded: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true, 
    tableName: 'orphans' 
});

module.exports = Orphan;
