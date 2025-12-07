'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Pre-title */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Vấn đề xã hội học gia đình</span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">Gia Đình Trong</span>
              <br />
              <span className="gradient-text">Thời Kỳ Quá Độ Xã Hội</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tìm hiểu về sự biến đổi của tổ chức gia đình, vai trò các thành viên, và mối quan hệ trong quá trình xây
              dựng xã hội xã hội chủ nghĩa. Khám phá cách chủ nghĩa xã hội khoa học nhìn nhận vấn đề gia đình từ góc độ
              giai cấp và kinh tế-xã hội.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('content')}
              >
                Bắt Đầu Khám Phá
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
                onClick={() => scrollToSection('minigame')}
              >
                Chơi Minigame
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
                onClick={() => scrollToSection('gamecard')}
              >
                Chơi Game Card
              </Button>
            </div>
          </div>

          {/* Right side with image */}
          <div className="relative h-full hidden md:flex items-center justify-center">
            <div className="relative w-full h-96">
              <Image
                src="/tranh-son-dau.jpg"
                width={600}
                height={400}
                alt="Hero Image"
                className="w-full h-full min-w-2xl object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
