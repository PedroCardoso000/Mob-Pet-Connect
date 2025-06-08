import { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api/axios';
import { HttpStatusCode } from 'axios';
import { setToken, getToken } from '../service/tokenService';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../navigator/navigator-simple-app';
import { User } from '../@types/User';


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    user: User | null;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    getUserByToken: () => Promise<void>;
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigation = useNavigation<NavigationProps>();
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const { status, data } = await api.post('/auth/login', { email, password });
            if (status === HttpStatusCode.Ok) {
                setToken(data?.token);
                await getUserByToken();
                navigation.navigate('Home');
                return data;
            }
            return null;
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    const getUserByToken = async () => {
        try {
            const { status, data } = await api.get('/user/bytoken');
            if (status === HttpStatusCode.Ok) setUser(data);
            return data;
        } catch (error) {
            console.error('Erro ao obter usuário:', error);
        }
    };


    const logout = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, getUserByToken }}>
            {children}
        </AuthContext.Provider>
    );
};
