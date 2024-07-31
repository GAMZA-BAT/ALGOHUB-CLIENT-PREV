import { getSolutionAxios } from "@/api/solutionAxios"
import { useQuery } from "@tanstack/react-query"

export const useGetSolution = (problemId: number) => {
  return useQuery({
    queryKey: ['solution', problemId],
    queryFn: () => getSolutionAxios(problemId).then(res => res.data.content),
  })
}
