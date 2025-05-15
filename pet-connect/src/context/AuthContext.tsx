import { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api/axios';
import { HttpStatusCode } from 'axios';
import { User } from '@/@types/User';
import { setToken, getToken } from '../service/tokenService';

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    getUserByToken: () => Promise<void>;
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // Função para carregar usuário do AsyncStorage ao iniciar o app
    const loadUserFromStorage = async () => {
        try {
            const userStorage = await AsyncStorage.getItem('@PConnect:user');
            if (userStorage) {
                setUser(JSON.parse(userStorage));
            }
        } catch (error) {
            console.log('Erro ao carregar usuário do AsyncStorage', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUserFromStorage();
    }, []);

    const login = async (email: string, password: string) => {
        const {status, data } = await api.post('/auth/login', { email, password });
        

        if (status !== HttpStatusCode.Ok) 
            throw new Error('Login falhou');
        else{
            const token = data?.token;
            console.log('token', token);
            setToken(token);
        }
        
        return data;

    };

    const getUserByToken = async () => {
 
        const { status, data } = await api.get('/user/bytoken');

        if (status !== HttpStatusCode.Ok) throw new Error('Usuário não encontrado');

        const obj: User = await data.json();

        setUser(obj);
        console.log('obj', obj);
        // return obj;
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('@PConnect:user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, getUserByToken }}>
            {children}
        </AuthContext.Provider>
    );
};
