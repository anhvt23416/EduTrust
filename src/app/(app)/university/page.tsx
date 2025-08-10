
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldAlert, Users, FileCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const verificationRequests = [
  { id: "SV001", name: "Nguyễn Văn An", requestDate: "10/08/2024", gpa: true, activities: false, conduct: true },
  { id: "SV002", name: "Trần Thị Bình", requestDate: "09/08/2024", gpa: false, activities: false, conduct: false },
  { id: "SV003", name: "Lê Văn Cường", requestDate: "08/08/2024", gpa: true, activities: true, conduct: false },
  { id: "SV004", name: "Phạm Thị Dung", requestDate: "07/08/2024", gpa: true, activities: true, conduct: true, allVerified: true },
  { id: "SV005", name: "Hoàng Văn Em", requestDate: "06/08/2024", gpa: false, activities: true, conduct: true },
];

export default function UniversityDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Bảng điều khiển Trường Đại học</h1>
        <p className="text-muted-foreground">Quản lý và xác thực thông tin sinh viên.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sinh viên đang vay</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Tổng số sinh viên đang nhận hỗ trợ tài chính</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hồ sơ cần xác thực</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58</div>
            <p className="text-xs text-muted-foreground">Yêu cầu đang chờ xử lý từ sinh viên</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hồ sơ đã xác thực</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,567</div>
            <p className="text-xs text-muted-foreground">Tổng số hồ sơ đã được nhà trường xác thực</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Danh sách chờ xác thực</CardTitle>
          <CardDescription>
            Xem và xác thực thông tin GPA, hoạt động ngoại khóa, và điểm rèn luyện cho sinh viên.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã SV</TableHead>
                <TableHead>Tên Sinh viên</TableHead>
                <TableHead>Ngày yêu cầu</TableHead>
                <TableHead className="text-center">GPA</TableHead>
                <TableHead className="text-center">HĐNK</TableHead>
                <TableHead className="text-center">Điểm rèn luyện</TableHead>
                <TableHead className="text-right">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {verificationRequests.map((req) => (
                <TableRow key={req.id} className={req.allVerified ? "bg-green-100/50" : ""}>
                  <TableCell className="font-medium">{req.id}</TableCell>
                  <TableCell>{req.name}</TableCell>
                  <TableCell>{req.requestDate}</TableCell>
                  <TableCell className="text-center">
                    {req.gpa ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <Button size="sm" variant="outline">Xác thực</Button>}
                  </TableCell>
                  <TableCell className="text-center">
                    {req.activities ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <Button size="sm" variant="outline">Xác thực</Button>}
                  </TableCell>
                   <TableCell className="text-center">
                    {req.conduct ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <Button size="sm" variant="outline">Xác thực</Button>}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant={req.allVerified ? "secondary" : "default"}>
                        {req.allVerified ? "Đã xong" : "Xem chi tiết"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Cập nhật kết quả thi</CardTitle>
          <CardDescription>
            Cập nhật kết quả thi cho sinh viên đang trong quá trình trả nợ vay để điều chỉnh lịch trình trả nợ.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Button>Cập nhật hàng loạt</Button>
        </CardContent>
      </Card>
    </div>
  );
}
