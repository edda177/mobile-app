import React from "react";
import Svg, { Path, Text, Defs } from "react-native-svg";
import { useTheme } from "../context/ThemeContext";

const Logo = ({ width = 220, height = 65, color }) => {
  const { theme } = useTheme();
  return (
    <Svg width={width} height={height} viewBox="0 0 1822 509.2">
      <Defs />
      <Path
        d="M240,0c4.6,0,9.2,1,13.4,2.9l188.3,79.9c22,9.3,38.4,31,38.3,57.2-.5,99.2-41.3,280.7-213.6,363.2-16.7,8-36.1,8-52.8,0C41.3,420.7.5,239.2,0,140c-.1-26.2,16.3-47.9,38.3-57.2L226.7,2.9c4.1-1.9,8.7-2.9,13.3-2.9ZM240,66.8v378.1c138-66.9,175.1-214.8,176-303.5l-176-74.6h0Z"
        fill={color}
      />
      <Text
        x="563.65"
        y="379.25"
        fontSize="312"
        fontWeight="700"
        letterSpacing="0.02em"
        fill={color}
        fontFamily="Quicksand-Bold"
      >
        Sentinel
      </Text>
    </Svg>
  );
};

export default Logo;
