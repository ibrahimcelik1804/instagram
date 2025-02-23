import * as React from 'react';
import Svg, {Line} from 'react-native-svg';
const HamburgerMenu = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Line x1={2} y1={5.1} x2={22} y2={5.1} stroke="black" strokeWidth={1.8} />
    <Line x1={2} y1={12.1} x2={22} y2={12.1} stroke="black" strokeWidth={1.8} />
    <Line x1={2} y1={19.1} x2={22} y2={19.1} stroke="black" strokeWidth={1.8} />
  </Svg>
);
export default HamburgerMenu;
