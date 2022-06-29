var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/pos', function (req, res, next) {
  res.send({
    // 常用商品
    oftenList: [
      { id: 1, name: "牛肉堡", price: 20, count: 1 },
      { id: 2, name: "蜜汁手扒鸡", price: 25, count: 1 },
      { id: 3, name: "香辣鸡翅", price: 12, count: 1 },
      { id: 4, name: "鸡米花", price: 18, count: 1 },
      { id: 5, name: "可乐", price: 8, count: 1 },
      { id: 6, name: "鸡腿堡", price: 15, count: 1 },
      { id: 7, name: "薯条", price: 10, count: 1 },
      { id: 8, name: "奶茶", price: 8, count: 1 },
      { id: 9, name: "台式鸡排", price: 14, count: 1 },
    ],
    // 主食
    stapleFood: [
      { id: 1, name: "牛肉堡", price: 20, count: 1, url: 'images/jtb.jpg' },
      { id: 2, name: "鸡腿堡", price: 15, url: 'images/nb.jpg', count: 1 },
    ],
    // 小吃
    snacks: [
      { id: 1, name: "蜜汁手扒鸡", price: 25, url: 'images/mz.jpg', count: 1 },
      { id: 2, name: "香辣鸡翅", price: 12, url: 'images/jc.jpg', count: 1 },
      { id: 3, name: "鸡米花", price: 18, url: 'images/jmh.jpg', count: 1 },
      { id: 4, name: "薯条", price: 10, url: 'images/st.jpg', count: 1 },
    ],
    // 饮料
    drinks: [
      { id: 1, name: "可乐", price: 8, url: 'images/kl.jpg', count: 1 },
      { id: 2, name: "奶茶", price: 8, url: 'images/nc.jpg', count: 1 },
    ],
    // 套餐
    combos: [
      { id: 1, name: "单人餐", price: 32, url: 'images/one.jpg', count: 1 },
      { id: 2, name: "双人餐", price: 58, url: 'images/two.jpg', count: 1 },
    ]
  })
});

module.exports = router;
