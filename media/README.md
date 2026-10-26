# Nguồn và giấy phép media

Tác giả: Bảo Quý Phát (MSSV 24667151, IUH). Mọi media đều tự tạo, không lấy từ mạng.
Script sinh media nằm ngoài site (thư mục `tools/` của bài làm), chạy bằng Python + ffmpeg.

| File | Mô tả | Nguồn / giấy phép |
|---|---|---|
| `img/logo.svg` | Logo vẽ tay bằng SVG | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `img/hero-480.webp, hero-800.webp, hero-1200.webp` | Ảnh hero 16:9, 3 cỡ (480/800/1200 px), WebP | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `img/hero-800.jpg` | Ảnh hero dự phòng JPEG 800x450 | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `img/tv-*.webp (6 ảnh + tv-video.webp)` | Ảnh thư viện 640x360 WebP: Mặt Trăng, Sao Thổ, mưa sao băng, Orion, Ngân Hà, Sao Mộc; tv-video là khung hình từ video | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `img/tv-*-320.webp` | Ảnh thu nhỏ 320x180 | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `video/poster.png` | Poster bản gốc PNG 1280x720 | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `video/gioi-thieu.mp4` | Video 18 giây, H.264 khoảng 5 Mbps + AAC 192 kbps (bản gốc chưa tối ưu), 1280x720 30fps | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. Nhạc nền tổng hợp bằng numpy. |
| `video/gioi-thieu.webm` | Video 18 giây, VP9 3 Mbps + Opus 128 kbps (bản gốc chưa tối ưu) | Tự tạo bằng Python (Pillow, numpy) + ffmpeg, không dùng ảnh/nhạc tải từ mạng. Giấy phép: CC BY 4.0 - Bảo Quý Phát. |
| `video/gioi-thieu-vi.vtt` | Phụ đề WebVTT tiếng Việt UTF-8 | Tự viết. CC BY 4.0 - Bảo Quý Phát. |
| `audio/meo-quan-sat.mp3, .ogg` | Podcast Mẹo quan sát khoảng 43 giây (MP3 96 kbps mono 44,1 kHz / OGG Vorbis 80 kbps) | Giọng đọc: Microsoft An (vi-VN) của Windows tổng hợp offline qua System.Speech, nhạc nền và chuông tự tổng hợp bằng numpy. Phần nhạc/chuông CC BY 4.0 - Bảo Quý Phát; giọng đọc tổng hợp của Microsoft chỉ dùng cho bài tập, cần xem lại điều khoản nếu dùng thương mại. |

Hạn giấy phép: không hết hạn (CC BY 4.0). Khi dùng lại cần ghi tên tác giả.
