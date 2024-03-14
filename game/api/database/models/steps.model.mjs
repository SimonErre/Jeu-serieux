import {FkConstraintMethod, ForeignKey, Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";

const name = 'step'
const fks = [
    new ForeignKey(FkConstraintMethod.HAS_MANY, 'session', name, {
        foreignKey: 'sessionCode'
    }),
    new ForeignKey(FkConstraintMethod.HAS_MANY, 'altercation', name, {
        foreignKey: 'altercationId'
    }),
    new ForeignKey(FkConstraintMethod.HAS_MANY, 'reaction', name, {
        foreignKey: 'reactionId'
    }),
    new ForeignKey(FkConstraintMethod.HAS_MANY, 'character', name, {
        foreignKey: 'characterName'
    })
]

export default new Model(name, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: true,
    createdAt: 'savedAt',
    updatedAt: false
}, fks)
