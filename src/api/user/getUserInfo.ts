import { AuthManager } from "@/datamanager/authManager";
import User from "@/type/user";
import { requestToUser, jsonifyResponse } from "@/utils/server";


const getUserInfo = async () => {
    const token = AuthManager.getInstance().getToken();
    const response = await requestToUser('', {
        method: 'GET',
    },
    token);
    if (!response.ok) {
        throw new Error('Failed to get user info');
    }
    return jsonifyResponse<User>(response);

}

export default getUserInfo;