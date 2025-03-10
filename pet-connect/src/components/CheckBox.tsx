import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./ui/checkBox";

type PropsCheckBox = {
    onPress: (value: string) => void;
    selected: string;
    value: string;
};

const CheckBox = ({ selected, value, onPress }: PropsCheckBox) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(value)}
            style={style.checkboxOption}
        >
            <View style={[style.checkbox, selected === value && style.checkboxSelected]}>
                {selected === value && <View style={style.checkboxInner} />}
            </View>
            <Text style={{ opacity: 0.80 }}>{value}</Text>
        </TouchableOpacity>
    );
};

export default CheckBox;
