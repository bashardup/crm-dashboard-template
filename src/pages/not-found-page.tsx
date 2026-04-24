import { Link } from "react-router-dom"
import { ArrowLeft, Home, LifeBuoy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-24">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary-50 dark:bg-primary-900/20 blur-3xl opacity-60" />
      </div>

      <div className="relative text-center max-w-lg">
        {/* 404 Number */}
        <div className="relative mb-6 select-none">
          <span
            className="text-[160px] md:text-[200px] font-bold leading-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-200) 0%, var(--color-primary-500) 50%, var(--color-primary-700) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
          {/* Floating badge */}
          <div className="absolute top-6 -right-4 md:right-0 rotate-12 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary/30">
            Page not found
          </div>
        </div>

        {/* Illustration – abstract geometric shapes */}
        <div className="relative mx-auto mb-10 h-32 w-56">
          {/* Ground shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-40 rounded-full bg-gray-200 dark:bg-gray-800 blur-sm" />

          {/* Main shape – floating card */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-44 h-24 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
            <div className="space-y-2 w-28">
              <div className="h-2 w-full rounded-full bg-primary-100 dark:bg-primary-900/40" />
              <div className="h-2 w-4/5 rounded-full bg-gray-100 dark:bg-gray-800" />
              <div className="h-2 w-3/5 rounded-full bg-gray-100 dark:bg-gray-800" />
              <div className="mt-3 h-5 w-16 rounded-lg bg-primary-200 dark:bg-primary-800/60" />
            </div>
          </div>

          {/* Orbit dots */}
          <div className="absolute top-0 left-4 size-3 rounded-full bg-primary-300 dark:bg-primary-600 animate-[float_2.5s_ease-in-out_infinite_0.5s]" />
          <div className="absolute top-4 right-6 size-2 rounded-full bg-primary-200 dark:bg-primary-700 animate-[float_2s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-8 right-2 size-4 rounded-full bg-primary-100 dark:bg-primary-800 animate-[float_3.5s_ease-in-out_infinite_0.2s]" />
        </div>

        {/* Text */}
        <div className="mb-10 space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Oops! This page got lost
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="default">
            <Link to="/">
              <Home className="size-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="default">
            <Link to="/support">
              <LifeBuoy className="size-4" />
              Contact support
            </Link>
          </Button>
        </div>

        {/* Back link */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          Go back to previous page
        </button>
      </div>

      {/* Bottom links */}
      <div className="relative mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
        {["Home", "Dashboard", "Support", "Privacy Policy", "Status"].map((link) => (
          <Link
            key={link}
            to={`/${link.toLowerCase().replace(" ", "-")}`}
            className="hover:text-foreground transition-colors"
          >
            {link}
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  )
}
