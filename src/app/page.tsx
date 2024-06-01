import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SignIn from "./auth/signin/page";

export const metadata: Metadata = {
  title: "Wishwamart",
  description: "Wishwamart Web Application",
};

export default function Home() {
  return (
    <>
      <SignIn/>
    </>
  );
}
