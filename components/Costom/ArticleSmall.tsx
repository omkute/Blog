import { BlogPostProps } from "@/types/types";
import { Eye } from "lucide-react";
import Image from "next/image"
import Link from "next/link";


function ArticleSmall({ id, title, description, date, views, imageUrl }: BlogPostProps) {
    const maxWordLimit = (text: string, maxlimit: number): string => {
        const words = text.trim().split(/\s+/);
        if (words.length > maxlimit) {

            const slicedWords = words.slice(0, maxlimit).join(" ") + "...";
            return slicedWords
        }
        return text
    }

    return (
        <Link href={`blogs/${id}`} className=" flex flex-col lg:flex lg:flex-row lg:p-2 p-3  shadow-2xl border-2 border-amber-300 rounded-xl m-3">
            {/* Big One */}
           <div className=" my-auto">
             <Image
                src={imageUrl}
                alt="Blog Image"
                width='500'
                height="500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=" rounded-2xl my-auto"
            />
            
            <div className=" flex justify-between px-2 items-center">
                <p className=" text-xs"> {date}</p>
                <p className=" flex items-center"> <Eye width='15px' className="mx-2" />
                    <span className=" text-xs">{ " "+ views}</span>
                </p>
            </div>
          
           </div>
            <div className="flex flex-col space-x-3 mx-2">
                <h2 className=" text-md lg:text-xl font-bold">{maxWordLimit(title, 10)}</h2>
                <p className=" text-sm text-gray-500">{maxWordLimit(description, 25)}</p>
            </div>
            
            {/* <div className=" flex justify-between">
                <p className=" text-sm text-gray-600">Published BY: {author}</p>
                <p className=" text-sm text-gray-600">Views: {views}</p>
            </div> */}
        </Link>
    )
}

export default ArticleSmall