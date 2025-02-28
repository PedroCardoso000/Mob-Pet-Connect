
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonComponenteProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>; 
  textStyle?: StyleProp<TextStyle>;   
};


const ButtonComponente = ({ title, onPress } : ButtonComponenteProps) => {
    <TouchableOpacity onPress={onPress} style={{ padding: 10, backgroundColor: '#499CFA', borderRadius: 8 }}>
        <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
}

export default ButtonComponente;

