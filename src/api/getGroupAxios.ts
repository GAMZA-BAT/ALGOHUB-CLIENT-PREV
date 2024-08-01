import { authAxios } from "@/api"
import { GroupMeta } from "@/type/group"

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

export const getGroupInfo = (groupId: number) => {
  return authAxios.get(
    '/group/group-info',
    {
      params: {
        groupId,
      }
    }
  )
}

export const patchGroupInfo = ({ id, name, startDate, endDate, introduction, groupImage }: GroupMeta) => {
  return authAxios.patch(
    '/group',
    {
      body: {
        id,
        name,
        startDate,
        endDate,
        introduction,
        groupImage,
      }
    }
  )
}