
import { Suspense } from "react";
import CardWrapper from "./_components/CardWrapper";
import Fallback from "@/ui/Fallback";
import LatestPost from "./_components/LatestPost";


async function Profile() {

  return(
    <div>
      <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
      <Suspense fallback={<Fallback />}>
        <CardWrapper />
      </Suspense>

      <h2 className='text-xl mb-4 text-secondary-600'>آخرین پست ها</h2>
      <Suspense fallback={<Fallback />}>
        <LatestPost />
      </Suspense>
  </div>
  );

}

export default Profile