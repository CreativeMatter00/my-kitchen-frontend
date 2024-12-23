import { apiGet, apiPost, apiDelete, apiPatch } from "@/api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Fetch Hook
export const useFetchData = (key: string[], endPoint: string) => {
  return useQuery({
    queryKey: key,
    queryFn: () => apiGet(endPoint),
  });
};

// Add Hook
export const useAddData = (key: string[], endPoint: string, token?: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => apiPost(endPoint, payload, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });
};

// Update Hook
export const useUpdateData = (key: string[], endPoint: string, token?:string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => apiPatch(endPoint, payload, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });
};

// Delete Hook
export const useDeleteData = (key: string[], endPoint: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiDelete(`${endPoint}/${id}`), // Assuming the ID is appended to the endpoint
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });
};
