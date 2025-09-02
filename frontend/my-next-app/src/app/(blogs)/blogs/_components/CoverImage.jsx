import Image from "next/image"
import Link from "next/link"


function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mb-6">
        <Link href={`/blogs/${slug}`}>
            <Image 
            src={coverImageUrl} 
            alt={title} 
            fill 
            className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </Link>
   </div>
  )
}

export default CoverImage