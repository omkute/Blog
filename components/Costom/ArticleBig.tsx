import { BlogPostProps } from "@/types/types";
import { Eye } from "lucide-react";
import Image from "next/image"
import Link from "next/link";


function ArticleBig({ id, title, description, author, date, views, imageUrl }: BlogPostProps) {
    const maxWordLimit = (text: string, maxlimit: number): string => {
        const words = text.trim().split(/\s+/);
        if (words.length > maxlimit) {

            const slicedWords = words.slice(0, maxlimit).join(" ") + "...";
            return slicedWords
        }
        return text
    }

    return (
        <Link href={`blogs/${id}`} className=" flex flex-col lg:w-[50%] max-h-fit p-3 shadow-2xl border-2 border-amber-300 rounded-2xl lg:m-3">
            {/* Big One */}
            <Image
                src={imageUrl}
                alt="Blog Image"
                width='1000'
                height="500"
                className=" rounded-2xl"
            />
          
             <div className="flex flex-col space-x-3 mx-2">
                <h2 className=" text-md lg:text-xl font-bold">{maxWordLimit(title, 14)}</h2>
                <p className=" text-sm text-gray-500">{maxWordLimit(description, 25)}</p>
            </div>
            <div className=" flex justify-between items-center">
                <div>
                    <p className=" text-sm text-gray-600">Author: {author}</p>
                    <p className=" text-xs"> Date : {date}</p>

                </div>
                <p className=" flex items-center space-x-2 text-sm text-gray-600"> <Eye/>
                <span>{views}</span>
                </p>
            </div>
            
        </Link>
    )
}

export default ArticleBig