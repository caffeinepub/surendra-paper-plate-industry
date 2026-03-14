import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface EnquiryForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  productInterest: string;
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: EnquiryForm) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitEnquiry(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.productInterest,
      );
    },
  });
}

export function useGetAllEnquiries() {
  const { actor, isFetching: actorFetching } = useActor();
  return useQuery({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEnquiries();
    },
    enabled: !!actor && !actorFetching,
  });
}
