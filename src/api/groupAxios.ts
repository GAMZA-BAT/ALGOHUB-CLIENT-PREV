import { authAxios, formAxios } from "@/api"
import { DeleteGroupMemberAPIType, GroupMeta } from "@/type/group"
import { imageUrlToBlob } from "@/utils/image"

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

export const patchGroupInfo = async ({ id, name, startDate, endDate, introduction, groupImage }: GroupMeta) => {
  const form = new FormData();
  form.append('request', JSON.stringify({ id, name, startDate, endDate, introduction }));
  if (groupImage)
    form.append('groupImage', await imageUrlToBlob(groupImage));

  return formAxios.patch(
    '/group', form
  )
}

export const deleteGroupMember = ({ userId, groupId }: DeleteGroupMemberAPIType) => {
  return authAxios.delete(
    '/group/delete',
    {
      params: {
        userId,
        groupId,
      }
    }
  )
}