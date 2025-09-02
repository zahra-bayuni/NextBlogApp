import Spinner from "@/ui/Spinner"


function Loading() {
  return (
    <div className="flex flex-col items-center gap-x-4 justify-center">
        <span className="text-lg text-secondary-500 ">درحال بارگذاری اطلاعات</span>
        <Spinner />
    </div>
  )
}

export default Loading