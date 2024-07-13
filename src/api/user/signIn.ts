import { ContentType } from "@/constants/server";
import { ApiError } from "@/type/errorResponse";
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
        throw new ApiError(await response.json());
    }
    
    return jsonifyResponse<SignInResponse>(response) 
};

export default signIn;