import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Home = ({props, fill}) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 11.5358V22H16V17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17V22H2V11.5358L12 2L22 11.5358Z"
      fill={fill}
     
      
    />
    <Path
      d="M22 22V22.5H22.5V22H22ZM22 11.5358H22.5V11.3217L22.3451 11.1739L22 11.5358ZM16 22H15.5V22.5H16V22ZM8 22V22.5H8.5V22H8ZM2 22H1.5V22.5H2V22ZM2 11.5358L1.65495 11.1739L1.5 11.3217V11.5358H2ZM12 2L12.3451 1.63815L12 1.30911L11.6549 1.63815L12 2ZM22.5 22V11.5358H21.5V22H22.5ZM16 22.5H22V21.5H16V22.5ZM16.5 22V17H15.5V22H16.5ZM16.5 17C16.5 14.5147 14.4853 12.5 12 12.5V13.5C13.933 13.5 15.5 15.067 15.5 17H16.5ZM12 12.5C9.51472 12.5 7.5 14.5147 7.5 17H8.5C8.5 15.067 10.067 13.5 12 13.5V12.5ZM7.5 17V22H8.5V17H7.5ZM2 22.5H8V21.5H2V22.5ZM1.5 11.5358V22H2.5V11.5358H1.5ZM11.6549 1.63815L1.65495 11.1739L2.34505 11.8976L12.3451 2.36185L11.6549 1.63815ZM22.3451 11.1739L12.3451 1.63815L11.6549 2.36185L21.6549 11.8976L22.3451 11.1739Z"
      fill="black"
    
      stroke="black" // Çizginin rengini siyah yapıyoruz
      strokeWidth="2" // Çizginin kalınlığını 3px yapıyoruz
      
    />
  </Svg>
);
export default Home;
