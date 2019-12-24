module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firstName: {
        type: DataTypes.STRING(80),
      },
      lastName: {
        type: DataTypes.STRING(80),
      },
      username: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(80),
        allowNull: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: true
    }
  );

  User.associate = ({ AuthToken, Article }) => {
    User.hasMany(Article);
    User.hasMany(AuthToken);
  };

  User.prototype.getPublicProfile = function() {
    const { avatar, username, firstName, lastName, email, id } = this;
    return {
      avatar,
      firstName,
      lastName,
      username,
      email,
      id
    };
  };

  User.prototype.authorize = async function() {
    const { authToken: AuthToken } = sequelize.models;
    const user = this;

    const tokenInstance = await AuthToken.generate(user.id);

    await user.addAuthToken(tokenInstance);

    return { token: tokenInstance.token };
  };

  return User;
};
