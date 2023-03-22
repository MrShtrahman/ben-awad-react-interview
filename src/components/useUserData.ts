import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const USER_URL = 'https://randomuser.me/api';

export const useUserData = (pageIndex: number) => {
  const [allowedToFetch, setAllowedToFetch] = useState(true);
  return useQuery({
    queryKey: ['userInfo', pageIndex],
    queryFn: async () => {
      const { data } = await axios.get(`${USER_URL}?page=${pageIndex}`);
      return data;
    },
    enabled: allowedToFetch,
    onSuccess: () => {
      setAllowedToFetch(false);
    }
  });
};
