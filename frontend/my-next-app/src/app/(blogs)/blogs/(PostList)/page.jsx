import { Suspense } from "react"
import PostList from "../_components/PostList"
import Spinner from "@/ui/Spinner"
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";



// export const experimental_ppr = true;

async function BlogPage({ searchParams }) {
  // console.log(searchParams);
  const queries = queryString.stringify(searchParams);   
  const options = await setCookieOnReq(); // چون اون تابع async شده، اینجا باید await کنیم
  const {posts} = await getPosts(queries, options);

  const { search } = searchParams;

  return <>
    {
      search ? <p className="mb-4 text-secondary-700">
        {
          posts.length === 0 ? "" : `نشان دادن ${posts.length} نتیجه برای  `
        }
        <span className="font-bold">&quot;{search}&quot;</span>
      </p> : null
    }
  
    <PostList posts={posts} />
    
  </>
}

export default BlogPage