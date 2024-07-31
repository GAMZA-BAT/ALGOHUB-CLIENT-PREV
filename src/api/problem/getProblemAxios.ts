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
