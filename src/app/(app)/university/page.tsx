import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, UploadCloud } from "lucide-react";
import Image from "next/image";

export default function UniversityPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Cổng thông tin Trường Đại học</h1>
        <p className="text-muted-foreground">Hợp tác cùng EduTrust để nâng cao cơ hội cho sinh viên của bạn.</p>
      </div>

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
                 <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl">Chung tay vì một thế hệ tương lai vững mạnh</CardTitle>
                    <CardDescription>
                    EduTrust cung cấp một cơ chế an toàn và hiệu quả để các trường đại học xác thực hồ sơ học tập và hoạt động ngoại khóa của sinh viên. Việc này không chỉ giúp tăng cường tính minh bạch và độ tin cậy của điểm EduTrust mà còn mở ra nhiều cơ hội tài chính hơn cho sinh viên của bạn.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">Tăng cường uy tín</h4>
                                <p className="text-sm text-muted-foreground">Nâng cao uy tín của nhà trường khi tham gia vào một hệ thống minh bạch, hiện đại.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">Mở rộng cơ hội cho sinh viên</h4>
                                <p className="text-sm text-muted-foreground">Giúp sinh viên dễ dàng tiếp cận các nguồn học bổng và vay vốn ưu đãi.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-semibold">Quy trình đơn giản</h4>
                                <p className="text-sm text-muted-foreground">Hệ thống xác thực được thiết kế đơn giản, an toàn và tiết kiệm thời gian.</p>
                            </div>
                        </li>
                    </ul>
                    <Button className="mt-8">Liên hệ hợp tác</Button>
                </CardContent>
            </div>
             <div className="bg-muted hidden md:block">
                 <Image 
                    src="https://placehold.co/600x800.png"
                    width={600}
                    height={800}
                    alt="University"
                    data-ai-hint="university campus modern"
                    className="object-cover w-full h-full"
                 />
            </div>
        </div>
      </Card>
      
    </div>
  );
}
