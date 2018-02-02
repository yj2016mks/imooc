/**
 * Created by Administrator on 2017/11/23 0023.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productNum":Number,
    "checked":String,
    "productImage":String
});

module.exports = mongoose.model('Good',produtSchema);
