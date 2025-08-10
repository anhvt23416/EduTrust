import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";

const students = [
  { id: "SV001", score: 92, major: "Khoa học Máy tính", status: "Đang tìm kiếm" },
  { id: "SV002", score: 85, major: "Quản trị Kinh doanh", status: "Đã được tài trợ" },
  { id: "SV003", score: 88, major: "Kỹ thuật Điện", status: "Đang tìm kiếm" },
  { id: "SV004", score: 78, major: "Ngôn ngữ Anh", status: "Đang tìm kiếm" },
  { id: "SV005", score: 95, major: "Y Đa khoa", status: "Đã được tài trợ" },
  { id: "SV006", score: 81, major: "Thiết kế Đồ họa", status: "Đang tìm kiếm" },
];

export default function SponsorDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Bảng điều khiển Nhà tài trợ</h1>
        <p className="text-muted-foreground">Tìm kiếm và hỗ trợ những sinh viên tài năng và tiềm năng nhất.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tổng số sinh viên</CardTitle>
            <CardDescription>Số lượng hồ sơ có sẵn trên nền tảng.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,250+</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Đã tài trợ</CardTitle>
            <CardDescription>Số sinh viên bạn đã hỗ trợ thành công.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vốn đã giải ngân</CardTitle>
            <CardDescription>Tổng số tiền đã được trao cho sinh viên.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">350Tr+</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hồ sơ sinh viên</CardTitle>
          <CardDescription>Danh sách các sinh viên có điểm EduTrust cao nhất.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã Sinh viên</TableHead>
                <TableHead className="text-center">Điểm EduTrust</TableHead>
                <TableHead>Chuyên ngành</TableHead>
                <TableHead className="text-center">Trạng thái</TableHead>
                <TableHead className="text-right">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell className="text-center font-semibold text-primary">{student.score}</TableCell>
                  <TableCell>{student.major}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={student.status === "Đang tìm kiếm" ? "default" : "secondary"} className={student.status === "Đang tìm kiếm" ? "bg-accent text-accent-foreground" : ""}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">Xem chi tiết</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
