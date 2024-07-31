import { getProblemAxios, getProblemDeadlineReachedAxios } from "@/api/getProblemAxios"
import { useQuery } from "@tanstack/react-query"

export const useProblemDeadlineReached = (groupId: number) => {
  return useQuery({
    queryKey: ['problemDeadlineReached', groupId],
    queryFn: () => getProblemDeadlineReachedAxios(groupId).then(res => res.data),
  })
}

export const useProblem = (groupId: number) => {
  return useQuery({
    queryKey: ['problem', groupId],
    queryFn: () => getProblemAxios(groupId).then(res => res.data.content),
  })
}