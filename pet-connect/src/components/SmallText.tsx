import React from "react";
import { Text } from "react-native";

import { TextProps } from "react-native";

interface SmallTextProps extends TextProps {
  children: React.ReactNode;
  style?: object;
}

const SmallText: React.FC<SmallTextProps> = ({ children, style, ...props }) => (
  <Text style={[{ fontSize: 12}, style]} {...props}>
    {children}
  </Text>
);

export default SmallText;
