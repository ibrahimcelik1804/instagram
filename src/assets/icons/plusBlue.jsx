import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const PlusBlue = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={10} cy={10} r={10} fill="#1FA1FF" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6L9 9H6C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11H9L9 14C9 14.5523 9.44771 15 10 15C10.5523 15 11 14.5523 11 14L11 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H11L11 6Z"
      fill="white"
    />
  </Svg>
);
export default PlusBlue;
