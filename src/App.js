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
import {HOME_PATH, NEWS_PATH, COMMUNITY_PATH, SUPPORT_PATH} from "./helpers/constants"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NoContent } from './components/NoContent';

function App() {

  useEffect(() =>{
      SetInitialStateToLocalStorage()
  }, [])

  return(
    <>
      <Router>
        <Layout>
          <MenuLayout />
          <HeaderLayout />
          <Layout className="site-layout" style={{marginLeft: 200}}>
              <Switch>
              <Route exact path={HOME_PATH}>
                 <NoContent />
              </Route>
              <Route exact path={NEWS_PATH}>
                 {<ContentLayout />}
              </Route>
              <Route exact path={COMMUNITY_PATH}>
                 <NoContent />
              </Route>
              <Route exact path={SUPPORT_PATH}>
                 <NoContent />
              </Route>
            </Switch>
          </Layout>
          <FooterLayout />
        </Layout>

        

      </Router>
    </>
  );
}

export default App;


