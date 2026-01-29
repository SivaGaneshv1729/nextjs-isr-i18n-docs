import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Zap, Box, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <header className="py-20 px-6 md:px-20 text-center flex flex-col items-center gap-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          <span>Powered by Next.js 16 & ISR</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          The Magic Library for Documentation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A high-performance, multi-language documentation site that updates instantly (ISR) and speaks everyone's language (i18n).
        </p>
        
        <div className="flex gap-4 mt-8">
          <Link href="/en/docs/v1/introduction" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
            Read the Docs <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/api-reference" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:bg-accent hover:text-accent-foreground font-medium transition-all">
            API Reference
          </Link>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works (Simply Explained)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <Box className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Docker (The Magic Lunchbox)</h3>
            <p className="text-muted-foreground">
              Like a lunchbox that keeps food tasting exactly the same anywhere. We put the code inside Docker so it runs perfectly on any computer.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">ISR (The Photocopier)</h3>
            <p className="text-muted-foreground">
              Instead of writing pages by hand every time (Slow), we make a "photocopy" (Static Page). If you fix a typo, we make a new photocopy in 60 seconds!
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">i18n (The Translator)</h3>
            <p className="text-muted-foreground">
              Like a universal translator badge. Click "Español", and we instantly swap all English words for Spanish ones using our dictionary.
            </p>
          </div>
        </div>
      </section>

      {/* Real World Examples */}
      <section className="py-20 px-6 md:px-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Real World Impact</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded text-red-600">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Netflix Help Center</h4>
                <p className="text-muted-foreground">When Netflix adds a feature, they need the help page updated INSTANTLY. They use ISR (like this project) to update just that one page without rebuilding their whole site.</p>
              </div>
            </div>
             <div className="flex gap-4 items-start">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded text-purple-600">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Stripe Documentation</h4>
                <p className="text-muted-foreground">Stripe serves docs in 30+ languages. They use i18n routing (like `/fr/docs`) to show the right language automatically to users in France.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2026 Documentation Project. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}
