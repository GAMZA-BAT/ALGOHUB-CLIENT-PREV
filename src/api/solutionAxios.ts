import { authAxios } from "@/api"

export const getSolutionAxios = (problemId: number) => {
  return authAxios.get(
    '/solution/solutions',
    {
      params: { problemId }
    }
  )
}

export const getSolutionByIdAxios = (solutionId: number) => {
  return authAxios.get(
    '/solution/solution',
    {
      params: { solutionId }
    }
  )
}
