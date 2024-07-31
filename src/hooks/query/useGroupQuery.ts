import { getGroupMemberListAxios } from "@/api/group/getGroupAxios"
import { useQuery } from "@tanstack/react-query"

export const useGroupMemberList = (groupId: number) => {
  return useQuery({
    queryKey: ['groupMemberList', groupId],
    queryFn: () => getGroupMemberListAxios(groupId).then(res => res.data),
  })
}