// "use client"
// import { Button } from '@/components/ui/button'
// import { supabase } from '@/Services/supabaseClient'
// import Image from 'next/image'
// import React from 'react'

// function Login() {
//     // Sign in with Google authentication
//     const signInWithGoogle=async()=>{
//        const {error}=await supabase.auth.signInWithOAuth({
//         provider:'google',
       
//        })
//        if(error){
//         console.error('Error signing in with Google:', error.message)
//     }
// return (
//      <div className='flex flex-col items-center justify-center h-screen'> 
//         <div className='flex flex-col items-center border rounded-2xl p-8 '>
//               <Image src={'/logo1.png'} alt='logo' width={400} height={100} className='w-[180px] '/>
//               <div className='flex flex-col items-center '>
//                 <Image src={'/login1.png'} alt='login' width={600} height={400} className='w-[400px] h-[350px] rounded-2xl'/>
//               <h2 className='text-2xl font-bold text-center m-5'>Welcome To Ai Cruter Platform</h2>
//               <p className='text-gray-500 text-center'>Sign in With Google Authentication</p>
//               <Button className='mt-7 w-full' onClick={signInWithGoogle}> Login With Google </Button>
//               </div>
//         </div>
//       </div>

// )

// }

// export default Login

"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/Services/supabaseClient";
import Image from "next/image";
import React from "react";

function Login() {
  // Sign in with Google
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="flex flex-col items-center border shadow-md rounded-2xl p-8 bg-white w-full max-w-md">
        {/* Logo */}
        <Image
          src="/logo1.png"
          alt="Platform Logo"
          width={400}
          height={100}
          className="w-[180px] mb-4"
        />

        {/* Login Illustration */}
        <Image
          src="/login1.png"
          alt="Login Illustration"
          width={600}
          height={400}
          className="w-full h-[250px] object-cover rounded-2xl mb-6"
        />

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-center mb-2">
          Welcome to AI Recruiter Platform
        </h2>
        <p className="text-gray-500 text-center mb-5">
          Sign in using your Google account to get started.
        </p>

        {/* Login Button */}
        <Button className="w-full" onClick={signInWithGoogle}>
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
