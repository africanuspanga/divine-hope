import { Button } from "@/components/Button";
import { SunBurst } from "@/components/SunBurst";

export default function NotFound() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 sm:px-8 md:grid-cols-2">
        <div>
          <p className="font-script text-3xl text-sky">Page not found</p>
          <h1 className="mt-2 font-display text-6xl font-extrabold tracking-tight sm:text-7xl">
            Lost, but not without <span className="font-script text-sun">hope</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream/75">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="mt-8">
            <Button href="/" tone="sun">
              Back to Home
            </Button>
          </div>
        </div>
        <SunBurst className="mx-auto w-full max-w-sm" blocks={12} />
      </div>
    </section>
  );
}
