import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-wrap justify-between">
        <div className="w-full sm:w-auto sm:flex-grow-0">
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <ul className="list-none">
            <li className="mb-2">
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/register" className="hover:text-blue-400">
                Register
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/login" className="hover:text-blue-400">
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h2 className="text-lg font-bold mb-4">Copyright</h2>
          <p className="text-sm">&copy; 2023 MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
