"use client";
import "/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGoogle } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const gProvider = new GoogleAuthProvider();

  useEffect(() => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.replace("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, gProvider).then(() => {
        router.replace("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      {/* <ToastMessage /> */}
      <Image
        src="/logo.svg"
        width={200}
        height={200}
        alt="logo"
        className="absolute top-3"
      />
      <div className="flex items-center flex-col border-slate-900 border-[3px] rounded-[30px] p-10">
        <div className="text-center">
          <div className="text-4xl font-bold">Login to your Account</div>
        </div>
        <div className="gap-2 w-full mt-10 mb-5 flex justify-center">
          <div
            className="bg-gradient-to-r from-green-500 via-lime-300 to-yellow-400 w-[330px] h-14 rounded-full cursor-pointer p-[2px]"
            onClick={signInWithGoogle}
          >
            <div className="flex items-center justify-center gap-3 text-white font-semibold w-full h-full rounded-full bg-slate-800">
              <IoLogoGoogle size={24} />
              <span>Login with Google</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-5 h-[1px] bg-slate-400"></span>
          <span className="font-semibold text-gray-500">OR</span>
          <span className="w-5 h-[1px] bg-slate-400"></span>
        </div>
        <form
          className="flex flex-col items-center gap-3 w-[500px] mt-5"
          onSubmit={signInUser}
          method="POST"
        >
          <input
            id="email"
            placeholder="Email"
            name="email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
            className="w-full h-14 bg-slate-200 rounded-full outline-none border-none px-5 text-gray-900 placeholder:text-gray-900"
          />
          <input
            id="password"
            name="password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Password"
            className="w-full h-14 bg-slate-200 rounded-full outline-none border-none px-5 text-gray-900 placeholder:text-gray-900"
            autoComplete="new-password"
          />
          <div className="text-right w-full text-gray-800 cursor-pointer">
            <span
              className="cursor-pointer"
              // onClick={resetPassword}
            >
              Forget Password?
            </span>
          </div>
          <button className="mt-4 w-[150px] h-14 rounded-full outline-none text-base font-semibold bg-gradient-to-r from-slate-600 via-slate-800 to-slate-900 text-white">
            Login
          </button>
        </form>
        <div className="flex justify-center gap-1 text-c3 mt-5">
          <span>Not a member yet?</span>
          <Link
            href="/sign-up"
            className="font-semibold text-slate-900 underline underline-offset-2 cursor-pointer"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
