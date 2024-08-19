import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>这是主页</h1>
      <Link href="/dashboard" className="text-lg font-bold mt-10">
        跳转到dashboard页面
      </Link>
    </main>
  );
}
