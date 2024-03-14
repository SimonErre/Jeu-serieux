import {FkConstraintMethod, ForeignKey, Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";

const name = 'session'
const fks = [
    new ForeignKey(FkConstraintMethod.HAS_MANY, 'character', name, {
        foreignKey: 'characterName'
    })
]

export default new Model(name, {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAd: 'startDate',
    updatedAt: 'lastUpdate'
}, fks)
