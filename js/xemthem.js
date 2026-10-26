// Nút «Xem thêm»: nạp media.json bằng fetch rồi chèn thêm vào lưới, khỏi tải lại cả trang.
(function () {
  'use strict';
  var nut = document.getElementById('xemthem');
  var luoi = document.getElementById('luoi');
  var tt = document.getElementById('trangthai');
  if (!nut || !luoi || !window.fetch) { return; }

  function tao(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text) { e.textContent = text; }
    return e;
  }

  function mucMoi(it) {
    var li = tao('li');
    var fig = tao('figure');
    var img = tao('img');
    img.src = it.src;
    if (it.srcset) {
      img.srcset = it.srcset;
      img.sizes = '(min-width: 1100px) 340px, (min-width: 768px) 46vw, 100vw';
    }
    img.width = it.width;
    img.height = it.height;
    img.alt = it.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    var cap = tao('figcaption');
    if (it.type === 'video') { cap.appendChild(tao('span', 'tag', 'Video')); }
    cap.appendChild(tao('strong', '', it.title + '. '));
    cap.appendChild(document.createTextNode(it.caption));
    if (it.href) {          // thẻ video: cả ảnh lẫn chữ nằm trong 1 liên kết, ảnh alt rỗng
      var a = tao('a');
      a.href = it.href;
      a.appendChild(img);
      a.appendChild(cap);
      fig.appendChild(a);
    } else {
      fig.appendChild(img);
      fig.appendChild(cap);
    }
    li.appendChild(fig);
    return li;
  }

  nut.addEventListener('click', function () {
    nut.disabled = true;
    tt.textContent = 'Đang tải media.json...';
    fetch('media.json')
      .then(function (r) {
        if (!r.ok) { throw new Error('HTTP ' + r.status); }
        return r.text();
      })
      .then(function (txt) {
        var items = JSON.parse(txt).items;
        var first = null;
        items.forEach(function (it) {
          var li = mucMoi(it);
          luoi.appendChild(li);
          if (!first) { first = li; }
        });
        tt.textContent = 'Đã nạp thêm ' + items.length + ' mục từ media.json (' + new Blob([txt]).size + ' byte, chưa nén).';
        nut.hidden = true;
        if (first) { first.tabIndex = -1; first.focus(); }
      })
      .catch(function (e) {
        tt.textContent = 'Không nạp được danh sách (' + e.message + '). Bấm Xem thêm để thử lại.';
        nut.disabled = false;
      });
  });
})();
