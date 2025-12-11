import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const features: { title: string; description: string }[] = [
    {
      title: "Next.js App Router",
      description: "File-based routing, nested layouts, and server components.",
    },
    {
      title: "TypeScript",
      description: "Strict mode with path aliases and sensible tsconfig setup.",
    },
    {
      title: "Tailwind CSS v4",
      description: "Utility-first styling with a minimal, modern config.",
    },
    {
      title: "shadcn/ui primitives",
      description: "Pre-configured Button, Form, and Sonner components.",
    },
    {
      title: "Theme system",
      description: "Light, dark, and system themes via next-themes with a toggle.",
    },
    {
      title: "Toasts (Sonner)",
      description: "Global Toaster wired in root layout with rich icons and theming.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-16 px-6 py-20">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js"
              width={96}
              height={20}
              priority
            />
            <span className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
              Starter Template
            </span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A clean Next.js starter to build from
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Minimal defaults, TypeScript, Tailwind CSS, and sensible project structure so you can focus on shipping
            features—not setup. Use this as your foundation and grow it as your app evolves.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">Next.js App Router</span>
            <span className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">TypeScript</span>
            <span className="rounded-full border border-zinc-300 px-3 py-1 dark:border-zinc-700">Tailwind CSS v4</span>
          </div>

          <div className="pt-2">
            <ThemeToggle />
          </div>
        </section>

        {/* Features (empty for now) */}
        <section>
          <h2 className="mb-3 text-2xl font-semibold">Features</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.description}</p>
              </li>
            ))}
          </ul>
          {features.length === 0 && (
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              No features added yet. We’ll add them here as we build.
            </p>
          )}
        </section>

        {/* Getting started */}
        <section className="mt-auto rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold">Get started</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Open src/app/page.tsx and start editing.</li>
            <li>Run npm run dev and visit http://localhost:3000.</li>
            <li>Add your first feature to the list above.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
