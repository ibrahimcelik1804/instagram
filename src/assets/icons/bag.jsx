import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Bag = ({props,focused}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.88104 7.33138C2.91728 6.75164 3.39803 6.29999 3.9789 6.29999H20.0211C20.602 6.29999 21.0827 6.75164 21.119 7.33138L21.8362 18.8066C21.9477 20.5913 20.5303 22.1 18.7422 22.1H5.2578C3.46966 22.1 2.0523 20.5913 2.16384 18.8066L2.88104 7.33138Z"
      stroke="black"
      strokeWidth={focused ? 3 : 1.8}
    />
    <Path
      d="M15.3 9.90002C15.3 11.7226 13.8226 13.2 12 13.2C10.1775 13.2 8.70001 11.7226 8.70001 9.90002"
      stroke="black"
      strokeWidth={focused ? 3 : 1.8}
      strokeLinecap="round"
    />
    <Path
      d="M15.3 5.95V4.3C15.3 2.47746 13.8226 0.999997 12 0.999997C10.1775 0.999997 8.70001 2.47746 8.70001 4.3V5.95"
      stroke="black"
      strokeWidth={focused ? 3 : 1.8}
      strokeLinecap="round"
    />
  </Svg>
);
export default Bag;
