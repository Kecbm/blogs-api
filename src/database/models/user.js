const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, { timestamps: false });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {as: 'BlogPosts', foreignKey: 'userId'});
  }

  return UserTable;
};

module.exports = UserSchema;