import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'
import Layout from 'antd/lib/layout/layout';
import { MenuLayout } from './Layouts/Menu/MenuLayout'
import { HeaderLayout } from './Layouts/Menu/HeaderLayout/HeaderLayout';
import { ContentLayout } from './Layouts/Menu/ContentLayout/ContentLayout';
import { FooterLayout } from './Layouts/FooterLayout/FooterLayout';
import { SetInitialStateToLocalStorage } from './helpers/functions';

function App() {

  useEffect(() =>{
      SetInitialStateToLocalStorage()
  }, [])

  return(
    <>
       <Layout>
          <HeaderLayout />
          <MenuLayout />
          <ContentLayout />
          <FooterLayout />
       </Layout>
    </>
  );
}

export default App;

