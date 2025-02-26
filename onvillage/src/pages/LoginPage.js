import { useState } from 'react';
import styles from './LoginPage.module.css';
import { useUser } from '../context/UserContext';
import Layout from '../components/layout/Layout';
import Logo from '../assets/Logo.png';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({ loginId: '', password: '' });
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ loginId: formData.loginId, password: formData.password });
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSignup = () => {
    navigate('/signup');
  };
  return (
    <Layout showNavBar={false} showHeader={false}>
      <div className={styles.loginHeader}>
        <IoIosArrowBack onClick={handleBack} />
        <p>로그인</p>
        <div></div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginText}>
            <h2 className={styles.loginTitle}>안녕하세요</h2>
            <div>
              <img src={Logo} />
              <h2 className={styles.loginTitle}>입니다</h2>
            </div>

            <p className={styles.loginSubtitle}>미션을 통해 숨겨진 관광 명소를 즐기는 재미, 이제 시작해 보세요!</p>
          </div>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div>
              <label htmlFor="id" className={styles.loginLabel}>
                아이디
              </label>
              <input
                id="loginId"
                type="id"
                placeholder="아이디를 입력하세요"
                value={formData.loginId}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div>
              <label htmlFor="password" className={styles.loginLabel}>
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </form>
          <ul className={styles.btnList}>
            <li className={styles.listItem}>아이디 찾기</li>
            <li className={styles.listItem}> 비밀번호 찾기</li>
            <li className={styles.listItem} onClick={handleSignup}>
              {' '}
              회원가입
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
