import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ArrowDown = props => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.33333 10L8.00004 14.6667L12.6667 10"
      stroke="black"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowDown;
