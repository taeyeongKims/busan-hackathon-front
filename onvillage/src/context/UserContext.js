import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  /* 로그인 */
  const login = async ({ loginId, password }) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        loginId: loginId,
        password: password,
      });

      if (response.data) {
        setUser(response.data);
        navigate('/');
      } else {
        console.log('유저 데이터가 없습니다.');
        return null;
      }
    } catch (error) {
      console.log('유저 정보 GET API 에러', error);
    }
  };

  /* 회원가입 */
  const signUp = async ({ userId, password, nickName }) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        userId: userId,
        password: password,
        nickName: nickName,
      });
      navigate('/');
    } catch (error) {
      console.log('사용자 세션 생성 요청 실패', error);
    }
  };

  return <UserContext.Provider value={{ user, setUser, login, signUp }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
