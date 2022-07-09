import styled from '@emotion/styled';
import { Header } from '@nx-example-2/store/ui-shared';
import { formatRating } from '@nx-example-2/store/util-formatters';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { StoreFeatureGameDetail } from '@nx-example-2/store/feature-game-detail';
import { Game } from '@nx-example-2/api/util-interfaces';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const navigate = useNavigate();
  const [state, setState] = useState<{
    data: Game[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/games')
      .then((x) => x.json())
      .then((res) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, []);

  console.log({ state });

  return (
    <>
      <Header title="header title" />
      <p>{formatRating(2.505050505)}</p>
      <StyledApp>
        {/* <NxWelcome title="store" /> */}

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        <div role="navigation">
          <img src="/assets/logo.png" alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feature-game-detail">StoreFeatureGameDetail</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.{' '}
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/feature-game-detail"
            element={<StoreFeatureGameDetail />}
          />
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
        {/* END: routes */}
      </StyledApp>
    </>
  );
}

export default App;
