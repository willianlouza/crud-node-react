import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 left-0 bg-purple-800 p-4 shadow-md">
      <Link className="text-xl hover:text-sky-300" href="/">
        Início
      </Link>
    </header>
  );
}
