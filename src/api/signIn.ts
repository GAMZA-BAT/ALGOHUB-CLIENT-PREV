import { ContentType } from "@/constants/server";
import { jsonifyResponse, requestToUser } from "@/utils/server";

interface SignInRequest {
    email: string;
    password: string;
}

interface SignInResponse {
    token: string;
}

const signIn = async (signInRequest: SignInRequest) => {
    const response = await requestToUser('sign-in', 
    {
        method: 'POST',
        headers: {
            'Content-Type': ContentType.JSON,
        },
        body: JSON.stringify(signInRequest),
    })
    if (!response.ok) {
        throw new Error('Failed to sign in');
    }
    
    return jsonifyResponse<SignInResponse>(response) 
};

export default signIn;