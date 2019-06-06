module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      name: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
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
    User.hasMany(models.Article);
  };

  return User;
};




