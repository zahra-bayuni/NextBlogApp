"use client"
import { createComment } from "@/lib/action";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useState, useEffect, useActionState} from "react";
import toast from "react-hot-toast";

const initialState ={
  error: "",
  message: "",
}


function CommentForm({postId, parentId, onClose}) {
    const [text, setText] = useState("");
    const [state, formAction] = useActionState(createComment, initialState); // useFormState in react V 18.

    useEffect( () => {
      if(state?.message){
        toast.success(state.message);
        onClose();
      }
      if(state?.error){
        toast.error(state.error);
      }
    },[state]);
   
  return (
    <div>
        <div className="flex justify-center mt-4">
            <div className="max-w-md w-full">
                <form 
                  // action={createComment.bind(null, postId, parentId)}
                  action={async(formData) => {
                    await formAction({formData, postId, parentId})
                  }}
                  className="space-y-7"
                 >
                <TextArea 
                  name="text"
                  label= "متن نظر"
                  value={text}
                  isRequired
                  onChange = {(e)=> setText(e.target.value)}
                  />
                 
                  <SubmitButton>تایید</SubmitButton>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CommentForm