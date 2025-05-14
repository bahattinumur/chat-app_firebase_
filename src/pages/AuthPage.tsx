import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/config';

const AuthPage = ({ setIsAuth }) => {
  // Giriş butonuna tıklanırsa
  const handleClick = () => {
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa çalışır
      .then((data) => {
        console.log(data.user);

        // kullanıcını yetkisini true'ya çek
        setIsAuth(true);

        // kullanıcı bilgisini local'de sakla
        localStorage.setItem('token', data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Room</h1>
        <p>Sign in to Continue</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
