import { authAxios } from "@/api"

export const getSolutionAxios = (problemId: number) => {
  return authAxios.get(
    '/solution/solutions',
    {
      params: { problemId }
    }
  )
}
