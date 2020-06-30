import styled from 'styled-components'

export const BasicFullPageFlexContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  `


export const BasicFlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`

export const BasicText = styled.span`
  font-family: 'Source Sans Pro';
  font-weight: 500;
  font-size: 15px;
`

export const HeaderTextOne = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: 900;
  font-size: 25;
  margin: 0;
`

export const HeaderSeparator = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: 900;
  font-size: 15px;
  margin: 0;
`

export const BasicInput = styled.input`
  background-color: white;
  padding: 10px;
  font-family: 'Source Sans Pro';
  font-weight: 500;
  width: 90%;
  margin-bottom: 25px;
  border: none;
  border-bottom: solid black 1px;
  padding-left: 5px;
  font-size: 15px;
  outline: none;
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`

export const BasicSubHeader = styled.h4`
  font-size: 16px;
  font-weight: 300;
`

export const BasicCircleArrowButton = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 10px;
`

export const WelcomePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro';
`

export const WelcomeLogo = styled.h1`
  margin: 0;
  font-family: 'Source Sans Pro';
  font-weight: 800;
  font-size: 80px;
`

export const LoadingScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LargeText = styled.span`
  font-family: 'Source Sans Pro';
  font-size: 50px;
  color: white;
  font-weight: 100;
  opacity: 1;
`

export const MediumText = styled(LargeText)`
  font-size: 30px;
`

export const NavIconContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

export const BasicHeaderSeparator = styled.h1`
  margin: 0;
  font-weight: 900;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
  color: white;
  font-size: 18px;
`

export const LeftAlignFlexContainer = styled(BasicFlexContainer)`
  align-items: flex-start;
`

export const AddButton = styled.button`
  width: 100%;
  height: 90px;
  background-color: #555;
  border: none;
  outline: none;
`

export const BasicCourseInput = styled.input`
  width: 100%;
  padding: 25px;
  font-size: 24px;
  text-align: center;
  font-family: 'Source Sans Pro';
  background-color: black;
  color: white;
  box-sizing: border-box;
  outline: none;
  border-radius: 20px;
  border: none;
  background-color: #4C4C4C;
  font-weight: 300;
  margin: 25px 0 25px 0;
  ::-webkit-input-placeholder {
    font-style: italic;
  }
  :-moz-placeholder {
    font-style: italic;
  }
  ::-moz-placeholder {
    font-style: italic;
  }
  :-ms-input-placeholder {
    font-style: italic;
  }
`

export const BasicSmallText = styled.span`
  font-family: "Source Sans Pro";
  font-weight: 300;
  color: white;
`