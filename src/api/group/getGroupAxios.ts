import { authAxios } from "@/api"

export const getGroupMemberListAxios = (groupId: number) => {
  return authAxios.get(
    `/group/member-list`,
    {
      params: {
        groupId,
      }
    }
  )
} 