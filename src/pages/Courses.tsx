import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Courses() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Available Courses</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for course list */}
        <Card>
          <CardHeader>
            <CardTitle>Course Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Course description here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}