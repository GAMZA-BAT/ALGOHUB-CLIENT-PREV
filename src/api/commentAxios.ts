import { authAxios } from "@/api"

export const getCommentAxios = (solutionId: number) => {
  return authAxios.get(
    '/comment',
    {
      params: { solutionId }
    }
  )
};

export interface CommentAPIPropType {
  solutionId: number;
  content: string;
}

export const postCommentAxios = ({ solutionId, content }: CommentAPIPropType) => {
  return authAxios.post(
    '/comment',
    {
      body: {
        solutionId,
        content,
      }
    }
  )
};

export const deleteCommentAxios = (commentId: number) => {
  return authAxios.delete(
    '/comment',
    {
      params: { commentId }
    }
  )
};
