const _0x12c102 = _0x4ed7;
function _0x51b5() {
  const _0x6f8193 = [
    "getElementById",
    "11FEBTbC",
    "textContent",
    "357347dgzvHs",
    "BUTTON",
    "1071070pKxkmM",
    "88UrcIcg",
    "3oeWgwQ",
    "116676VlMork",
    "addEventListener",
    "2MLAkEF",
    "12940hTtxie",
    "click",
    "2250180wHXWXb",
    "Score",
    "13439410NekTxO",
    "531605xRlIZr"
  ];
  _0x51b5 = function () {
    return _0x6f8193;
  };
  return _0x51b5();
}
function _0x4ed7(_0x183a60, _0x5a336c) {
  const _0x51b533 = _0x51b5();
  return (
    (_0x4ed7 = function (_0x4ed7dd, _0x32972d) {
      _0x4ed7dd = _0x4ed7dd - 0x146;
      let _0x19a397 = _0x51b533[_0x4ed7dd];
      return _0x19a397;
    }),
    _0x4ed7(_0x183a60, _0x5a336c)
  );
}
(function (_0x3ad245, _0x1e0ed3) {
  const _0x4f1107 = _0x4ed7,
    _0x13d124 = _0x3ad245();
  while (!![]) {
    try {
      const _0x20dcfd =
        (parseInt(_0x4f1107(0x149)) / 0x1) *
          (-parseInt(_0x4f1107(0x150)) / 0x2) +
        (-parseInt(_0x4f1107(0x14d)) / 0x3) *
          (parseInt(_0x4f1107(0x151)) / 0x4) +
        -parseInt(_0x4f1107(0x156)) / 0x5 +
        -parseInt(_0x4f1107(0x153)) / 0x6 +
        -parseInt(_0x4f1107(0x14b)) / 0x7 +
        (parseInt(_0x4f1107(0x14c)) / 0x8) *
          (-parseInt(_0x4f1107(0x14e)) / 0x9) +
        (parseInt(_0x4f1107(0x155)) / 0xa) * (parseInt(_0x4f1107(0x147)) / 0xb);
      if (_0x20dcfd === _0x1e0ed3) break;
      else _0x13d124["push"](_0x13d124["shift"]());
    } catch (_0xfebcb1) {
      _0x13d124["push"](_0x13d124["shift"]());
    }
  }
})(_0x51b5, 0x3263a);
let points = 0x0,
  ClickerPower = 0x1;
const PCupgrade = document[_0x12c102(0x146)]("PCupgrade"),
  variable = document[_0x12c102(0x146)](_0x12c102(0x14a)),
  ScoreDisplay = document[_0x12c102(0x146)](_0x12c102(0x154));
PCupgrade[_0x12c102(0x14f)](_0x12c102(0x152), function () {
  const _0x4eb055 = _0x12c102;
  points >= 0xa &&
    ((points -= 0x14),
    (ClickerPower += 0x1),
    (ScoreDisplay[_0x4eb055(0x148)] = points));
}),
  variable[_0x12c102(0x14f)]("click", function () {
    const _0x2c3fa6 = _0x12c102;
    (points += ClickerPower), (ScoreDisplay[_0x2c3fa6(0x148)] = points);
  });