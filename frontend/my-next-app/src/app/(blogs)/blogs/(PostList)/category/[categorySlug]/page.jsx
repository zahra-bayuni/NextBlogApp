import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/(blogs)/blogs/_components/PostList";
import queryString from "query-string";


async function Category({params , searchParams }) {

  const {categorySlug} = params;
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}&${queries}`);

  const queries = queryString.stringify(searchParams)+ "&" + `categorySlug=${categorySlug}`;  
  const options = await setCookieOnReqc(); // چون اون تابع async شده، اینجا باید await کنیم
   const {posts} = await getPosts(queries, options);
  

  return (
    <div>
        {
            posts.length === 0 ?
            <p className="text-lg text-secondary-600">
                پستی در این دسته بندی پیدا نشد
            </p>:
            <PostList posts={posts} />
        }
    </div>
  )
}

export default Category