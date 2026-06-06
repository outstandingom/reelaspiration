import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter,
  HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-gold-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Scene not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This frame doesn't exist. Let's get you back to the studio.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dinesh Jagwani Cinematography Academy Indore | Best Film & Photography Institute" },
      { name: "description", content: "Best Cinematography Academy in Indore offering Photography, Filmmaking, Video Editing & Content Creator courses with practical training, real shoots and industry mentorship." },
      { name: "author", content: "Dinesh Jagwani Cinematography Academy" },
      { name: "keywords", content: "Best Cinematography Academy in Indore, Photography Course Indore, Cinematography Course Indore, Filmmaking Institute Indore, Video Editing Course Indore, Photography Academy Indore" },
      { property: "og:title", content: "Dinesh Jagwani Cinematography Academy Indore | Best Film & Photography Institute" },
      { property: "og:description", content: "Best Cinematography Academy in Indore offering Photography, Filmmaking, Video Editing & Content Creator courses with practical training, real shoots and industry mentorship." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dinesh Jagwani Cinematography Academy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dinesh Jagwani Cinematography Academy Indore | Best Film & Photography Institute" },
      { name: "twitter:description", content: "Best Cinematography Academy in Indore offering Photography, Filmmaking, Video Editing & Content Creator courses with practical training, real shoots and industry mentorship." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e77be1a8-eb9e-4ac6-990c-2ef1fcee41b9/id-preview-b966f084--c7c5d7d3-6d05-44f3-bdac-0d7f7aca9118.lovable.app-1780599538166.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e77be1a8-eb9e-4ac6-990c-2ef1fcee41b9/id-preview-b966f084--c7c5d7d3-6d05-44f3-bdac-0d7f7aca9118.lovable.app-1780599538166.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Dinesh Jagwani Cinematography Academy",
        description: "Premier cinematography, photography and filmmaking academy in Indore.",
        address: { "@type": "PostalAddress", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
        areaServed: "Indore",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
