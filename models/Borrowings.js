import {Sequelize,DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.mysql.js';
import Books from "./Books.js";
import Members from "./Members.js";

class Borrowings extends Model {
        static async createDefaults() {
    }
}
Borrowings.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        borrowDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        returnDate: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'borrowed'
        },
    },
    {
        sequelize: db,
        modelName: 'borrowings',
        tableName: 'borrowings',
        timestamps: true
    }
)
Members.belongsToMany(Books,{through: Borrowings})
Books.belongsToMany(Members,{through: Borrowings})

export default Borrowings;
