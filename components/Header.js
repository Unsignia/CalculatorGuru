import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="bg-gray-200 lg:py-6 md:py-4">
        <ul className="flex justify-center">
          <li className="nav-li">
            <Link href="/">
              <a className="nav-left">HOME</a>
            </Link>
          </li>
          <li className="nav-li">
            <Link href="/contact">
              <a className="nav-right">CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
