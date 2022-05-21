import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
`;

export const Sidebar = styled.div`
   flex: 1;
   div {
     cursor:pointer;
     padding: 10px;
     padding-left: 30px;
     font-size: 20px;
     font-weight: 500;
      &:hover {
        background: lightblue;
      }
   }
`;

export const Images = styled.div`
   flex: 9;
   img {
     margin: 5px
   }
`;