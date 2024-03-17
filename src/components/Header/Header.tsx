import React from 'react';
import { createGlobalStyle, keyframes, styled } from 'styled-components';
import Hologram from '../../assets/img/hologram.jpg';
import { GlobalFont } from '../GlobalFont/GlobalFont';


const beforeRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
`
const BackgroundAnimated = keyframes`
  from {
      background-position: 0 0
  }
  to {
      background-position: 100% 0
  }

`
const HeaderElement = styled.div`
  font-family: "Sedgwick Ave Display", sans-serif;
  margin-left: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  &:before{
    content: "";
    position: absolute;
    top: 70px;
    width: 300px;
    height: 300px;
    filter: blur(50px);
    background-image: linear-gradient(#4ddc9e, #876df2, #f93a86);
    /* animation: ${beforeRotation} 5s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite; */
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    z-index: -1;
  }
`
const H1Element = styled.h1`
  background: url(${Hologram});
  background-repeat: repeat-x;
  background-position: -180px -140px;
  font-size: 70px;
  text-align: center;
  color: transparent;
  background-clip: text;
  /* animation:${BackgroundAnimated} 15s linear infinite; */

`

export const Header = () => {
  return (
    <>
      <GlobalFont />
      <HeaderElement>
        <H1Element>
          Create CV
        </H1Element>
      </HeaderElement>
    </>
  )
}


// СТАРЫЙ КОД

// const TaskText = styled.span`
//     font-size: 18px;
// `

// const ListElement = styled.li`
//   list-style: none;
//   & input {
//     width: 200px;
//   }
//   &::placeholder{
//     color: #df8439;
//   }
// `;

// export const List: React.FC = ({}) => {
//     return (
//         <div>
//             <ul>
//                 <ListElement>
//                     <Input 
//                     size="small" 
//                     placeholder="Basic usage" 
//                     />
//                 </ListElement>
//             </ul>
//         </div>
//     );
// };

// СТАРЫЙ КОД