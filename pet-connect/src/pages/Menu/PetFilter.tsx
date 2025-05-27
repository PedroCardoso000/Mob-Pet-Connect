import { StyleSheet, View, Platform, TouchableOpacity, Animated, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputComponent from "@/src/components/InputConnect";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pet } from "@/src/@types/Pet";
import { useEffect, useState, useRef } from "react";
import { FilterOptions } from ".";
import RNPickerSelect from 'react-native-picker-select';
import Checkbox from "expo-checkbox"

type Props = {
  filterOptions: FilterOptions,
  pets: Pet[],
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
}


export function PetFilter({ filterOptions, setFilterOptions, pets }: Props) {
  const insets = useSafeAreaInsets();
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  function toggleExpanded () {
    const toValue = isExpanded ? 0 : 132;
    
    Animated.timing(animatedHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setIsExpanded(!isExpanded);
  };

  function raceOptions(pets: Pet[]) {
    const raceName = pets.map(p => p.race);
    const uniqueRaces = new Set(raceName);
    return [...uniqueRaces].map( race => ({ label:  race, value: race}))
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top + 5 }]}>
      <View style={styles.headerView}>
        <View style={styles.leftIcon}></View>
        <View style={styles.inputWrapper}>
          <InputComponent
            styleInput={styles.inputBackground}
            placeholder="Pesquisar pet por nome..."
            placeholderTextColor="#999999"
            value={filterOptions.petInput}
            onChange={e => setFilterOptions({...filterOptions, petInput: e.nativeEvent.text})}
          />
        </View>
        <TouchableOpacity style={styles.rightIcon} onPress={toggleExpanded}>
          <MaterialCommunityIcons 
            name={isExpanded ? "filter-off" : "filter"} 
            size={24} 
            color="black"
          />
        </TouchableOpacity>
      </View>
      
      <Animated.View style={[styles.expandedView, { height: animatedHeight }]}>
        <View style={styles.exampleView}>
          <View style={styles.exampleContent}>
            <Text>Selecione uma raça</Text>
            <RNPickerSelect
            onValueChange={(value) => 
              setFilterOptions({...filterOptions, selectedRace: value})}
            items={raceOptions(pets)}
            />
            <View style={styles.checkboxContainer}>
              <View style={styles.checkBoxView}>
                <Text>Machos</Text>
                <Checkbox
                value={filterOptions.male}
                onValueChange={() => 
                  setFilterOptions({...filterOptions, male: !filterOptions.male})}
                />
              </View>
              <View style={styles.checkBoxView}>
                <Text>Fêmeas</Text>
                <Checkbox
                value={filterOptions.female}
                onValueChange={() => 
                  setFilterOptions({...filterOptions, female: !filterOptions.female})}
                />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  leftIcon: {
    paddingRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 8,
  },
  rightIcon: {
    paddingLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBackground: {
    backgroundColor: "#EAEAEA",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 0,
    height: 40,
    fontSize: 14,
    lineHeight: Platform.OS === 'ios' ? 40 : 20,
    textAlignVertical: Platform.OS === 'android' ? 'center' : 'auto',
    includeFontPadding: false,
    textAlign: 'left',
  },
  expandedView: {
    overflow: 'hidden',
    backgroundColor: "white",
  },
  exampleView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  exampleContent: {
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: 24,
    width: "100%",
    marginVertical: 24,
  },
  checkBoxView: {
    flexDirection: "row",
    gap: 16
  }
});