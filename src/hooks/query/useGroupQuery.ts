import { getGroupInfo, getGroupMemberListAxios, getGroupRanking } from "@/api/getGroupAxios"
import { GroupType, MemberDataType } from "@/type/group"
import { useQuery } from "@tanstack/react-query"

export const useGroupMemberList = (groupId: number) => {
  return useQuery<MemberDataType[], Error>({
    queryKey: ['groupMemberList', groupId],
    queryFn: () => getGroupMemberListAxios(groupId).then(res => res.data),
  })
}

export const useGroupRanking = (groupId: number) => {
  return useQuery({
    queryKey: ['groupRanking', groupId],
    queryFn: () => getGroupRanking(groupId).then(res => res.data),
  })
}

export const useGroupInfo = (groupId: number) => {
  return useQuery<GroupType, Error>({
    queryKey: ['groupInfo', groupId],
    queryFn: () => getGroupInfo(groupId).then(res => res.data),
  })
}