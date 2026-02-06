import { DataTypes, Model} from 'sequelize';
import Authors from './Authors.js';
import db from '../clients/db.sequelize.mysql.js';


class Books extends Model {
    static async createDefaults() {
        await Books.create({
                title: 'Gevorg Marzpetuni',
                publishedYear: 1896,
               isbn: '1234567890123',
                genre: 'Historical Novel',
                price: 5000,

               });
    }
}
Books.init(
    {
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isbn:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [13]
            }
        },
        publishYear: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1000,
                max:new Date().getFullYear()
            }
        },
        genre: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
        },
        coverImage: {
            type: DataTypes.STRING,
            defaultValue: 'default-cover.jpg',
        },

    },
    {
        sequelize: db,
        modelName: 'books',
        tableName: 'books',
        timestamps: true,
    }
);
Books.belongsTo(Authors)
Authors.hasMany(Books)


 export default Books;