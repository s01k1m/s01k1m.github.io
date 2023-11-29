import { signIn, signOut, useSession } from "next-auth/react";

const GuestbookForm = () => {
  // `session` will match the returned value of `callbacks.session()` from `NextAuth()`
  const { data: session } = useSession();
  console.log("&&&&&&&&&&&&&&&&&&&&", process.env.GITHUB_SECRET);
  console.log("*********************", process.env.NEXT_PUBLIC_GITHUB_SECRET);
  return (
    <>
      {!session && (
        <>
          not signed in <br />
          <button onClick={() => signIn("github")}>로그인하기</button>
        </>
      )}
      <form>
        {/* {session?.user} */}
        <input type="text" className="name bg-red-300" />
        <input type="text" className="w-[300px] h-[50px]" />
        <button type="submit" className="w-[100px] h-[50px] disabled">
          작성하기
        </button>
      </form>
    </>
  );
};

export default GuestbookForm;
