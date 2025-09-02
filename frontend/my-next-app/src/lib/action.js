"use server"

import { createCommentApi } from "@/services/commentService"
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";

// export async function createComment(postId, parentId , formData){

export async function createComment(prevState, { formData, postId, parentId} ){
  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  }
    const options = await setCookieOnReq(); // چون اون تابع async شده، اینجا باید await کنیم
    

    try {
      const{ message } = await createCommentApi(rawFormData, options); 
      revalidatePath("/blogs/[PostSlug]"); 
      return{
        message,
      };
    } catch (err) {
        const error = err?.response?.data?.message;
        return{
          error,
        };
    }
   
}