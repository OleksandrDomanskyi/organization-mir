import React from 'react';
import { FC } from 'react';
import AppRouter from './components/AppRouter';
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles/main.scss";

const App: FC = () => {

  return (
    <>
      <AppRouter/>
    </>
  );
};

export default App;
