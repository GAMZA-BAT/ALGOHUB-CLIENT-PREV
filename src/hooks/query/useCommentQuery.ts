import { CommentAPIPropType, deleteCommentAxios, getCommentAxios, postCommentAxios } from "@/api/commentAxios"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetComment = (solutionId: number) => {
  return useQuery({
    queryKey: ['getComment', solutionId],
    queryFn: () => getCommentAxios(solutionId).then(res => res.data),
    refetchInterval: 10000,
  })
};

export const usePostComment = () => {
  const mutation = useMutation({
    mutationFn: ({ solutionId, content }: CommentAPIPropType) => postCommentAxios({ solutionId, content }),
    onError: (error) => {
      console.log('post comment fetch error: ', error);
    }
  });

  return mutation;
}

export const useDeleteComment = () => {
  const mutation = useMutation({
    mutationFn: (commentId: number) => deleteCommentAxios(commentId),
    onError: (error) => {
      console.log('delete comment fetch error: ', error);
    }
  });

  return mutation;
}