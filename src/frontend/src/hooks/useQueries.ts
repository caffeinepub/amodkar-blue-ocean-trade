import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BusinessProfile } from '../backend';

export function useBusinessProfile() {
  const { actor, isFetching } = useActor();

  return useQuery<BusinessProfile>({
    queryKey: ['businessProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getBusinessProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitInquiry(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

