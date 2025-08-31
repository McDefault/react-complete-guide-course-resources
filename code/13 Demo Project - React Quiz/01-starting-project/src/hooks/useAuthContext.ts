import {AuthContext} from "../store/auth-context.tsx";
import {useContext} from "react";
import {AuthContextType} from "../models/context/AuthContextType.ts";

export const useAuthContext = (): AuthContextType => {
    return useContext(AuthContext) as AuthContextType;
};
