import {Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";

export default new Model('altercation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, Model.DEFAULT_OPTIONS)
