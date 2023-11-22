import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center me-auto">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Link href="/sign-up">
          <CustomButton
            title="Sign Up"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] me-5"
          />
        </Link>
        <Link href="/sign-in">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
