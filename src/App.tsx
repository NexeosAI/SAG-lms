import { ThemeProvider } from '@/components/ui/theme-provider';
import { Layout } from '@/components/layout/Layout';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="scottish-lms-theme">
      <Layout>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-primary-blue">
            Welcome to Scottish AI Guy LMS
          </h1>
          <p className="text-lg text-muted-foreground">
            Master technical skills with our comprehensive Scottish-flavored courses.
          </p>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;