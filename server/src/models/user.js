import crypt from '../config/crypt';
import { Op } from 'sequelize';

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

  User.authenticate = async function({ username, email, password }) {
    console.log(username, password);
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }]
      }
    });

    const isMatch = await crypt.compare(password, user.password);

    console.log('PASSWORD MATCH', isMatch);

    if (isMatch) {
      return user.authorize();
    }

    throw new Error('Invalid Password');
  };

  User.prototype.authorize = async function() {
    console.log(sequelize.models);
    const { authToken: AuthToken } = sequelize.models;
    const user = this;

    // console.log(user);

    const token = await AuthToken.generate(user.id);
    await user.addAuthToken(token);

    return { user, token };
  };

  return User;
}
