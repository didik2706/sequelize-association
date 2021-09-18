module.exports = (sequelize, DataTypes) => {
    const Prodi = sequelize.define('Prodi', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            field: 'user_id',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        prodi: {
            type: DataTypes.ENUM,
            values: ['Informatika', 'Teknologi Informasi', 'Sistem Informasi', 'Rekayasa Perangkat Lunak', 'Teknik Elektro'],
            allowNull: false
        },
        createdAt: {
          field: 'created_at',
          type: DataTypes.DATE,
          allowNull: true
        },
        updatedAt: {
          field: 'updated_at',
          type: DataTypes.DATE,
          allowNull: true
        }
    }, {
        tableName: 'tb_prodi'
    })

    Prodi.associate = models => {
        Prodi.belongsTo(models.Users,{
            foreignKey: 'id'
        });
    }

    return Prodi;
}