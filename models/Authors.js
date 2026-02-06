import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.mysql.js';


class Authors extends Model {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static async createDefaults(){
      await Authors.create({
          firstName: 'Leo',
          lastName: 'Tolstoy',
          email: 'leotolstoy2@gmail.com',
            birthYear: 1828,
      })
    }
}

Authors.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
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
            validate:{
                isEmail: true,
            }
        },
        bio: {
            type: DataTypes.TEXT,

        },
        birthYear: {
type: DataTypes.INTEGER,
        },

    },
{
    sequelize: db,
        modelName: 'authors',
    tableName: 'authors',
    timestamps: true
}

)

export default Authors;