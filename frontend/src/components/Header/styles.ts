import styled from 'styled-components'

export const Header = styled.header`
  border-bottom: 1px solid var(--gray-100);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  
  max-width: 1200px;
  margin: 0 auto;
  padding: .5rem 1rem;

  h1 {
    font-size: 1.8rem;
    line-height: 1;

    @media (max-width: 720px) {
      font-size: 1.2rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: .6rem;
  }
`