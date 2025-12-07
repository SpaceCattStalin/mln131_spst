'use client';

import { Mail, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Group 6 - Fall 2025</span>
            </div>
            <p className="text-sm text-muted-foreground">Nhóm môn học về chủ nghĩa xã hội khoa học</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Nội Dung</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#content" className="hover:text-primary transition-colors">
                  Nội Dung Chính
                </a>
              </li>
              <li>
                <a href="#minigame" className="hover:text-primary transition-colors">
                  Minigame
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-primary transition-colors">
                  Câu Hỏi
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-primary transition-colors">
                  Video
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Tài Nguyên</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sách & Tài Liệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bài Viết
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Diễn Đàn Thảo Luận
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@marxacademy.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                group6@gmail.com
              </a>
              <p className="text-muted-foreground">© 2025 Group 06. Tất cả quyền được bảo lưu.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
          <p>Một nền tảng giáo dục vì sự phát triển của tư duy phê phán và hiểu biết lịch sử.</p>
        </div>
      </div>
    </footer>
  );
}
