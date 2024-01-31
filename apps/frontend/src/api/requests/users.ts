import { API_URL } from '@/api/lib/fetcher';
import { UserType } from '@/types/models';
import { CheckCredentialsSchemaType } from '@/types/schemas';
import { CommonResponse } from '@/types/api';
import axios from 'axios';

export const checkCredentials = async (
  data: CheckCredentialsSchemaType
): Promise<CommonResponse<UserType | null>> => {
  return (
    (
      await axios
        .create({ baseURL: API_URL })
        .post('/api/auth/login', data)
    ).data ?? null
  );
};
