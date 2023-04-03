export default function Header() {
  return (
    <div className="flex justify-center">
      <header className="container flex justify-between items-center px-4 py-2">
        <div className="flex justify-center items-center bg-black text-yellow-300 font-sans font-black text-2xl rounded-full aspect-square w-16">
          RS
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#"
                className="text-base text-gray-700 hover:text-gray-900"
              >
                RS School
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-700 hover:text-gray-900"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-700 hover:text-gray-900"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-700 hover:text-gray-900"
              >
                Clubs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-700 hover:text-gray-900"
              >
                Heroes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-base text-gray-700 hover:text-gray-900"
              >
                Merch
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1D1B24"
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M3.2 12a8.8 8.8 0 1 1 17.6 0 8.8 8.8 0 0 1-17.6 0Zm6.055 6.658a7.227 7.227 0 0 1-3.428-2.95h2.68c.106.791.255 1.523.456 2.166.083.267.18.53.292.784Zm.867-2.95c.093.63.214 1.197.368 1.689.437 1.398.99 1.802 1.51 1.802.518 0 1.072-.404 1.508-1.802.154-.492.276-1.06.368-1.689h-3.754Zm3.92-1.6H9.957A31.683 31.683 0 0 1 9.89 12c0-.737.021-1.444.066-2.109h4.087c.044.665.065 1.372.065 2.11 0 .736-.02 1.443-.066 2.108Zm1.45 1.6a13.23 13.23 0 0 1-.457 2.166c-.083.267-.18.53-.291.784a7.227 7.227 0 0 0 3.428-2.95h-2.68Zm3.393-1.6h-3.24c.044-.681.063-1.39.063-2.109 0-.72-.019-1.427-.062-2.109h3.24a7.2 7.2 0 0 1 .313 2.11 7.2 7.2 0 0 1-.314 2.108Zm-.713-5.818a7.227 7.227 0 0 0-3.428-2.95c.112.254.208.518.292.784.2.644.35 1.375.456 2.166h2.68Zm-4.296 0a11.184 11.184 0 0 0-.368-1.689C13.072 5.204 12.518 4.8 12 4.8c-.519 0-1.072.405-1.509 1.802-.154.492-.275 1.06-.368 1.69h3.754Zm-5.37 0c.107-.791.256-1.522.457-2.166.083-.266.18-.53.292-.783a7.227 7.227 0 0 0-3.428 2.95h2.68Zm-3.393 1.6A7.199 7.199 0 0 0 4.8 12c0 .733.11 1.441.314 2.108h3.24A33.608 33.608 0 0 1 8.29 12c0-.72.02-1.427.063-2.109h-3.24Z"
            />
          </svg>

          <select className="relative before:content-['*'] before:block before:absolute before:left-2">
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </header>
    </div>
  );
}
