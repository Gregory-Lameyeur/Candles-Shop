import { User } from '@/types/api-types';
import { useAccountStore } from '@/utils/store';
import { useCallback } from 'react';
import { apiFetch } from '@/utils/api';

export enum AuthStatus {
  Unknonw = 0,
  Authenticated = 1,
  Guest = 2,
}

export function useAuth() {
  const { account, setAccount } = useAccountStore();

  let status;
  switch (account) {
    case null:
      status = AuthStatus.Guest;
    case undefined:
      status = AuthStatus.Unknonw;
    default:
      status = AuthStatus.Authenticated;
  }
  const authenticate = useCallback(() => {
    apiFetch<User>('/me')
      .then(setAccount)
      .catch(() => setAccount(null));
  }, []);

  const login = useCallback((username: string, password: string) => {
    apiFetch<User>('/login', { json: { username, password } }).then(setAccount);
  }, []);

  const logout = useCallback(() => {
    apiFetch<User>('/logout', { method: 'DELETE' }).then(setAccount);
  }, []);

  return {
    status,
    authenticate,
    login,
    logout,
  };
}
