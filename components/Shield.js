import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Shield = ({ width = 120, height = 120 }) => (
  <Svg width={width} height={height} viewBox="0 0 480 509.2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M240,0c4.6,0,9.2,1,13.4,2.9l188.3,79.9c22,9.3,38.4,31,38.3,57.2-.5,99.2-41.3,280.7-213.6,363.2-16.7,8-36.1,8-52.8,0C41.3,420.7.5,239.2,0,140c-.1-26.2,16.3-47.9,38.3-57.2L226.7,2.9c4.1-1.9,8.7-2.9,13.3-2.9ZM240,66.8v378.1c138-66.9,175.1-214.8,176-303.5l-176-74.6h0Z"
      fill="#204054"
    />
  </Svg>
);

export default Shield;
