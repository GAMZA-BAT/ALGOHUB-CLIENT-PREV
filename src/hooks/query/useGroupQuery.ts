import { getGroupMemberListAxios, getGroupRanking } from "@/api/getGroupAxios"
import { useQuery } from "@tanstack/react-query"

export const useGroupMemberList = (groupId: number) => {
  return useQuery({
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