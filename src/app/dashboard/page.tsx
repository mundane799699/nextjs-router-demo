"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const DashBoard = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("Admin-Token");
    router.push("/login");
  };
  return (
    <>
      <div className="container mx-auto flex flex-col items-center p-10">
        <h1 className="text-red-500 font-bold text-2xl">这是dashboard页面</h1>
        <button onClick={logout} className="border border-gray-400 p-2 m-10">
          退出登录
        </button>
      </div>
    </>
  );
};
export default DashBoard;
