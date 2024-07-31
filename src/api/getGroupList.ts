import { ContentType } from "@/constants/server";
import { AuthManager } from "@/datamanager/authManager";
import { ApiError } from "@/type/errorResponse";
import { Group, GroupMeta } from "@/type/group";
import { imageUrlToBlob } from "@/utils/image";
import { jsonifyResponse, requestToGroup } from "@/utils/server";

export const getGroupList = async () => {
    const response = await requestToGroup('list', {
        method: 'GET',
        headers: {
            'Content-Type': ContentType.JSON,
        },
    },
    AuthManager.getInstance().getToken());
    if (!response.ok) {
        throw new ApiError(await response.json());
    }
    return jsonifyResponse<Group[]>(response);
}

export const getGroupMetaByCode = async (code: string) => {
    const response = await requestToGroup(`${code}`, {
        method: 'GET',
    },
    AuthManager.getInstance().getToken());
    if (!response.ok) {
        throw new ApiError(await response.json());
    }
    return jsonifyResponse<GroupMeta>(response);
}

export const joinGroup = async (code: string) => {
    const response = await requestToGroup(`${code}/join`, {
        method: 'POST',
    },
    AuthManager.getInstance().getToken());
    if (!response.ok) {
        throw new ApiError(await response.json());
    }
    return true;
}

interface CreateGroupRequest {
    name: string;
    startDate: string;
    endDate: string;
    introduction?: string;
    profileImage: string;
}

export const createGroup = async (createGroupRequest: CreateGroupRequest) => {

    const {profileImage, ...requestWithoutProfileImage}: CreateGroupRequest = createGroupRequest;

    const form = new FormData();
    form.append('request', JSON.stringify(requestWithoutProfileImage));
    form.append('profileImage', await imageUrlToBlob(profileImage));
    const response = await requestToGroup('', {
        method: 'POST',
        body: form,
    },
    AuthManager.getInstance().getToken());

    if (!response.ok) {
        throw new ApiError(await response.json());
    }

    return true;
};