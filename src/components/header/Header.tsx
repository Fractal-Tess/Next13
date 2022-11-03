import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '$components/nav/Nav';
import ThemeToggle from '$components/theme/ThemeToggle';

export default function Header() {
  return (
    <div className="bg-base-100 h-12 shadow-2xl flex justify-between px-4 items-center">
      <Link href="/" className="h-full">
        <a className="h-8 w-8 relative">
          <Image
            priority
            alt="Mountains"
            src="/logo.png"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>

      <Nav />

      <div className="[&>*:hover]:text-primary [&>*]:duration-300 [&>*]:transition-colors flex items-center space-x-2">
        <Link href="https://github.com/Fractal-Tess/Turborepo-React">
          <a target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="h-6" />
          </a>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
