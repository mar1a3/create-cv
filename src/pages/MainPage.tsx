import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from '../Header/Header';



export const MainPage = () =>{
  return(
    <Header/>
  )
}



// declare module 'styled-components' {
//   export interface DefaultTheme {
//     colors: {
//       red: string;
//     };
//   }
// }
// const theme = {
//   colors: {
//     white: 'white',
//     red: 'red',
//   },
// };
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   & btn2{
//     width: 30px;
//     height:25px;
//     cursor: pointer;
//   }
// `
// const StyledParagraph = styled.p<{ buttonClicked: boolean }>`
//   text-decoration: ${(props) => (props.buttonClicked ? 'line-through' : 'none')}
// `

// const Title = styled.h3<{ large?: boolean }>`
//   color: ${({ theme }) => theme.colors.red};
//   font-size: ${(props) => (props.large ? '60px' : '20px')};
// `;

// export const MainPage = () => {
//   const [selectedButton, setSelectedButton] = React.useState(1);
//   const [buttonClicked, setClick] = React.useState(false);

//   const ButtonClickHandler = () => {
//     setClick(!buttonClicked);
//   }
//   const [large, setLarge] = React.useState(false);
//   const handleRadioChange = (value: number) => {
//     setSelectedButton(value);
//   };
//   return (
//     <div>
//       <Container>
//         <ThemeProvider theme={theme}>
//           <Title large={large}>{large ? 'Big' : 'Small'} text</Title>
//         </ThemeProvider>
//         <button onClick={() => setLarge(!large)}></button>
//         <Custom onRadioChange={handleRadioChange} />
//         <p>Selected Button: {selectedButton}</p>
//         <List />
//         <button className='btn2' onClick={ButtonClickHandler}>Кнопка 2</button>
//         <StyledParagraph buttonClicked={buttonClicked}>Crossed out</StyledParagraph>
//       </Container>
//     </div>
//   );
// };
