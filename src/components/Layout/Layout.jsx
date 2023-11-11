import { Outlet } from 'react-router-dom';
import { Container, Link, StyledHeader, StyledNav } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledNav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </StyledNav>
        </nav>
      </StyledHeader>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
