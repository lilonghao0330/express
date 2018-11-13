
exports.judgement = function(i) {
    if(cpunum == 0 && i == 1) {
        judge = "あなたの勝ち";
      } else if(cpunum == 1 && i == 2) {
        judge = "あなたの勝ち";
      } else if(cpunum == 2 && i == 0) {
        judge = "あなたの勝ち";
      } else if(cpunum == i) {
        judge = "ひきわけ";
      } else {
        judge = "あなたの負け";
      }
};