import {createContext, type FC, type ReactNode, useEffect} from "react";
import {useRootLoader} from "../hooks/useRootLoader.ts";
import {useSubmit} from "react-router-dom";
import {getTokenDuration} from "../util/auth.ts";
import {AuthContextType} from "../models/context/AuthContextType.ts";

export const AuthContext = createContext<AuthContextType>({
    token: ""
})

type ContextProviderType = {
    children: ReactNode;
};

// type AuthContextProviderType = ContextProviderType;

const AuthContextProvider: FC<ContextProviderType> = ({children}) => {
    const {token} = useRootLoader();

    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED") {
            submit(null, {action: "/logout", method: "POST"});
            return;
        }

        const tokenDuration = getTokenDuration();

        setTimeout(() => {
            submit(null, {action: "/logout", method: "POST"});
        }, tokenDuration)
    }, [token, submit]);


    const AuthContextValue: AuthContextType = {
        token: token
    }

    return <AuthContext.Provider value={AuthContextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;