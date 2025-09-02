"use client"
import { bookmarkPostApi, likePostApi } from "@/services/postServices"
import ButtonIcon from "@/ui/ButtonIcon"
import toPersianDigits from "@/utils/numberFormatter"
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline"
import {  HeartIcon as SolidHeartIcon , BookmarkIcon as SolidBookMarkIcon} from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


function PostInteraction({post}) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isbookmarked, setIsbookmarked] = useState(post.isBookmarked);
  // console.log(post.isLiked);

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      setIsLiked(prev => !prev);
    } catch (error) {
       toast.error(error?.response?.data?.message);
    }
  }

  const bookmarkHandler = async(postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      setIsbookmarked(prev => !prev);

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon/>
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {isLiked ? <SolidHeartIcon /> : <HeartIcon  />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
       {isbookmarked ? <SolidBookMarkIcon /> :  <BookmarkIcon/>}
      </ButtonIcon>
    </div>
  )
}

export default PostInteraction