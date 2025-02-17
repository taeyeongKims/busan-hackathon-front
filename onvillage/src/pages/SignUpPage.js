import { useState } from 'react';
import styles from './SignUpPage.module.css';
import { useUser } from '../context/UserContext';
import Layout from '../components/layout/Layout';
import Logo from '../assets/Logo.png';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
    nickName: '',
  });
  const { signup } = useUser();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    signup({ userId: formData.loginId, password: formData.password, nickName: formData.nickName });
  };

  return (
    <Layout showNavBar={false} showHeader={false}>
      <div className={styles.signupContainer}>
        <div className={styles.signupCard}>
          <img src={Logo} />
          <form onSubmit={handleSignup} className={styles.signupForm}>
            <div>
              <label htmlFor="loginId" className={styles.signupLabel}>
                아이디
              </label>
              <input
                id="loginId"
                type="text"
                placeholder="아이디를 입력하세요"
                value={formData.loginId}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div>
              <label htmlFor="password" className={styles.signupLabel}>
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

            <div>
              <label htmlFor="name" className={styles.signupLabel}>
                닉네임
              </label>
              <input
                id="nickName"
                type="text"
                placeholder="닉네임을 입력하세요"
                value={formData.nickName}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <button type="submit" className={styles.signupButton}>
              회원가입
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
