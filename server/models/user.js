const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING(80),
      unique: true
    },
    email: {
      type: DataTypes.STRING(80),
      unique: true
    },
    created_date: {
      type: DataTypes.DATE,
    },
    updated_date: {
      type: DataTypes.DATE,
    },
  })
}
