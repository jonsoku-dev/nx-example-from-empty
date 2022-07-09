import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '@nx-example-2/api/util-interfaces';

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

const StyledStoreFeatureGameDetail = styled.div`
  color: pink;
`;

export function StoreFeatureGameDetail(props: StoreFeatureGameDetailProps) {
  const params = useParams<{ id: string }>();
  const [state, setState] = useState<{
    data: Game | null;
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: null,
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    const gameId = params.id;
    fetch(`/api/games/${gameId}`)
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
  }, [params.id]);

  console.log({ state });

  return (
    <StyledStoreFeatureGameDetail>
      <h1>Welcome to StoreFeatureGameDetail!@@@</h1>
    </StyledStoreFeatureGameDetail>
  );
}

export default StoreFeatureGameDetail;
