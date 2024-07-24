import { ANONYMOUS_AUTH_TOKEN, AuthManager } from "@/datamanager/authManager";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
    const authManager = AuthManager.getInstance();
    const navigate  = useNavigate();
    useEffect(() => {
        if (authManager.getToken() !== ANONYMOUS_AUTH_TOKEN) {
            navigate('/user-dashboard');
          }
    },[]);
}

export default useAuthRedirect;