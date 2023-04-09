import { createContext} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth,setAuth] = useLocalStorage('auth',{});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);
          setAuth(result);
         
          navigate('/');
    
        } catch (error) {
          console.log(`Failed to login`);
        }
        
    
      };
    
      const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
    
        if (repeatPassword !== registerData.password) {
          // alert('Repeat password doesn\'t match!')
          return;
        }
        try {
          const result = await authService.register(registerData);
    
          setAuth(result);
          navigate('/');
    
        } catch (error) {
          console.log('The Registration failed!')
        }
      };
    
      const onLogout = async() => {
        await authService.logout();
        
        setAuth({}); // logout only on the client-session
      };

      const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    
      };
    return (
        <>
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
        </>
    )
}