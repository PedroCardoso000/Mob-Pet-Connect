
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

type ButtonComponentProps = {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>; 
  textStyle?: StyleProp<TextStyle>;   
};


const ButtonComponent = ({ title, onPress } : ButtonComponentProps) => {
   return ( <TouchableOpacity onPress={onPress} style={{ padding: 15, backgroundColor: '#499CFA',
    borderRadius: 8, width: '50%', alignItems: 'center', marginBottom: 15,  }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>)
}

export default ButtonComponent;

