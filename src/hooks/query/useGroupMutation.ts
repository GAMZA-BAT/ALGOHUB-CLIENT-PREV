import { deleteGroupMember, patchGroupInfo } from "@/api/groupAxios";
import { DeleteGroupMemberAPIType, GroupMeta } from "@/type/group";
import { useMutation } from "@tanstack/react-query";

export const usePatchGroupInfo = () => {
  const mutation = useMutation({
    mutationFn: ({ id, name, startDate, endDate, introduction, groupImage }: GroupMeta) => patchGroupInfo({ id, name, startDate, endDate, introduction, groupImage }),
    onError: (error) => {
      console.log('patch group info fetch error: ', error);
    }
  });

  return mutation;
}

export const useDeleteGroupMember = () => {
  const mutation = useMutation({
    mutationFn: ({ userId, groupId }: DeleteGroupMemberAPIType) => deleteGroupMember({ userId, groupId }),
    onError: (error) => {
      console.log('delete group member fetch error: ', error);
    }
  })

  return mutation;
}