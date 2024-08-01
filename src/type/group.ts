export interface GroupListResponse {
    inProgress: GroupType[];
    queued: GroupType[];
    done: GroupType[];
}

export interface GroupType extends GroupMeta {
    ownerNickname: string;
    isOwner: boolean;
}

export interface GroupMeta {
    id: number;
    name: string;
    groupImage: string;
    startDate: string;
    endDate: string;
    introduction?: string;
}

export interface MemberDataType {
    memberId: number;
    nickname: string;
    joinDate: string;
    achivement: string;
    isOwner: boolean;
    profileImage: string;
}

export interface GroupRankingType {
    profileImage: string;
    rank: number;
    solvedCount: number;
    userNickname: string;
}

export interface DeleteGroupMemberAPIType {
    userId: number;
    groupId: number;
}