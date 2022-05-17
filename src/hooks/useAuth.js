import axios from "axios";
import { useLocalStorage } from "./LocalStorage";

export const useAuth = () => {
    
    const [user, setUser] = useLocalStorage("user", null);

    const signIn = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/login', data);
            let userObj = { ...authresult.data?.foundUser };
            userObj.token = authresult.data?.encodedToken;
            setUser(userObj);
        } catch (err) {
            console.error(err);
        }
    };

    const signUp = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/signup', data);
            let userObj = { ...authresult.data?.createdUser };
            userObj.token = authresult.data?.encodedToken;
            setUser(userObj);
        } catch (err) {
            console.error(err);
        }
    };

    const signOut = () => {
        setUser(null);
    };

    return { user, setUser, signIn, signUp, signOut };
};
