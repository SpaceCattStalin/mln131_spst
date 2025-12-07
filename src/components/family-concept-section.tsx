/* eslint-disable react/no-unescaped-entities */
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, MapPin, Settings, Users, TrendingUp, BookOpen, Shield } from 'lucide-react';

export function FamilyConceptSection() {
  return (
    <section id="family-concept" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Chương 7 - B. Nội dung</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">I. Khái niệm, vị trí và chức năng của gia đình</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Three main cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Khái niệm gia đình */}
          <Card className="border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/60 hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-red-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-1">Phần 1</div>
                  <CardTitle className="text-xl lg:text-2xl">Khái niệm gia đình</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-foreground">
                <p className="text-base leading-relaxed">
                  Theo quan điểm của chủ nghĩa xã hội khoa học, <strong className="text-primary">gia đình</strong> là
                  một tổ chức xã hội cơ bản, được hình thành trên cơ sở quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng,
                  có chức năng tái sản xuất con người và duy trì các mối quan hệ xã hội.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Quan điểm chính thức
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    Trong các văn kiện của Đảng, gia đình được khẳng định là <strong>tế bào của xã hội</strong>, là môi
                    trường quan trọng hình thành, nuôi dưỡng và giáo dục nhân cách, bảo tồn và phát huy văn hóa truyền
                    thống, chống lại tệ nạn xã hội.
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  Gia đình không phải là một tổ chức bất biến, mà là{' '}
                  <strong className="text-primary">sản phẩm của điều kiện kinh tế-xã hội</strong>. Cấu trúc và hình thức
                  của gia đình thay đổi theo từng giai đoạn lịch sử, phụ thuộc vào phương thức sản xuất và quan hệ sản
                  xuất của xã hội.
                </p>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Thực trạng ở Việt Nam
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="bg-white dark:bg-amber-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-amber-600 dark:text-amber-400">64,5%</div>
                      <div className="text-xs text-amber-700 dark:text-amber-300">Hộ 2-4 người</div>
                    </div>
                    <div className="bg-white dark:bg-amber-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-amber-600 dark:text-amber-400">10,4%</div>
                      <div className="text-xs text-amber-700 dark:text-amber-300">Hộ độc thân</div>
                    </div>
                  </div>
                  <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                    Khái niệm gia đình ngày nay chủ yếu là <strong>gia đình hạt nhân</strong>, thậm chí có xu hướng hộ
                    độc thân – thể hiện sự biến đổi trong bối cảnh hiện đại hóa.
                  </p>
                </div>
                <p className="text-base leading-relaxed">
                  Trong xã hội xã hội chủ nghĩa, gia đình được xây dựng trên nguyên tắc{' '}
                  <strong className="text-primary">bình đẳng, đoàn kết, tương trợ</strong> giữa các thành viên, không
                  còn bị chi phối bởi quan hệ sở hữu tư nhân về tư liệu sản xuất.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vị trí của gia đình */}
          <Card className="border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/60 hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-1">Phần 2</div>
                  <CardTitle className="text-xl lg:text-2xl">Vị trí của gia đình</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-foreground">
                <p className="text-base leading-relaxed">
                  Gia đình có <strong className="text-primary">vị trí trung tâm</strong> trong cấu trúc xã hội, là tế
                  bào cơ bản của xã hội. Nó đóng vai trò cầu nối giữa cá nhân và xã hội, là nơi đầu tiên hình thành nhân
                  cách, giá trị và ý thức xã hội của con người.
                </p>

                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      2.1. Gia đình gắn với tái sản xuất dân số quốc gia
                    </p>
                    <div className="bg-white dark:bg-green-900/20 p-3 rounded mb-2">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">101+ triệu</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Dân số Việt Nam (2024)</div>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-200 leading-relaxed">
                      Vẫn duy trì <strong>cơ cấu dân số vàng</strong> – toàn bộ quy mô và chất lượng nguồn nhân lực này
                      được "sản xuất" và nuôi dưỡng trước hết trong từng gia đình cụ thể.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      2.2. Gia đình là "tế bào" và "nền tảng đạo đức"
                    </p>
                    <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
                      Trong tư tưởng Hồ Chí Minh và các văn kiện của Đảng, gia đình là tế bào của xã hội, là nền tảng
                      đạo đức. Gia đình ổn định thì xã hội ổn định. Mỗi gia đình ấm no, tiến bộ, hạnh phúc sẽ là một{' '}
                      <strong>"viên gạch"</strong>
                      xây dựng xã hội xã hội chủ nghĩa.
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed">
                  Trong mối quan hệ với nhà nước và xã hội, gia đình vừa là{' '}
                  <strong className="text-primary">đối tượng</strong> của các chính sách xã hội, vừa là{' '}
                  <strong className="text-primary">chủ thể</strong> tham gia vào quá trình xây dựng và phát triển xã hội
                  mới.
                </p>
                <p className="text-base leading-relaxed">
                  Vị trí của gia đình trong xã hội xã hội chủ nghĩa được nâng cao, trở thành{' '}
                  <strong className="text-primary">đối tác bình đẳng</strong>
                  trong việc giáo dục thế hệ trẻ và xây dựng xã hội mới.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Chức năng của gia đình */}
          <Card className="border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/60 hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Settings className="w-7 h-7 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-1">Phần 3</div>
                  <CardTitle className="text-xl lg:text-2xl">Chức năng của gia đình</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-foreground">
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    3.1. Chức năng tái sản xuất dân số
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white dark:bg-indigo-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">+4,9 triệu</div>
                      <div className="text-xs text-indigo-700 dark:text-indigo-300">Tăng dân số (2019-2024)</div>
                    </div>
                    <div className="bg-white dark:bg-indigo-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">111,4/100</div>
                      <div className="text-xs text-indigo-700 dark:text-indigo-300">Tỷ số giới tính</div>
                    </div>
                  </div>
                  <p className="text-xs text-indigo-800 dark:text-indigo-200 leading-relaxed">
                    Tốc độ tăng 0,99%/năm, vẫn duy trì cơ cấu dân số vàng. Tỷ số giới tính cho thấy vẫn còn tư tưởng
                    "trọng nam khinh nữ" trong một bộ phận gia đình.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="text-sm font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    3.2. Chức năng kinh tế, tổ chức đời sống vật chất
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white dark:bg-orange-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-orange-600 dark:text-orange-400">15,5h</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">Phụ nữ/tuần</div>
                    </div>
                    <div className="bg-white dark:bg-orange-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-orange-600 dark:text-orange-400">8,6h</div>
                      <div className="text-xs text-orange-700 dark:text-orange-300">Nam giới/tuần</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-orange-900/20 p-2 rounded text-center mb-2">
                    <div className="text-lg font-bold text-orange-600 dark:text-orange-400">87%</div>
                    <div className="text-xs text-orange-700 dark:text-orange-300">Phụ nữ chịu trách nhiệm chính</div>
                  </div>
                  <p className="text-xs text-orange-800 dark:text-orange-200 leading-relaxed">
                    Phản ánh vai trò kinh tế của gia đình và vấn đề bất bình đẳng giới trong phân công lao động gia
                    đình.
                  </p>
                </div>

                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg border-l-4 border-teal-500">
                  <p className="text-sm font-semibold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    3.3. Chức năng giáo dục – xã hội hóa
                  </p>
                  <p className="text-xs text-teal-800 dark:text-teal-200 leading-relaxed">
                    Nhà nước coi gia đình là <strong>"trường học đầu đời"</strong>. Trong gia đình, trẻ em học những
                    chuẩn mực đầu tiên về yêu thương, trách nhiệm, kỷ luật. Nhiều chương trình "gia đình học tập", "dòng
                    họ khuyến học" đã được triển khai.
                  </p>
                </div>

                <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-lg border-l-4 border-rose-500">
                  <p className="text-sm font-semibold text-rose-900 dark:text-rose-100 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    3.4. Chức năng tâm lý – tình cảm, duy trì trật tự xã hội
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white dark:bg-rose-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-rose-600 dark:text-rose-400">32K</div>
                      <div className="text-xs text-rose-700 dark:text-rose-300">Vụ ly hôn (2023)</div>
                    </div>
                    <div className="bg-white dark:bg-rose-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-rose-600 dark:text-rose-400">2,2 triệu</div>
                      <div className="text-xs text-rose-700 dark:text-rose-300">Người ly hôn/ly thân</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white dark:bg-rose-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-rose-600 dark:text-rose-400">63%</div>
                      <div className="text-xs text-rose-700 dark:text-rose-300">Phụ nữ bị bạo lực</div>
                    </div>
                    <div className="bg-white dark:bg-rose-900/20 p-2 rounded text-center">
                      <div className="text-lg font-bold text-rose-600 dark:text-rose-400">3.200</div>
                      <div className="text-xs text-rose-700 dark:text-rose-300">Vụ bạo lực (2023)</div>
                    </div>
                  </div>
                  <p className="text-xs text-rose-800 dark:text-rose-200 leading-relaxed">
                    Nếu gia đình không thực hiện tốt chức năng này, nó có thể trở thành nơi phát sinh mâu thuẫn, vi phạm
                    nhân quyền, ảnh hưởng đến sự ổn định xã hội.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary section */}
        <Card className="border-primary/40 bg-linear-to-br from-card/90 to-primary/5 backdrop-blur-sm shadow-xl mt-20">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Tóm tắt</CardTitle>
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
          </CardHeader>
          <CardContent>
            <p className="text-base text-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Gia đình trong chủ nghĩa xã hội khoa học được hiểu là một tổ chức xã hội động, có vị trí trung tâm trong
              cấu trúc xã hội và thực hiện nhiều chức năng quan trọng. Sự thay đổi của gia đình phản ánh sự phát triển
              của xã hội, từ gia đình tư bản chủ nghĩa dựa trên sở hữu tư nhân sang gia đình xã hội chủ nghĩa dựa trên
              bình đẳng và đoàn kết. Việc hiểu rõ khái niệm, vị trí và chức năng của gia đình là cơ sở để xây dựng các
              chính sách xã hội phù hợp, góp phần giải phóng con người và xây dựng xã hội mới.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
