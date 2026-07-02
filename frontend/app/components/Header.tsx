import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Programs", href: "/programs" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Documents", href: "/documents" },
  { label: "Insights", href: "/insights" },
];

export default function Header({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-8 h-36 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo/logo1.png"
            alt="Sidibe Enterprises"
            width={362}
            height={271}
            className="h-28 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === active ? "text-blue-600" : "text-slate-950"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/sign-in"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
