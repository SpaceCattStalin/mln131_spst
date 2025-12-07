'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Briefcase, BookOpen } from 'lucide-react';
import Image from 'next/image';

const contentCards = [
  {
    icon: Heart,
    title: 'Cấu Trúc Gia Đình',
    description:
      'Phân tích sự thay đổi của cấu trúc gia đình từ xã hội tư bản sang xã hội xã hội chủ nghĩa. Tìm hiểu về vai trò của gia đình trong các giai đoạn lịch sử khác nhau.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Vai Trò Phụ Nữ & Nam Giới',
    description:
      'Khám phá quan điểm của chủ nghĩa xã hội khoa học về bình đẳng giới, giải phóng phụ nữ, và sự thay đổi vai trò trong gia đình xã hội chủ nghĩa.',
    color: 'text-secondary',
  },
  {
    icon: Briefcase,
    title: 'Kinh Tế & Gia Đình',
    description:
      'Hiểu rõ mối liên hệ giữa cơ sở kinh tế và tổ chức gia đình. Phân tích cách phân phối tài sản ảnh hưởng đến quan hệ gia đình.',
    color: 'text-primary',
  },
  {
    icon: BookOpen,
    title: 'Giáo Dục & Nuôi Dạy',
    description:
      'Tìm hiểu về vai trò của giáo dục công cộng trong xã hội xã hội chủ nghĩa và sự thay đổi cách nuôi dạy con em trong hệ thống mới.',
    color: 'text-secondary',
  },
];

export function ContentSection() {
  return (
    <section id="content" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative ">
        {/* Top-right character - Historical engraving portrait */}
        <div className="absolute top-20 -right-12 w-52 h-60 z-50 pointer-events-none">
          <Image
            width={400}
            height={400}
            src="/sticker-1.png"
            alt="Kant - Historical thinker"
            className="w-full h-full object-contain"
            unoptimized
            onError={() => {
              console.error('Failed to load sticker-1.png');
            }}
          />
        </div>

        {/* Bottom-left character */}
        <div className="absolute -bottom-22 -left-12 w-48 h-56 z-50 pointer-events-none">
          <Image
            width={400}
            height={400}
            src="/anh-gia-dinh-1.png"
            alt="Gia đình Á Đông truyền thống"
            className="w-full h-full object-contain"
            unoptimized
            onError={() => {
              console.error('Failed to load anh-gia-dinh-1.png');
            }}
          />
        </div>

        {/* Bottom-right character */}
        <div className="absolute -bottom-22 -right-16 w-60 h-64 z-50 pointer-events-none">
          <Image
            width={400}
            height={400}
            src="/anh-gia-dinh-1.png"
            alt="Gia đình hiện đại"
            className="w-full h-full object-contain"
            unoptimized
            onError={() => {
              console.error('Failed to load anh-gia-dinh-1.png');
            }}
          />
        </div>

        {/* Main content container with padding to accommodate surrounding characters */}
        <div className="relative z-20 px-8 py-8">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Các Khía Cạnh Chính</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm hiểu bốn khía cạnh quan trọng của vấn đề gia đình trong thời kỳ quá độ
            </p>
          </div>

          {/* Content cards grid */}
          <div className="grid md:grid-cols-2 gap-6 relative">
            {contentCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:bg-card/80"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${card.color}`} />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">{card.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
            {/* Top-left character - Classical philosopher sculpture */}
            <div className="absolute -bottom-18 -left-27 w-56 h-64 z-10 pointer-events-none">
              <Image
                width={400}
                height={400}
                src="/sticker-2.png"
                alt="Philosopher"
                className="w-full h-full object-contain"
                unoptimized
                onError={() => {
                  console.error('Failed to load sticker-2.png');
                }}
              />
            </div>
          </div>

          {/* Historical timeline */}
          <div className="mt-16 p-8 bg-card/50 border border-border/50 rounded-lg">
            <h3 className="text-2xl font-bold mb-8">Dòng Thời Gian Phát Triển Tư Tưởng</h3>
            <div className="space-y-6">
              {[
                { year: '1848', event: 'Marx & Engels viết Tuyên Ngôn - bình luận về gia đình tư bản' },
                {
                  year: '1884',
                  event: "Engels xuất bản 'Xuất Hiện của Gia Đình Tư Nhân, Tài Sản Riêng Tư và Nhà Nước'",
                },
                {
                  year: '1917-1991',
                  event: 'Liên Xô tiến hành các chính sách cải cách gia đình và giáo dục xã hội chủ nghĩa',
                },
                {
                  year: 'Ngày nay',
                  event: 'Các lý thuyết vẫn có tác động đến các cuộc tranh luận về gia đình và xã hội',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-24 font-bold text-primary">{item.year}</div>
                  <div className="text-foreground">{item.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Classical image with philosopher */}
          <div className="mt-12 rounded-lg overflow-hidden shadow-xl border border-primary/20">
            <Image
              width={400}
              height={400}
              src="/anh-nen-2.jpg"
              alt="Xã hội cổ điển"
              className="w-full h-96 object-cover"
              unoptimized
              onError={() => {
                console.error('Failed to load anh-nen-2.jpg');
              }}
            />
            <div className="p-8 bg-card">
              <h3 className="text-2xl font-bold mb-4">Tư Tưởng Của Các Nhà Lý Thuyết</h3>
              <p className="text-muted-foreground">
                Các nhà tư tưởng như Karl Marx, Friedrich Engels, và Vladimir Lenin đã dành nhiều tác phẩm để phân tích
                vấn đề gia đình từ góc độ duy vật lịch sử. Họ chỉ ra rằng gia đình không phải là một tổ chức không đổi,
                mà là sản phẩm của điều kiện kinh tế-xã hội. Trong xã hội xã hội chủ nghĩa, họ dự đoán gia đình sẽ có
                các hình thức mới, với sự bình đẳng đầy đủ giữa các thành viên.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
