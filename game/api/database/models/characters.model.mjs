import {Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";
import enums from "#utils/enums.mjs";

export default new Model('character', {
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    skin: {
        type: DataTypes.ENUM,
        values: enums.skins,
        allowNull: false
    },
    csp: {
        type: DataTypes.ENUM,
        values: enums.csps,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: enums.genders,
        allowNull: false
    }
}, Model.DEFAULT_OPTIONS)
