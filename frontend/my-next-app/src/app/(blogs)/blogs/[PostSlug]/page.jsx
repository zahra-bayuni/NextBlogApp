import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";

export const dynamicParams = false;
// export const revalidate = 10;

export async function generateStaticParams(){
  const {posts} = await getPosts();
  const slugs = posts.map((post) => ({ PostSlug: post.slug}));
  return slugs;
}


export async function generateMetadata({params}){

  const param = await params;
  const post = await getPostBySlug(param.PostSlug);

  return{
    title: `پست ${post.title}`,
  };
}

async function SinglePost({ params }) {
  // Asynchronous access to `params`
  const param = await params;
  // console.log(param.PostSlug);

  // await new Promise ((res)=> setTimeout(res, 2000));
    const post = await getPostBySlug(param.PostSlug);
    if(!post) notFound();
    // console.log(post);

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
         className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
         fill 
         src={post.coverImageUrl}
         alt={param.PostSlug}
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} />

    </div>
  );
}
export default SinglePost;