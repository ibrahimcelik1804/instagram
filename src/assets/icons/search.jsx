import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const Search = ({props, focused}) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={10}
      cy={10}
      r={8.1}
      stroke="black"
      strokeWidth={focused ? 3 : 1.8}
    />
    <Path
      d="M22 22L16 16"
      stroke="black"
      strokeWidth={focused ? 3 : 1.8}
      strokeLinecap="round"
    />
  </Svg>
);
export default Search;
