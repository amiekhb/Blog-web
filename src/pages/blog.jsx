// import React from "react";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// const Blog = () => {
//   const [article, setArticles] = useState([]);

//   const getArticleData = async () => {
//     const response = await fetch("https://dev.to/api/articles?per_page=9");
//     const data = await response.json();
//     setArticles(data);
//     // console.log("data", data)
//   };
//   useEffect(() => {
//     getArticleData();
//   }, []);
//   return (
//     <div className="mt-32 text-center ">
//       <div className="grid grid-cols-3 w-full ">
//         {article.map((article) => {
//           console.log("article", article);
//           <Link href={`/blog/${article.id}`}>
//             <div className=" h-[600px] w-[400px]">
//               <div className="  border border-gray-600 rounded-lg justify-center">
//                 {" "}
//                 <div className=" gap-3 m-3 flex flex-col items-start">
//                   {" "}
//                   <img
//                     className=" rounded-lg "
//                     src={article.cover_image}
//                     alt=""
//                   />
//                   <div className="text-indigo-600 bg-gray-50 w-[110px] justify-center rounded-lg h-8 flex items-center">
//                     {article.type_of}
//                   </div>
//                   <div className="text-black font-semibold text-xl">
//                     {article.title}
//                   </div>
//                   <div className="text-gray-500">
//                     {article.readable_publish_date}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>;
//         })}
//       </div>
//     </div>
//   );
// };

// // console.log("articles", article);
// // return (
// // );

// export default Blog;
// import React, { useContext } from "react";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Blog from "@/components/All blog posts/blog";

// const BloG = () => {
//   const [article, setArticles] = useState([]);

//   const getArticleData = async () => {
//     const response = await fetch("https://dev.to/api/articles?per_page=9");
//     const data = await response.json();
//     setArticles(data);
//     // console.log("data", data)
//   };

//   useEffect(() => {
//     getArticleData();
//   }, []);

//   console.log("articles", article);
//   return (
//     <div className="mt-32 text-center ">
//       <p className="text-xl font-bold mb-10">All Blog Post </p>

//       <div className="grid grid-cols-3 w-full ">
//         <Blog>
//           {article.map((article) => {
//             console.log("article", article);

//             return (
//               <Link href={`/blog/${article.id}`}>
//                 zurag={article.cover_image}
//                 category={article.type_of}
//                 headline={article.title}
//                 udur={article.readable_publish_date}
//               </Link>
//             );
//           })}
//         </Blog>
//       </div>
//     </div>
//   );
// };

// export default BloG;
import BLOG from "@/components/All blog posts";
import React from "react";

const Blog = () => {
  return (
    <div>
      <BLOG />
    </div>
  );
};

export default Blog;
