import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Handshake, Pencil, Sparkles, TrendingUp } from "lucide-react";
import Image from 'next/image';

export default function StudentDashboard() {
    const eduScore = 78; // Mock data

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">Bảng điều khiển Sinh viên</h1>
                <p className="text-muted-foreground">Chào mừng trở lại! Đây là tổng quan về hồ sơ EduTrust của bạn.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 bg-primary text-primary-foreground shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary-foreground/90"><Sparkles /> Điểm EduTrust của bạn</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div>
                            <p className="text-6xl font-bold">{eduScore}</p>
                            <p className="text-primary-foreground/80">Điểm số Tốt</p>
                        </div>
                        <Button variant="secondary" asChild>
                            <Link href="/student/assessment">
                                Cập nhật hồ sơ <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-center items-center text-center">
                    <CardHeader>
                        <CardTitle>Cơ hội đang chờ</CardTitle>
                        <CardDescription>Dựa trên điểm số của bạn</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-secondary-foreground">5+</p>
                        <p className="text-sm text-muted-foreground">Học bổng & Gói vay</p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Pencil className="text-accent"/> Đánh giá hồ sơ</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Cập nhật thông tin mới nhất để có điểm số chính xác nhất.</p>
                        <Button asChild className="w-full">
                            <Link href="/student/assessment">Bắt đầu đánh giá</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><TrendingUp className="text-accent"/> Cải thiện điểm số</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Nhận các đề xuất cá nhân hóa để nâng cao điểm EduTrust.</p>
                        <Button asChild className="w-full">
                            <Link href="/student/assessment">Xem đề xuất</Link>
                        </Button>
                    </CardContent>
                </Card>
                 <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Handshake className="text-accent"/> Tìm nhà tài trợ</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Khám phá các học bổng và gói vay phù hợp với bạn.</p>
                        <Button asChild className="w-full">
                            <Link href="#">Khám phá</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Học bổng nổi bật</CardTitle>
                    <CardDescription>Các cơ hội được đề xuất dựa trên hồ sơ của bạn.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-full">
                                    <GraduationCap className="w-6 h-6 text-secondary-foreground"/>
                                </div>
                                <div>
                                    <p className="font-semibold">Học bổng Vươn Tới Tương Lai</p>
                                    <p className="text-sm text-muted-foreground">Tổ chức ABC Foundation</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Xem chi tiết</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
                           <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary rounded-full">
                                    <GraduationCap className="w-6 h-6 text-secondary-foreground"/>
                                </div>
                                <div>
                                    <p className="font-semibold">Quỹ Khuyến học XYZ</p>
                                    <p className="text-sm text-muted-foreground">Công ty XYZ</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Xem chi tiết</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
