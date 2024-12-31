import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Blog() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Technical Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Placeholder for blog posts */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Post Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Blog post excerpt here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}