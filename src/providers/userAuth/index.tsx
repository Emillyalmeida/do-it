import {
  useCallback,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import api from "../../services/api";

const UserAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must to be used within AuthContext");
  }
  return context;
};

interface User {
  email: string;
  id: string;
  name: string;
}

interface UserData {
  accessToken: string;
  user: User;
}

interface LoginProps {
  email: string;
  password: string;
}

interface ContextValue {
  accessToken: string;
  user: User;
  PostLogin: ({ email, password }: LoginProps) => Promise<void>;
  Logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<ContextValue>({} as ContextValue);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<UserData>(() => {
    const accessToken = localStorage.getItem("Doit:accessToken");
    const user = localStorage.getItem("Doit:user");

    return accessToken && user
      ? { accessToken, user: JSON.parse(user) }
      : ({} as UserData);
  });

  const PostLogin = useCallback(async ({ email, password }: LoginProps) => {
    console.log("oi");
    await api.post("login", { email, password }).then((res) => {
      const { accessToken, user } = res.data;
      localStorage.setItem("Doit:accessToken", accessToken);
      localStorage.setItem("Doit:user", JSON.stringify(user));

      setData({ accessToken, user });
    });
    // .catch((err) => {
    //   console.log(err);
    //   setLoading(false);
    // });
  }, []);

  const Logout = useCallback(() => {
    localStorage.removeItem("Doit:accessToken");
    localStorage.removeItem("Doit:user");

    setData({} as UserData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        PostLogin,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, UserAuth };
