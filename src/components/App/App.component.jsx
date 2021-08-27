import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoDetail from '../../pages/VideoDetail';
import Favorites from '../../pages/Favorites';
import FavoriteVideoDetail from '../../pages/FavoriteVideoDetail';
import Layout from '../Layout';
import AuthProvider from '../../state/Auth/AuthProvider';
import ThemeProvider from '../../state/Theme/ThemeProvider';
import VideoProvider from '../../state/Videos/VideoProvider';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <VideoProvider>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/video/:videoId">
                  <VideoDetail />
                </Route>
                <ProtectedRoute exact path="/favorites">
                  <Favorites />
                </ProtectedRoute>
                <ProtectedRoute exact path="/favorites/:videoId">
                  <FavoriteVideoDetail />
                </ProtectedRoute>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </VideoProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
