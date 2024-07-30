export interface Group extends GroupMeta {
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