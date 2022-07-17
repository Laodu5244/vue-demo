export default {
  // 时间戳转换
  getDate(value) {
    let date = new Date(value * 1000);
    let year = date.getFullYear();
    let month = date.getMonth();
    let dates = date.getDate();

    return `${year}.${month + 1}.${dates}`
  }
}