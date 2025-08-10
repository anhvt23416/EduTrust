"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { assessCreditworthiness, type AssessCreditworthinessOutput } from "@/ai/flows/assess-creditworthiness";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Loader2, Sparkles, TrendingUp, BookOpen } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const formSchema = z.object({
  gpa: z.number().min(0).max(4).describe("Điểm trung bình học tập của sinh viên."),
  learningBehavior: z.string().min(10, { message: "Vui lòng mô tả chi tiết hơn." }).describe("Mô tả về thói quen và sự tham gia học tập của sinh viên."),
  socialActivities: z.string().min(10, { message: "Vui lòng mô tả chi tiết hơn." }).describe("Chi tiết về sự tham gia của sinh viên vào các hoạt động xã hội và cộng đồng."),
  spendingHabits: z.string().min(10, { message: "Vui lòng mô tả chi tiết hơn." }).describe("Thông tin về thói quen chi tiêu và quản lý tài chính của sinh viên."),
});

type FormValues = z.infer<typeof formSchema>;

export default function AssessmentClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AssessCreditworthinessOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gpa: 3.0,
      learningBehavior: "",
      socialActivities: "",
      spendingHabits: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const assessmentResult = await assessCreditworthiness(data);
      setResult(assessmentResult);
    } catch (e) {
      setError("Đã xảy ra lỗi khi đánh giá. Vui lòng thử lại.");
      console.error(e);
    }
    setIsLoading(false);
  };
  
  const chartData = result ? [{ name: 'EduScore', value: result.eduScore }, { name: 'Remaining', value: 100 - result.eduScore }] : [];
  const COLORS = ['hsl(var(--primary))', 'hsl(var(--border))'];

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary"/>
            Đánh giá Tín dụng EduTrust
          </CardTitle>
          <CardDescription>
            Cung cấp thông tin của bạn để AI của chúng tôi phân tích và tính toán điểm EduTrust.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!result && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Điểm GPA (Thang 4)</FormLabel>
                      <FormControl>
                        <div>
                            <Input 
                                type="number" 
                                value={field.value}
                                onChange={e => field.onChange(parseFloat(e.target.value) || 0)}
                                className="w-24 mb-2"
                                step="0.1"
                            />
                            <Slider
                                defaultValue={[3.0]}
                                max={4}
                                step={0.1}
                                onValueChange={(value) => field.onChange(value[0])}
                                value={[field.value]}
                            />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="learningBehavior"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hành vi học tập</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Mô tả thói quen học tập, sự chuyên cần, các khóa học online đã tham gia..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Càng chi tiết, điểm đánh giá càng chính xác.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="socialActivities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hoạt động xã hội</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Mô tả các hoạt động tình nguyện, câu lạc bộ, các vị trí lãnh đạo đã nắm giữ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="spendingHabits"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Thói quen chi tiêu</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Mô tả cách bạn quản lý tài chính, có tiết kiệm không, các khoản chi tiêu chính..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Đang đánh giá...
                    </>
                  ) : (
                    "Gửi đánh giá"
                  )}
                </Button>
              </form>
            </Form>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Lỗi!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="flex flex-col items-center text-center animate-in fade-in-50 duration-500">
               <h3 className="text-xl font-semibold mb-4">Kết quả đánh giá EduTrust của bạn</h3>
              <div className="w-64 h-64 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            startAngle={90}
                            endAngle={450}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-primary">{result.eduScore}</span>
                    <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
              </div>

              <div className="w-full text-left mt-8 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-secondary" /> Giải thích điểm số</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{result.scoreExplanation}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-secondary" /> Đề xuất cải thiện</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-muted-foreground">{result.recommendations}</p>
                  </CardContent>
                </Card>
              </div>

              <Button onClick={() => { setResult(null); form.reset(); }} className="mt-8">
                Thực hiện lại đánh giá
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
