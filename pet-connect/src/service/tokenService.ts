import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '$2a$10$JCcTh6cFhNR4KphocFPmSuLjanLrhIJGCGL5I9aWXHOF6kP0l3ejW';

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