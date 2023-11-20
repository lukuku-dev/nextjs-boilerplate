import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub Page",
};

function page() {
  return <div>A Sub Page</div>;
}

export default page;
