import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar: string) => ({
        url: 'update-avatar',
        method: 'PUT',
        body: { avatar },
        credentials: 'include' as const,
      }),
    }),
    editProfile: builder.mutation({
      query: ({ name }) => ({
        url: 'update-user',
        method: 'PUT',
        body: { name },
        credentials: 'include' as const,
      }),
    }),
    editPassword: builder.mutation({
      query: ({ currentPassword, newPassword }) => ({
        url: 'update-password',
        method: 'PUT',
        body: { currentPassword, newPassword },
        credentials: 'include' as const,
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useEditPasswordMutation,
} = userApi;
