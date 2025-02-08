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
import { Loader, Loader2 } from "lucide-react";
import SignUp from "@/app/(auth)/sign-up/page";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";

const formSchema = z.object({
  email: z.string().email(),
});

const AuthForm = ({ type }: { type: string }) => {
  const router=useRouter();
  const [user, setUser] = useState(null);
  const [isloading, setIsLoading] = useState(false);



  const formSchema = authFormSchema(type);



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit= async (data: z.infer<typeof formSchema>)=> {
    setIsLoading(true);



   try {

    //sig-up appwrite

    if(type==="sign-up")
    {
      const newUser=await signUp(data);
       setUser(newUser);
    }
    if(type === "sign-in")
    {
     /* const response = await signIn(
        {
            email:data.email,
            password:data.password,
        }
      )
     if(response) router.push("/")*/ 
    }
   } catch (error) {
    console.log(error)
   }finally
   {
  setIsLoading(false);
   }
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
              {type === "sign-up" && (
                
                
                <>


                <div className="flex gap-4">
                <CustomInput
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your First Name"
                  />

                  <CustomInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                  />

                </div>
                 
                  <CustomInput
                    control={form.control}
                    name="adress1"
                    label="Adress"
                    placeholder="Enter your Specific Adress"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your City"
                  />

                  <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="Example: NY"
                  />
                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Example: 11101"
                  />
                  </div>
                   <div className="flex gap-4">
                   <CustomInput
                    control={form.control}
                    name="dateOfBirth"
                    label="Date Of Birth"
                    placeholder="YYY/MM/DD"
                  />
                  <CustomInput
                    control={form.control}
                    name="ssn"
                    label="SSN"
                    placeholder="Example: 1234"
                  />
                   </div>
                 
                  
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />

              <div className="flex flex-col gap-4">
                <Button className="form-btn" disabled={isloading} type="submit">
                  {isloading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading ...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>

              <footer className="flex justify-center gap-1">
                <p className="text-14 font-normal text-gray-600">
                  {type === "sign-in"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </p>
                <Link
                  className="form-link"
                  href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                >
                  {type === "sign-in" ? "Sign Up" : "Sign In"}
                </Link>
              </footer>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
