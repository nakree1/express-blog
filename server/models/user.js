module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      name: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false,
        // validate: {
        //   isAlphanumeric: true
        // }
      },
      email: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }
    },
    {
      timestamps: true
    }
  );

  User.associate = function (models) {
    this.hasMany(models.article, {
      onDelete: 'CASCADE'
    });
  };

  return User;
};




