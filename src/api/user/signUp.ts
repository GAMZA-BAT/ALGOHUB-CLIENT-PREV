import { AuthManager } from "@/datamanager/authManager";
import { ApiError } from "@/type/errorResponse";
import { requestToUser } from "@/utils/server";

interface SignUpRequest {
    email: string;
    password: string;
    nickname: string;
    profileImage: string;
}

const signUp = async (signUpRequest: SignUpRequest) => {

    const {profileImage, ...requestWithoutProfileImage}: SignUpRequest = signUpRequest;

    const form = new FormData();
    form.append('request', JSON.stringify(requestWithoutProfileImage));
    form.append('profileImage', await imageUrlToBlob(profileImage));
    const response = await requestToUser('register', {
        method: 'POST',
        body: form,
    });

    if (!response.ok) {
        throw new ApiError(await response.json());
    }
    AuthManager.getInstance().setToken(await response.text());

    return response;
};

const imageUrlToBlob = async (imageUrl: string) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
}

export default signUp;