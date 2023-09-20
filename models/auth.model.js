const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    },
    profile_pic: {
        type: DataTypes.STRING
    },
    org_id: {
        type: DataTypes.STRING
    },
    launch_credit_balance: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.STRING
    },
    bank_code: {
        type: DataTypes.STRING
    },
    bank_name: {
        type: DataTypes.STRING
    },
    bank_number: {
        type: DataTypes.STRING
    }

})


m