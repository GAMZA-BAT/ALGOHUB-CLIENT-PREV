import { getProblemAxios, getProblemDeadlineReachedAxios, postProblemAPIType, postProblemAxios } from "@/api/getProblemAxios"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useProblemDeadlineReached = (groupId: number) => {
  return useQuery({
    queryKey: ['problemDeadlineReached', groupId],
    queryFn: () => getProblemDeadlineReachedAxios(groupId).then(res => res.data),
    refetchInterval: 10000,
  })
}

export const useProblem = (groupId: number) => {
  return useQuery({
    queryKey: ['problem', groupId],
    queryFn: () => getProblemAxios(groupId).then(res => res.data),
    refetchInterval: 10000,
  })
}

export const usePostProblem = () => {
  const mutation = useMutation({
    mutationFn: ({ groupId, link, startDate, endDate }: postProblemAPIType) => postProblemAxios({ groupId, link, startDate, endDate }),
    onError: (error) => {
      console.log('post problem fetch error: ', error);
    }
  })

  return mutation;
}