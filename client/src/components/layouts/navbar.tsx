import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 left-0 bg-sky-800 p-4">
      <Link className="text-xl hover:text-gray-300" href="/">Início</Link>
    </header>
  );
}
