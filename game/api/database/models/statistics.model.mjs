import {Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";

export default new Model('statistic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    defaultScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 100
        }
    }
}, {
    timestamps: false
})
