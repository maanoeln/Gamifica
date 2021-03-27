import React from 'react';
import TopHeaderComponent from '../components/TopHeaderComponent';
import history from '../routes/history';

const TopHeaderContainer = () => {
  const handleHome = () => history.push('/');

  return <TopHeaderComponent goToHome={handleHome} />;
};

export default TopHeaderContainer;
