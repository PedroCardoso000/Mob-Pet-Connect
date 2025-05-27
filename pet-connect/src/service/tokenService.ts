import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'auth_token';

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch (error) {
    console.error('Error fetching token from AsyncStorage:', error);
    return null;
  }
};

export const setToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error saving token to AsyncStorage:', error);
  }
};

export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token from AsyncStorage:', error);
  }
};





// type DataTokenStorage ={
//   key: string,
//   token: string,
// }

// const dateStorage : DataTokenStorage[] = [];


// const TOKEN_KEY = 'auth_token';

// export const getToken = async (): Promise<string | null> => {
//   try {
//     const token = dateStorage.find(item => item.key === TOKEN_KEY);
//     return token ? token.token : null;
//   } catch (error) {
//     console.error('Error fetching token from AsyncStorage:', error);
//     return null;
//   }
// };

// export const setToken = async (token: string): Promise<void> => {
//   try {
//     const tokenData = { key: TOKEN_KEY, token };
//     const index = dateStorage.findIndex(item => item.key === TOKEN_KEY);
//     dateStorage[index] = tokenData;
//   } catch (error) {
//     console.error('Error saving token to AsyncStorage:', error);
//   }
// };

// export const removeToken = async (): Promise<void> => {
//   try {
//     const index = dateStorage.findIndex(item => item.key === TOKEN_KEY);
//     dateStorage.splice(index, 1);
//   } catch (error) {
//     console.error('Error removing token from AsyncStorage:', error);
//   }
// };