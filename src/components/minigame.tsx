'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const gameQuestions = [
  {
    question: 'Ai là cha đẻ của chủ nghĩa xã hội khoa học?',
    options: ['Karl Marx', 'Vladimir Lenin', 'Joseph Stalin', 'Leon Trotsky'],
    correct: 0,
    fact: 'Karl Marx và Friedrich Engels đã phát triển lý thuyết chủ nghĩa xã hội khoa học vào thế kỷ 19.',
  },
  {
    question: 'Chủ nghĩa duy vật lịch sử được định nghĩa như thế nào?',
    options: [
      'Lịch sử được xác định bởi ý tưởng',
      'Lịch sử được xác định bởi các yếu tố kinh tế',
      'Lịch sử là sản phẩm của những người vĩ đại',
      'Lịch sử lặp lại chính nó',
    ],
    correct: 1,
    fact: 'Chủ nghĩa duy vật lịch sử cho rằng lịch sử được xác định chủ yếu bởi các điều kiện kinh tế.',
  },
  {
    question: 'Trong chủ nghĩa xã hội khoa học, giai cấp nào sẽ dẫn cách mạng?',
    options: ['Tư sản', 'Nông dân', 'Vô sản (công nhân)', 'Trí thức'],
    correct: 2,
    fact: 'Vô sản được coi là lực lượng cách mạng chính, những người lao động không sở hữu tư liệu sản xuất.',
  },
  {
    question: 'Mục tiêu cuối cùng của chủ nghĩa xã hội khoa học là gì?',
    options: [
      'Tăng cường quyền lực nhà nước',
      'Xây dựng một xã hội không giai cấp',
      'Làm giàu các chủ kinh doanh',
      'Duy trì chế độ quân chủ',
    ],
    correct: 1,
    fact: 'Mục tiêu là xây dựng một xã hội communism - xã hội không giai cấp, không tiền tệ, và không nhà nước.',
  },
];

export function Minigame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    if (idx === gameQuestions[currentQ].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQ < gameQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setGameOver(false);
  };

  return (
    <section id="minigame" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Chơi Minigame Thử Thách</span>
          </h2>
          <p className="text-lg text-muted-foreground">Kiểm tra kiến thức của bạn về chủ nghĩa xã hội khoa học</p>
        </div>

        {!gameOver ? (
          <Card className="border-primary/30 bg-card">
            <CardHeader>
              <CardTitle>
                Câu hỏi {currentQ + 1} / {gameQuestions.length}
              </CardTitle>
              <CardDescription>Điểm: {score}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-xl font-semibold">{gameQuestions[currentQ].question}</h3>

              <div className="space-y-3">
                {gameQuestions[currentQ].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResult && handleAnswer(idx)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left font-medium ${
                      selected === idx
                        ? idx === gameQuestions[currentQ].correct
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-red-500 bg-red-500/10 text-red-400'
                        : 'border-border hover:border-primary/50 text-foreground'
                    } ${showResult ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:bg-primary/5'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg">
                  <p className="font-semibold text-secondary mb-2">
                    {selected === gameQuestions[currentQ].correct ? '✓ Chính xác!' : '✗ Sai rồi!'}
                  </p>
                  <p className="text-foreground text-sm">{gameQuestions[currentQ].fact}</p>
                </div>
              )}

              {showResult && (
                <Button onClick={nextQuestion} className="w-full bg-primary hover:bg-primary/90">
                  {currentQ === gameQuestions.length - 1 ? 'Xem Kết Quả' : 'Câu Tiếp Theo'}
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="border-primary/30 bg-card">
            <CardContent className="pt-8 text-center space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">Kết Quả Cuối Cùng</h3>
                <p className="text-5xl font-bold gradient-text">
                  {score} / {gameQuestions.length}
                </p>
              </div>
              <p className="text-lg text-muted-foreground">
                {score === gameQuestions.length
                  ? 'Tuyệt vời! Bạn là chuyên gia!'
                  : score >= 3
                  ? 'Rất tốt! Bạn có kiến thức vững chắc.'
                  : 'Hãy tiếp tục học tập để hiểu rõ hơn.'}
              </p>
              <Button onClick={restart} size="lg" className="w-full bg-primary hover:bg-primary/90">
                Chơi Lại
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
