import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";

export const Navbar = async () => {
  const session = await getAuthSession()
  return (
    <div className='fixed top-0 inset-x-0  bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href={"/"} className="flex gap-2 items-center">
            <p className='hidden text-zinc-700 text-sm font-medium md:block'>Simple Social</p>
        </Link>

        {session?.user ? (
          <p>You are logged in</p>
        ): ( 
          <Link href={'/sign-in'} className={buttonVariants()}>Sign In</Link>

        )}
      </div>
    </div>
  );
};
