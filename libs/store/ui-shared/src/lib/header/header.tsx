import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

const StyledHeader = styled.div`
  color: red;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>{props.title}</h1>
    </StyledHeader>
  );
}

export default Header;
