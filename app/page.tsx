import Greeting from "components/home/Greeting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lukuku Next(TS) Starter Boilerplate",
  description: "A frontend NextJS starter boilerplate made with ❤️ by Lukuku.",
};

export default function Page() {
  return <Greeting message={"Welcome to Lukuku Next Boilerplate"} />;
}
