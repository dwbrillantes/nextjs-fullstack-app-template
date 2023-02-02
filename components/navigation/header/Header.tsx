import AuthButton from '@/components/buttons/authButton/AuthButton';
import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="flex justify-start space-x-5 m-5 items-center">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/" className="hover:underline">
          Store
        </Link>
      </div>
      <div className="flex justify-end items-center space-x-5 m-5">
        <Link href="/" className="hover:underline hidden sm:inline">
          Gnauk
        </Link>
        <Link href="/" className="hover:underline hidden sm:inline">
          Images
        </Link>
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
