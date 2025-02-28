import { TextInput, TextInputProps, View, Text } from "react-native";

type InputComponentProps = {
  placeholder: string;
  icon: string;
} & TextInputProps; 

const InputComponent = ({ placeholder, icon, ...rest }: InputComponentProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 8, padding: 10 }}>
      <Text style={{ marginRight: 8 }}>{icon}</Text>
      
      <TextInput
        placeholder={placeholder}
        style={{ flex: 1 }}
        {...rest} 
      />
    </View>
  );
};

export default InputComponent;
