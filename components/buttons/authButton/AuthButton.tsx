import AuthContext from '@/context/auth/AuthContext';
import { useContext } from 'react';

export interface IAuthButton extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<IAuthButton> = ({ className, ...buttonProps }) => {
  const { authenticated, login, logOut } = useContext(AuthContext);
  return (
    <button
      onClick={authenticated ? logOut : login}
      className="border-1 p2 px-5 sm:px6 bg-blue-500 rounded text-white hover:bg-blue-600 p-1"
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  );
};

export default AuthButton;
