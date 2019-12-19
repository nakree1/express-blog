module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
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
    const { username, email, id } = this;
    return {
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
