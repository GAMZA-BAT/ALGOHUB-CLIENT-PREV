import { getSolutionAxios, getSolutionByIdAxios } from "@/api/solutionAxios"
import { useQuery } from "@tanstack/react-query"

export const useGetSolution = (problemId: number) => {
  return useQuery({
    queryKey: ['solution', problemId],
    queryFn: () => getSolutionAxios(problemId).then(res => res.data.content),
    refetchInterval: 10000,
  })
}

export const useGetSolutionById = (solutionId: number) => {
  return useQuery({
    queryKey: ['solutionById', solutionId],
    queryFn: () => getSolutionByIdAxios(solutionId).then(res => res.data),
    refetchInterval: 10000,
  })
}