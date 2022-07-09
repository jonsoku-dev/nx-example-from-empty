import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

const StyledStoreFeatureGameDetail = styled.div`
  color: pink;
`;

export function StoreFeatureGameDetail(props: StoreFeatureGameDetailProps) {
  return (
    <StyledStoreFeatureGameDetail>
      <h1>Welcome to StoreFeatureGameDetail!</h1>
    </StyledStoreFeatureGameDetail>
  );
}

export default StoreFeatureGameDetail;
