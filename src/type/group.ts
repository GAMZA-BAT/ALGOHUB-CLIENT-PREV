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