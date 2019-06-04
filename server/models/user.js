module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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

  User.associate = models => {
    User.hasMany(models.Article, {
      onDelete: 'CASCADE'
    });
  };

  return User;
};




