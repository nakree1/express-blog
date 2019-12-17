import jwt from '../config/jwt';
import InternalError from '../utils/errors/InternalError';

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
      throw new InternalError('AuthToken requires a user ID');
    }

    const token = await jwt.sign({ userId });

    return AuthToken.create({ token, userId });
  };

  return AuthToken;
};
