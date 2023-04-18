import { createContext} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
  children,
}) => {
  const [auth, setAuth] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    if (!data.email || !data.password) {

      alert('No empty fields allowed!');

    } else {

      try {
        const result = await authService.login(data);
        setAuth(result);

        navigate('/');

      } catch (error) {
        alert("Wrong username or password");
        console.log(`Failed to login`);
      }
    }
  };

  const onRegisterSubmit = async (values) => {
    const { repeatPassword, ...registerData } = values;
    if(repeatPassword === "" || registerData.password === "" || registerData.email === ""){
      alert("No empty fileds allowed!")
      return;
    }
    if (repeatPassword !== registerData.password) {
       alert('Repeat password doesn\'t match!')
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

  const onLogout = async () => {
    try {
      await authService.logout();
    } catch(error) {
      console.log(error);
    }
    setAuth({});
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