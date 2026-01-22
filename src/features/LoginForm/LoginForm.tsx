import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormWrapper,
  Title,
  Field,
  Label,
  Input,
  Error,
  SubmitButton,
} from "./LoginForm.styled";
import { loginSchema, type LoginUser } from "./loginSchema";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { loginUser } from "@/api/loginUser";
import { useState } from "react";
import PageLoader from "@/components/modules/PageLoader/PageLoader";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginUser>({
    resolver: zodResolver(loginSchema),
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = async (data: LoginUser) => {
    console.log("LOGIN DATA:", { email: data.login, pass: data.password });
    setLoading(true);
    await dispatch(loginUser({ email: data.login, pass: data.password }));
    setLoading(false);
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>Вхід</Title>

        <Field>
          <Label>Логін</Label>
          <Input {...register("login")} />
          {errors.login && <Error>{errors.login.message}</Error>}
        </Field>

        <Field>
          <Label>Пароль</Label>
          <Input type="password" {...register("password")} />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Field>

        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? "Вхід..." : "Увійти"}
        </SubmitButton>
      </FormWrapper>
      {loading && <PageLoader />}
    </>
  );
};
