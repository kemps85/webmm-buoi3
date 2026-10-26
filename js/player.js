// Trình phát tùy biến cho <video> trong [data-player]: nút phát/tạm dừng, thanh tiến độ (timeupdate), báo lỗi.
// Không có JS thì video vẫn dùng bộ điều khiển gốc (thuộc tính controls).
(function () {
  'use strict';
  function mmss(s) { s = Math.floor(s || 0); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  document.querySelectorAll('[data-player]').forEach(function (box) {
    var v = box.querySelector('video'), ctl = box.querySelector('.ctl');
    var btn = ctl.querySelector('button'), bar = ctl.querySelector('input'), tm = ctl.querySelector('output');
    var loi = box.querySelector('.loi'), keo = false;
    v.controls = false;      // có JS thì dùng nút tự làm
    ctl.hidden = false;
    function nhan() { btn.textContent = v.paused ? 'Phát' : 'Tạm dừng'; }
    function gio() { tm.textContent = mmss(v.currentTime) + ' / ' + mmss(v.duration); }
    function baoLoi(msg) { loi.textContent = msg; loi.hidden = false; btn.disabled = true; }
    btn.addEventListener('click', function () {
      if (!v.paused) { v.pause(); return; }
      var p = v.play();      // play() trả về Promise, có thể bị từ chối
      if (p && p.catch) {
        p.catch(function (e) {
          if (e.name !== 'AbortError') baoLoi('Không phát được video (' + e.name + '). Thử tải lại trang.');
        });
      }
    });
    ['play', 'pause', 'ended'].forEach(function (ev) { v.addEventListener(ev, nhan); });
    v.addEventListener('loadedmetadata', gio);
    v.addEventListener('timeupdate', function () {
      if (!keo && v.duration) bar.value = (v.currentTime / v.duration) * 100;
      gio();
    });
    bar.addEventListener('input', function () {
      keo = true;
      if (v.duration) v.currentTime = (bar.value / 100) * v.duration;
    });
    bar.addEventListener('change', function () { keo = false; });
    v.addEventListener('error', function () { baoLoi('Video bị lỗi hoặc trình duyệt không hỗ trợ định dạng.'); });
    var src = v.querySelectorAll('source');   // lỗi nguồn nổ ở <source>, không nổ ở <video>
    if (src.length) src[src.length - 1].addEventListener('error', function () { baoLoi('Không tải được tệp video.'); });
    nhan();
    gio();
  });
})();
