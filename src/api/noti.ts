import { AuthManager } from "@/datamanager/authManager";
import { jsonifyResponse, requestToNoti } from "@/utils/server";

export interface Notifications {
    id: number;
    groupName: string;
    groupImage: string;
    message: string;
    subContent: string;
    createdAt: string;
    isRead: boolean;
}

export const getNotifications = async () => {
    const response = await requestToNoti('', {
        method: 'GET',
    }, AuthManager.getInstance().getToken());

    if (!response.ok) {
        throw new Error('Failed to get notifications');
    }

return jsonifyResponse<Notifications[]>(response);

}