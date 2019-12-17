import jwt from '../config/jwt';

module.exports = (sequelize, DataTypes) => {
  const AuthToken = sequelize.define('authToken', {
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  AuthToken.associate = ({ User }) => {
    AuthToken.belongsTo(User);
  };

  AuthToken.generate = async function(userId) {
    if (!userId) {
      throw new Error('AuthToken requires a user ID');
    }

    const token = await jwt.sign({ userId });

    return AuthToken.create({ token, userId });
  };

  return AuthToken;
};
