import ArticleBig  from "@/components/Costom/ArticleBig";
import ArticleSmall from "@/components/Costom/ArticleSmall";
import NavBar from "@/components/Costom/NavBar";
import Tags from "@/components/Costom/Tags";



const tags = ["MERN","React","Nextjs","Auth","MongoDb","Tailwind","Javascript"]
export default function Home() {

  

  return (
    <section className=" lg:w-[80vw] mx-auto  ">
      <NavBar />
      <section className=" p-3 lg:flex lg:justify-center lg:my:auto">
        <ArticleBig
          id="2122"
          title="Writing Great API Documentation: Best Practices with OpenAPI and Hashnode's Docs Product"
          description="If you are a devtool company or any tech company catering to developers and you provide APIs, the most effective way to encourage them to use your product is by offering well-crafted API documentation. API documentation typically includes code exampl"
          author="om kute"
          date="3/3/3333"
          views={3}
          imageUrl="/mern.png"
        />
        <div className=" lg:block lg:max-w-[50%]">
          {/* Small One */}
          <ArticleSmall
          id="9092"
          title="Writing Great API Documentation: Best Practices with OpenAPI and Hashnode's Docs Product"
          description="If you are a devtool company or any tech company catering to developers and you provide APIs, the most effective way to encourage them to use your product is by offering well-crafted API documentation. API documentation typically includes code exampl"
          author="om kute"
          date="3/3/3333"
          views={3}
          imageUrl="/mern.png"
          
        />
        <ArticleSmall
          id="9092"
          title="Writing Great API Documentation: Best Practices with OpenAPI and Hashnode's Docs Product"
          description="If you are a devtool company or any tech company catering to developers and you provide APIs, the most effective way to encourage them to use your product is by offering well-crafted API documentation. API documentation typically includes code exampl"
          author="om kute"
          date="3/3/3333"
          views={3}
          imageUrl="/mern.png"
          
        />
        <ArticleSmall
          id="9092"
          title="Writing Great API Documentation: Best Practices with OpenAPI and Hashnode's Docs Product"
          description="If you are a devtool company or any tech company catering to developers and you provide APIs, the most effective way to encourage them to use your product is by offering well-crafted API documentation. API documentation typically includes code exampl"
          author="om kute"
          date="3/3/3333"
          views={3}
          imageUrl="/mern.png"
        />
        
        </div>
      </section>
      <section className=" my-4 p-3 ">
        <h2 className=" text-4xl font-extrabold ">Tags</h2>
        <div className="flex space-x-3 overflow-scroll">
          {
          tags.map((tag,index)=>(
           
             <Tags key={index}
            tagname={tag}
            />
          
          ))
        }
        </div>
      </section>
    </section>
  );
}
