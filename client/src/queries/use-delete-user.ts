import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "./delete-user";
import { ApiResponse } from "../types/api";
import { User } from "../types/entities";

export const useDeleteUser= () => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponse<User>, Error, string>({
        mutationFn: deleteUser,
        onSuccess: () => {
            // Invalidate the query to refetch updated data
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};