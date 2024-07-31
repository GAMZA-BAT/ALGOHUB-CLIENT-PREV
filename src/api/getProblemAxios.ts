import { authAxios } from "@/api"

export const getProblemDeadlineReachedAxios = (groupId: number) => {
  return authAxios.get(
    `/problem/deadline-reached`,
    {
      params: {
        groupId,
      }
    }
  )
}

export const getProblemAxios = (groupId: number) => {
  return authAxios.get(
    '/problem',
    {
      params: {
        groupId,
      }
    }
  )
}