import Link from 'next/link';
import { useRouter } from 'next/router';

type LinkType = {
  to: string;
  text: string;
};

const navLinks: LinkType[] = [
  { text: 'Home', to: '/' },
  { text: 'Blog', to: '/blog' },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' },
  { text: 'Does not exist', to: '/foo-spam-eggs' }
];

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex space-x-4 text-primary-content font-bold text-lg">
        {navLinks.map(({ text, to }, i) => {
          return (
            <li key={i}>
              <Link href={to}>
                <a
                  className={
                    (router.pathname === to
                      ? 'border-b-4 border-primary'
                      : '') + ' px-1'
                  }
                >
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
