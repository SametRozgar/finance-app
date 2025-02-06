"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email(),
});

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  
  function onSubmit(values: z.infer<typeof authFormSchema>) {
  
    console.log(values);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link className=" crusor-pointer flex items-center gap-1 " href="/">
          <Image src="/icons/logo.svg" width={34} height={34} alt="horizon" />
          <h1 className="text-26 font-inm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sing Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link Your Account To Get Started"
                : "Please Enter Your Details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-xol gap-4">{/*Plaid Link*/}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
             



            <CustomInput 
            control={form.control} name="email" label="Email" placeholder="Enter your email"
            />

<CustomInput 
            control={form.control} name="password" label="Password" placeholder="Enter your password"
            />



              
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
