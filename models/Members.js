import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.mysql.js';


class Members extends Model {

isActive(){
    return this.membershipType !== 'expired';
}
    static async createDefaults() {
        await Members.create({
            firstName: 'Armen',
            lastName: 'Sargsyan',
            email: 'armen@mail.am',
            membershipType: 'active'
        });

    }

}

Members.init(
    {
id: {
    type: DataTypes.BIGINT,
        primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
        firstName: {
    type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
    type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
    type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
        isEmail: true,
            }
        },
        phoneNumber: {
    type: DataTypes.STRING,
        },
        membershipType: {
    type: DataTypes.STRING,
            defaultValue: 'standard',
        },
        joinedDate: {
    type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,

        },
    },

    {
        sequelize: db,
        modelName: 'members',
        tableName: 'members',
        timestamps: true
    }
)
export default Members;