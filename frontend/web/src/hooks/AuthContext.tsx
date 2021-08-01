import React, {createContext, useCallback, useState,useContext} from 'react';
import api from '../services/api';

interface AuthState {
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData{
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signUp(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    
}
 const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@Estudo:user');    
        
        if (user) {
            return {user:JSON.parse(user)};
        }
        return {} as AuthState;
    })
    
    const signIn = useCallback(async ({email, password}) => {
        const response = await api.post('email/sigIn', {
            email,
            password,
        })
        const user = response.data;
        
        localStorage.setItem('@Estudo:user',JSON.stringify(user));
        setData({user});
    },[]);

    const signUp = useCallback(async ({email, password}) => {
        const response = await api.post('email/sigUp', {
            email,
            password,
        })
        const user = response.data;
        

        localStorage.setItem('@Estudo:user',JSON.stringify(user));
        setData({user});
    },[]);

    const signOut = useCallback(() => {
        localStorage.remove('@Estudo:user');   

        setData({} as AuthState);
    },[])
    
    return(
        <AuthContext.Provider value={{user: data.user, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}
function useAuth(): AuthContextData{
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
return context;
} 
export { AuthProvider, useAuth};    



