var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _product = require("./product");
var _video = require("./video");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var video = _video(sequelize, DataTypes);

  video.belongsTo(category, { as: "category", foreignKey: "categoryId"});
  category.hasMany(video, { as: "videos", foreignKey: "categoryId"});
  product.belongsTo(video, { as: "video", foreignKey: "video_id"});
  video.hasMany(product, { as: "products", foreignKey: "video_id"});

  return {
    category,
    product,
    video,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
