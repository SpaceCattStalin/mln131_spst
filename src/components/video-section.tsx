'use client';

import { Card } from './ui/card';

const videos = [
  {
    title: 'Gia Đình Trong Xã Hội Xã Hội Chủ Nghĩa',
    description: 'Bài hát AI về sự biến đổi gia đình trong thời đại mới',
    videoId: '1',
    youtubeLink: 'https://www.youtube.com/watch?v=family1',
  },
  {
    title: 'Giải Phóng Phụ Nữ - Nền Tảng Của Xã Hội Mới',
    description: 'Bài hát sáng tạo về bình đẳng giới và giải phóng phụ nữ',
    videoId: '2',
    youtubeLink: 'https://www.youtube.com/watch?v=womenliberation',
  },
  {
    title: 'Tình Yêu Và Cách Mạng',
    description: 'Bài hát về tình cảm gia đình trong bối cảnh xã hội chủ nghĩa',
    videoId: '3',
    youtubeLink: 'https://www.youtube.com/watch?v=loverevolution',
  },
];

export function VideoSection() {
  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Bài Hát & Sáng Tạo AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Các bài hát sáng tạo dưới sự hỗ trợ của AI, kết hợp tài năng con người với công nghệ hiện đại
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <Card
              key={idx}
              className="border-border/50 bg-card overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wDOdZn-hhyY?si=_i8jJW8LnVnAjeP9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Card>
          ))}
        </div>

        {/* Featured video player section */}
        <div className="mt-12 bg-card border border-border/50 rounded-lg overflow-hidden">
          <div className="aspect-video bg-linear-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">♪</div>
              <p className="text-xl text-muted-foreground">Bài hát chính - Gia Đình Trong Xã Hội Xã Hội Chủ Nghĩa</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Gia Đình Trong Xã Hội Xã Hội Chủ Nghĩa</h3>
            <p className="text-muted-foreground mb-4">
              Một tác phẩm sáng tạo kết hợp tài năng con người với công nghệ AI, lấy cảm hứng từ các lý thuyết của Marx,
              Engels và Lenin về gia đình. Bài hát này phản ánh quá trình biến đổi của tổ chức gia đình từ xã hội tư bản
              sang xã hội xã hội chủ nghĩa, với nhấn mạnh vào sự bình đẳng, giáo dục công cộng, và tình yêu thương trong
              bối cảnh xã hội mới.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Nghe Trên YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
