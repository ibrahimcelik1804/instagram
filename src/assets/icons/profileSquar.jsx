import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
const ProfileSquar = props => (
  <Svg
    width={130}
    height={40}
    viewBox="0 0 130 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M62.4476 11V27M57.1905 21.5524L73.1905 21.5524M67.4 11V27M57.1905 16.6L73.1905 16.6M57 11H73V27H57V11Z"
      stroke="black"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Rect y={39} width={130} height={1} fill="black" />
  </Svg>
);
export default ProfileSquar;
