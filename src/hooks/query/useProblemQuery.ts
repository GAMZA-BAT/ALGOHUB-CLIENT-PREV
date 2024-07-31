import { getProblemDeadlineReachedAxios } from "@/api/problem/getProblemAxios"
import { useQuery } from "@tanstack/react-query"

export const useProblemDeadlineReached = (groupId: number) => {
  return useQuery({
    queryKey: ['problemDeadlineReached', groupId],
    queryFn: () => getProblemDeadlineReachedAxios(groupId).then(res => res.data),
  })
}