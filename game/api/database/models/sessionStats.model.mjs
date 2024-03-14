import {FkConstraintMethod, ForeignKey, Model} from "#structs/model.mjs";
import {DataTypes} from "sequelize";

const name = 'sessionStat'
export default new Model(name, {
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, { timestamps: false }, [
    new ForeignKey(FkConstraintMethod.BELONGS_TO_MANY, 'session', 'statistic', { through: name })
], true)
