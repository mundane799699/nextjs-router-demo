"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const LoginPage = () => {
  const router = useRouter();
  const login = () => {
    // set cookie
    Cookies.set("Admin-Token", "1234567890");
    router.push("/");
  };

  const home = () => {
    router.push("/");
  };
  return (
    <>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="mt-10">这是登录页面</h1>
        <button onClick={home} className="border border-gray-400 p-2 m-2 w-40">
          返回主页
        </button>
        <button onClick={login} className="border border-gray-400 p-2 m-2 w-40">
          登录
        </button>
      </div>
    </>
  );
};
export default LoginPage;
