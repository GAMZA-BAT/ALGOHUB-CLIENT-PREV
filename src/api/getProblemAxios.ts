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

export interface postProblemAPIType {
  groupId: number;
  link: string;
  startDate: string;
  endDate: string;
}
export const postProblemAxios = ({ groupId, link, startDate, endDate }: postProblemAPIType) => {
  return authAxios.post(
    '/problem',
    {
      groupId,
      link,
      startDate,
      endDate,
    }
  )
}