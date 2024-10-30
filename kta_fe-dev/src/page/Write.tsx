import React, { useLayoutEffect } from 'react';
import WriteForm from '../components/write/WriteForm';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const sessionUser = sessionStorage.getItem('user_id');
    if (!sessionUser) {
      return navigate('/login');
    }
  });

  return (
    <div>
      <WriteForm type={'write'} />
    </div>
  );
};

export default Write;
