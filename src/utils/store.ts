import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { User } from '@/types/api-types';

export const useAccountStore = create(
  combine(
    {
      account: undefined as undefined | null | User,
    },
    (set) => ({ setAccount: (account: User | null) => set({ account }) }),
  ),
);
