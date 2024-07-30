import { ApiError } from "@/type/errorResponse";
import { imageUrlToBlob } from "@/utils/image";
import { requestToUser } from "@/utils/server";

interface SignUpRequest {
    email: string;
    password: string;
    nickname: string;
    bjNickname: string;
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

    return response;
};


export default signUp;