import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const ProfilePlay = props => (
  <Svg
    width={130}
    height={40}
    viewBox="0 0 130 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M68.24 21.3268C68.5867 21.5334 68.5867 22.0499 68.24 22.2565L62.78 25.5106C62.4333 25.7172 62 25.459 62 25.0457L62 18.5376C62 18.1244 62.4333 17.8661 62.78 18.0727L68.24 21.3268Z"
      fill="#C4C4C4"
    />
    <Path d="M59 9L63 15" stroke="#C4C4C4" strokeWidth={1.8} />
    <Path d="M66 9L70 15" stroke="#C4C4C4" strokeWidth={1.8} />
    <Rect
      x={54.9}
      y={8.9}
      width={20.2}
      height={20.2}
      rx={5.1}
      stroke="#C4C4C4"
      strokeWidth={1.8}
    />
    <Path d="M55 15H75" stroke="#C4C4C4" strokeWidth={1.8} />
  </Svg>
);
export default ProfilePlay;
