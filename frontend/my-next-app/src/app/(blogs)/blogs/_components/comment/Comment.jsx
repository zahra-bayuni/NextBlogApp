import Avatar from "@/ui/Avatar"
import Button from "@/ui/Button"
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline"


function Comment({comment, onAddComment}) {
  return (
   <>
   <div className="">
    <div className="">
      <Avatar 
      height={34} 
      width={34} 
      alt={comment.user?.name || "-"}
      src={comment.user.avatarUrl}
       />
       <div className="text-sm w-full text-secondary-600">
        <span className="font-bold block mb-1">{comment.user.name}</span>
        <span className="block text-secondary-500 text-xs">
          {comment.createdAt}
        </span>
       </div>
    </div>
    <div>
      {
        comment.openToComment && (
          <Button
          onClick={onAddComment}
          variant="secondaary"
          className="text-sm flex gap-x-1 p-1 rounded-lg text-secondary-500 bg-secondary-200"
          >
            <span className="ml-1">
              <ArrowUturnRightIcon className="w-4"/>
            </span>
            <span>پاسخ</span>
          </Button>
        )}
    </div>
   </div>
   <p className="text-secondary-700 leading-loose lg:leading-8 text-xs lg:text-base">
    {comment.content.text}
   </p>
   </>
  )
}

export default Comment