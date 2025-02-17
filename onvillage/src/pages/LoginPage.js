import { useState } from 'react';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({ loginId: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ userId: formData.loginId, password: formData.password });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>로그인</h2>
        <p className={styles.loginSubtitle}>미션을 통해 숨겨진 관광 명소를 즐기는 재미, 이제 시작해 보세요!</p>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div>
            <label htmlFor="id" className={styles.loginLabel}>
              이메일
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
      </div>
    </div>
  );
}
