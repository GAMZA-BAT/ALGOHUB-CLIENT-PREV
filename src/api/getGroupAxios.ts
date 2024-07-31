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

export const getGroupRanking = (groupId: number) => {
  return authAxios.get(
    '/group/ranking',
    {
      params: {
        groupId,
      }
    }
  )
}