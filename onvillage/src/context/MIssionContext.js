import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MissionContext = createContext(null);

export const MissionProvider = ({ children }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  /* 미션 리스트 조회 */
  const getMissionList = async () => {
    try {
      const response = await axios.get(`${apiUrl}/mission`);
      return response.data;
    } catch (error) {
      console.log('미션 정보 GET API 에러', error);
    }
  };

  /* 미션 생성 */
  const createMission = async ({
    userId,
    title,
    content,
    category,
    image,
    zipcode = '12023',
    address = '경기도 남양주시 송산로339번길 25, 3층(별내동)',
    detailAddress = '101호',
    sido = '경기',
    sigugun = '남양주시',
    dong = '별내동',
  }) => {
    try {
      const response = await axios.post(`${apiUrl}/mission/create`, {
        userId: userId,
        title: title,
        content: content,
        category: category,
        image: image,
        zipcode: zipcode,
        address: address,
        detailAddress: detailAddress,
        sido: sido,
        sigugun: sigugun,
        dong: dong,
      });
      navigate('/');
    } catch (error) {
      console.log('미션 생성 요청 실패', error);
    }
  };

  /* 미션 상세 조회 */
  const getMissionInfo = async ({ missionId }) => {
    try {
      const response = await axios.get(`${apiUrl}/mission/${missionId}`);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log('미션 상세 정보 GET API 에러', error);
    }
  };

  /* 미션 인증 리스트 조회 */
  const getMissionSuccessList = async ({ missionId }) => {
    try {
      const response = await axios.get(`${apiUrl}/mission/${missionId}/achievement`);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log('미션 인증 리스트 GET API 에러', error);
    }
  };

  return (
    <MissionContext.Provider value={{ getMissionList, createMission, getMissionInfo, getMissionSuccessList }}>
      {children}
    </MissionContext.Provider>
  );
};

export const useMissions = () => {
  const context = useContext(MissionContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
