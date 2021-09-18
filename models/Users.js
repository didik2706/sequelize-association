module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nim: {
      type: DataTypes.INTEGER,
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
    tableName: 'tb_mahasiswa'
  });

  Users.associate = models => {
    Users.hasOne(models.Prodi, {
      foreignKey: {
        name: 'user_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  }

  return Users;
}