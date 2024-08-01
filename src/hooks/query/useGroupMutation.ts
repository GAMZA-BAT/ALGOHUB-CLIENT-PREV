import { patchGroupInfo } from "@/api/groupAxios";
import { GroupMeta } from "@/type/group";
import { useMutation } from "@tanstack/react-query";

export const usePatchGroupInfo = () => {
  const mutation = useMutation({
    mutationFn: ({ id, name, startDate, endDate, introduction, groupImage }: GroupMeta) => patchGroupInfo({ id, name, startDate, endDate, introduction, groupImage }),
    onError: (error) => {
      console.log('post comment fetch error: ', error);
    }
  });

  return mutation;
}
