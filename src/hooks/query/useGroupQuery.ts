import { getGroupInfo, getGroupMemberListAxios, getGroupRanking as getGroupRankingList } from "@/api/groupAxios"
import { GroupRankingType, GroupType, MemberDataType } from "@/type/group"
import { useQuery } from "@tanstack/react-query"

export const useGroupMemberList = (groupId: number) => {
  return useQuery<MemberDataType[], Error>({
    queryKey: ['groupMemberList', groupId],
    queryFn: () => getGroupMemberListAxios(groupId).then(res => res.data),
  })
}

export const useGroupRankingList = (groupId: number) => {
  return useQuery<GroupRankingType[], Error>({
    queryKey: ['groupRanking', groupId],
    queryFn: () => getGroupRankingList(groupId).then(res => res.data),
  })
}

export const useGetGroupInfo = (groupId: number) => {
  return useQuery<GroupType, Error>({
    queryKey: ['groupInfo', groupId],
    queryFn: () => getGroupInfo(groupId).then(res => res.data),
  })
}
