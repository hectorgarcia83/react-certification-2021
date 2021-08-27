import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import ThemeProvider from '../../state/Theme/ThemeProvider';
import VideoProvider from '../../state/Videos/VideoProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <VideoProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
          </Layout>
        </VideoProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
