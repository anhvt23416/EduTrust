import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Landmark, Handshake, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import Image from 'next/image';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Điểm Tín dụng EduTrust",
    description: "Đánh giá tín dụng công bằng dựa trên thành tích học tập và tiềm năng phát triển, không chỉ dựa vào lịch sử tài chính.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    title: "Cơ Hội Học Bổng & Vay Vốn",
    description: "Kết nối sinh viên với các nhà tài trợ, mở ra cơ hội nhận học bổng và các gói vay ưu đãi phù hợp.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Đề xuất Cá nhân hóa",
    description: "Nhận các gợi ý khóa học, hoạt động ngoại khóa để cải thiện điểm EduTrust và nâng cao kỹ năng.",
  },
  {
    icon: <Landmark className="w-10 h-10 text-primary" />,
    title: "Xác thực bởi Trường học",
    description: "Hồ sơ học tập và hoạt động được xác thực bởi các trường đại học, tăng cường độ tin cậy.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-primary" />,
    title: "Cổng thông tin Nhà tài trợ",
    description: "Cung cấp cho nhà tài trợ một nền tảng để tìm kiếm và hỗ trợ các sinh viên tài năng một cách an toàn.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Kiến thức Tài chính",
    description: "Trang bị cho sinh viên những kiến thức và kỹ năng quản lý tài chính cá nhân hiệu quả.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-card">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold font-headline text-foreground">EduTrust</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/student/dashboard"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Sinh viên
          </Link>
          <Link
            href="/sponsor/dashboard"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Nhà tài trợ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline uppercase leading-[48px]">
                    Xây Dựng Tương Lai Tài Chính Vững Vàng Cho Sinh Viên
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    EduTrust là nền tảng tiên phong, sử dụng AI để đánh giá tín dụng sinh viên, kết nối họ với các cơ hội tài chính và giúp họ xây dựng một tương lai vững chắc.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/student/dashboard">Dành cho Sinh viên</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/sponsor/dashboard">Dành cho Nhà tài trợ</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://i.ibb.co/mVzjJTJ7/Edu-Trust-Graphics-1.png"
                width={632}
                height={564}
                alt="EduTrust Graphics"
                className="mx-auto rounded-xl object-cover w-full h-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tính năng chính</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Mở Khóa Tiềm Năng Của Bạn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Khám phá các công cụ và tài nguyên được thiết kế để hỗ trợ hành trình học tập và tài chính của bạn.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-card">
        <p className="text-xs text-muted-foreground">&copy; 2024 EduTrust. Mọi quyền được bảo lưu.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Điều khoản Dịch vụ
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Chính sách Bảo mật
          </Link>
        </nav>
      </footer>
    </div>
  );
}
