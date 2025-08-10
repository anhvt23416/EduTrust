import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, DollarSign, PiggyBank, BarChart } from "lucide-react";

const resources = [
  {
    title: "5 Mẹo Lập Ngân Sách Cho Sinh Viên",
    description: "Học cách quản lý chi tiêu hiệu quả khi còn ngồi trên ghế nhà trường để không bao giờ 'viêm màng túi'.",
    icon: <PiggyBank className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/400x200.png",
    aiHint: "saving money piggybank",
    link: "#",
  },
  {
    title: "Tìm Hiểu Về Đầu Tư Cơ Bản",
    description: "Bắt đầu hành trình đầu tư của bạn với những khái niệm đơn giản và dễ hiểu nhất.",
    icon: <BarChart className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/400x200.png",
    aiHint: "investment chart grow",
    link: "#",
  },
  {
    title: "Xây Dựng Điểm Tín Dụng Tốt Từ Sớm",
    description: "Tại sao điểm tín dụng lại quan trọng và làm thế nào để xây dựng một lịch sử tín dụng tốt ngay từ bây giờ.",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/400x200.png",
    aiHint: "credit score report",
    link: "#",
  },
  {
    title: "Cẩm Nang Các Loại Học Bổng",
    description: "Khám phá các loại học bổng khác nhau và cách để chuẩn bị một bộ hồ sơ ấn tượng.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    image: "https://placehold.co/400x200.png",
    aiHint: "scholarship graduation cap",
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Tài nguyên học tập</h1>
        <p className="text-muted-foreground">Nâng cao kiến thức và kỹ năng tài chính của bạn với các bài viết từ chuyên gia.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                {resource.icon}
                <CardTitle>{resource.title}</CardTitle>
              </div>
               <Image
                src={resource.image}
                width="400"
                height="200"
                alt={resource.title}
                data-ai-hint={resource.aiHint}
                className="w-full aspect-video object-cover rounded-md"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href={resource.link}>Đọc thêm</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
