import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl text-rose-500">My MLB HQ</h1>
      <p className="text-lg text-slate-600">
        Generated by JWH using create next app
      </p>
      <Link
        href="/teams"
        className="text-xl font-extrabold uppercase text-[blue]"
      >
        Get Started
      </Link>
    </div>
  );
}
