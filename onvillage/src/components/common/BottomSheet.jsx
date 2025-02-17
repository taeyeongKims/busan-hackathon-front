import { useState } from 'react';
import { AnimatePresence } from 'framer-motion'; // 애니메이션을 위한 라이브러리
import styled from 'styled-components'; // 스타일링 라이브러리

const categories = [
  '감성샷', '전통문화', '바다뷰', '핫플', '먹거리',
  '가족코스', '예술전시', '힐링산책', '액티비티', '야경명소'
];

const sortOptions = ['최신순', '좋아요순', '인증수'];

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 400px;
  margin: 0 auto;
`;

const Sheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  z-index: 20;
  width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 12px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 12px;
  margin-top: 20px;
  background-color: #2D5B7F;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
`;

const BottomSheet = ({ isOpen, toggleSheet, type, onSelect }) => {
  const handleSelect = (value) => {
    console.log(`선택한 값: ${value}`);
    if (typeof onSelect === 'function') {
      onSelect(value);  // 선택된 값을 부모로 전달
    }
    toggleSheet();  // BottomSheet 닫기
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay onClick={toggleSheet} />
          <Sheet
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Header>
              <div>{type === 'sort' ? '정렬기준 선택' : '카테고리 선택'}</div>
            </Header>
            <Content>
              {type === 'sort' ? (
                sortOptions.map((option) => (
                  <Button key={option} onClick={() => handleSelect(option)}>
                    {option}
                  </Button>
                ))
              ) : (
                categories.map((category) => (
                  <Button key={category} onClick={() => handleSelect(category)}>
                    {category}
                  </Button>
                ))
              )}
            </Content>
            <CloseButton onClick={toggleSheet}>닫기</CloseButton>
          </Sheet>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;