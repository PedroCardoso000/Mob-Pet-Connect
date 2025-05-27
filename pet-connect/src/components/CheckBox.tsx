import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./ui/checkBox";

type PropsCheckBox = {
    onPress: (value: string) => void;
    selected: string;
    value: string;
    label?: string;
  };
  
  const CheckBox = ({ selected, value, label, onPress }: PropsCheckBox) => {
    const isSelected = selected === value;
  
    return (
      <TouchableOpacity
        onPress={() => onPress(value)}
        style={style.checkboxOption}
      >
        <View style={[style.checkbox, isSelected && style.checkboxSelected]}>
          {isSelected && <View style={style.checkboxInner} />}
        </View>
        <Text style={{ opacity: 0.8 }}>{label}</Text>
      </TouchableOpacity>
    );
  };

  export default CheckBox;
  
