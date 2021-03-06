var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect_url = require('../conf/proj.json').mongodb;
var db = mongoose.createConnection(connect_url);

var TuiGuangSchema = new Schema({
  type: Number,
  id: String,
  pageTitle: String,
  articleTit: String,
  name: String,
  desc: String,
  picurl: String,
  picurl_ali :{
    type : String,
    default : ''
  },
  capter1: String,
  capter2: String,
  linkUrl: String,
  statisticsUrl1: String,
  statisticsUrl2: String,
  tokenCodes: String,
  channel: String,
  remarks: String,
  gonghao_id: { type: String, default: ""},
  company: {
    type: String,
    default: ""
  },
  finalImg: {
    type: String,
    default: ""
  },
  finalImg_ali: {
    type: String,
    default: ""
  },
  gonghaoLogo: {
    type: String,
    default: ""
  },
  suffix : {
    type: String,
    default: ""
  },
  isClick : {
    type: Boolean,
    default: false
  },
  jumpUrl: {
    type: String,
    default: ""
  },
  isJump: {type: Boolean, default: false},
  bgcolor: {type: String, default: "#fff"}
});

var TuiGuangModel = db.model('TuiGuang', TuiGuangSchema);
module.exports = TuiGuangModel;
