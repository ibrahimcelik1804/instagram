import * as React from 'react';
import Svg, {Mask, Path, Circle} from 'react-native-svg';
const ProfilePerson = props => (
  <Svg
    width={130}
    height={40}
    viewBox="0 0 130 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask id="path-1-inside-1_2616_775" fill="white">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.2162 8.22465C65.0982 8.102 64.9018 8.102 64.7838 8.22465L62.1132 11H56C54.8954 11 54 11.8954 54 13V28C54 29.1046 54.8954 30 56 30H74C75.1046 30 76 29.1046 76 28V13C76 11.8954 75.1046 11 74 11H67.8868L65.2162 8.22465Z"
      />
    </Mask>
    <Path
      d="M64.7838 8.22465L63.4868 6.97657L63.4868 6.97657L64.7838 8.22465ZM65.2162 8.22465L66.5132 6.97657L66.5132 6.97657L65.2162 8.22465ZM62.1132 11V12.8C62.6026 12.8 63.0709 12.6007 63.4103 12.2481L62.1132 11ZM67.8868 11L66.5897 12.2481C66.9291 12.6007 67.3974 12.8 67.8868 12.8V11ZM66.0809 9.47272C65.4908 10.086 64.5092 10.086 63.9191 9.47272L66.5132 6.97657C65.6871 6.11802 64.3129 6.11802 63.4868 6.97657L66.0809 9.47272ZM63.4103 12.2481L66.0809 9.47272L63.4868 6.97657L60.8162 9.75194L63.4103 12.2481ZM56 12.8H62.1132V9.20002H56V12.8ZM55.8 13C55.8 12.8896 55.8895 12.8 56 12.8V9.20002C53.9013 9.20002 52.2 10.9013 52.2 13H55.8ZM55.8 28V13H52.2V28H55.8ZM56 28.2C55.8895 28.2 55.8 28.1105 55.8 28H52.2C52.2 30.0987 53.9013 31.8 56 31.8V28.2ZM74 28.2H56V31.8H74V28.2ZM74.2 28C74.2 28.1105 74.1105 28.2 74 28.2V31.8C76.0987 31.8 77.8 30.0987 77.8 28H74.2ZM74.2 13V28H77.8V13H74.2ZM74 12.8C74.1105 12.8 74.2 12.8896 74.2 13H77.8C77.8 10.9013 76.0987 9.20002 74 9.20002V12.8ZM67.8868 12.8H74V9.20002H67.8868V12.8ZM63.9191 9.47272L66.5897 12.2481L69.1838 9.75194L66.5132 6.97657L63.9191 9.47272Z"
      fill="#C4C4C4"
      mask="url(#path-1-inside-1_2616_775)"
    />
    <Circle cx={65} cy={19} r={3.1} stroke="#C4C4C4" strokeWidth={1.8} />
    <Path
      d="M58 29V29C58 26.7909 59.7909 25 62 25H68C70.2091 25 72 26.7909 72 29V29"
      stroke="#C4C4C4"
      strokeWidth={1.8}
    />
  </Svg>
);
export default ProfilePerson;
