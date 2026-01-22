import { z } from 'zod';

export const loginSchema = z.object({
  login: z
    .string()
    .min(3, 'Мінімум 3 символи')
    .max(50, 'Занадто довгий логін'),

  password: z
    .string()
    .min(6, 'Мінімум 6 символів')
    .max(100, 'Занадто довгий пароль'),
});

export type LoginUser = z.infer<typeof loginSchema>;
