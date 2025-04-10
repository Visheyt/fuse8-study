import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import {
  CreateFormValues,
  createFormSchema,
} from '../pages/create-article/schema/form-schema';

export const useArticleForm = () => {
  const { register, handleSubmit, control } = useForm<CreateFormValues>({
    resolver: zodResolver(createFormSchema),
  });

  const contentType = useWatch({
    control,
    name: 'content.type',
  });
  return {
    register,
    handleSubmit,
    contentType,
  };
};
