import React, { useContext } from "react";
import Blog from "./blog";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "../Loader";
import { MyContext } from "@/pages/provider";

// const medeenuud = [
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-SvH~z-mGLp~6yzyAcLXyM0ZLQDdurTguok8IU7e6t-8bVXldStP5ZvHQVizoJI2PbNKnF97u~5r7OaKWPliYNVuPgj6uv-dwzbO35pp8jAKECiDeJ6z9PFZtgvQtjJf~uR3i4GU5SOj2BSmjKS3IqO24xW2MKu6ye2~OVevqRBv7LpPJ7RrW5nydfVTa~aQWt9~54gByB9hFNCQDJAx8IUQg9hFIGdRpFuW13Ssp1rSm~Dc~Nsot387YbNX~0POxjlzS6x3vN-OiEzP~qZm6-nq~CiwVGTq~F0F6B6-uOfXDc1Fz~9df2iEUC6ZBe6~nwdCrZSly1V1Z6ezbm6pA__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAGpUoxLs0LOs8E~JOjUBUHNDF9cFu-VggNVbbr9V82WRUI5RG3A6f9mVAqYfGOf4-oCILpHCy4aMxKhwlPyBUfNeE3KpYUCyWxvqmOwCNXWkeGeL3hIRJ5gGlvmLmUqoRI2JXvNYtnFRtyKjN1CntIscIqTb5ZEzjhg2fz1nXYjuVhf1CyuQay7Y-mq7Oz9-yKmBRRo5YdsAhJ4XoI3S-9lzyOpMMtzrKxRmAbbF8q6T0CvwmUVioYdZ0fs~m-5dFRSv6z~-Ukt3CCpFiUKjBU0vx4uZx8ewRCihN6~wYnBeXwmKfdMAePSy3oNTGEVC5NoDH2Ak95KAxcwbUOktg__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/3969/1462/48009e641f454298f62e13de84ac0a09?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-2fo8txVz1I4UrHqoycVEkNagCCXVM94t~4pAmfKymjCgkL5SOJRcZAO564wb5fEsCZVPTqGe0LCu51t2Gi6UjDLe-rBlsryW~2vIl7up0HcK~4fC9OzAiBT2Uvr3UcIXBc9FZS2JxRxtiEpA9ru6NvzoyHGlbJA7E3MXgxf4jQXe6x9lHSbhRgb7SPWM4mvgagvXjb5zna5-k~UUB2RWCRn1AsmasonpR3pXYPkIvJ6Ovu6clx0xPDnD-vWUbYhVfG~uGTBOCcmMcwGTBQCBhwIWlDj7wzbVb5kE9mknKFPd0qm29W5NFzVuaYwOvdj78qlDM5Az2oxfbuK7Q0eg__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/fd32/a56d/d484b871abb15e732abb0a69f2ccd525?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgIh5DuKrjZS3VXwlBpr4D334hEiAS86mO7suSKw7rTCMX~2VMvMQxsD1EM3IUx0-KwF6cfrl637BAxFTSHm7crtY7nlMkc~0ia0Vkn9u39pxFTxZbUORvXLPiDbrmLpfydvMXKiTrqYNn~TtmKCwTpBsrcrhbg8o9XsPS38U9sDWTV8B7T~AmO3s5KTfNtbVo1BlZxm1KO5VPH8aMsFzWpMQ2b~k5a3aKTn6GWa3DsHWTcHW-5U7e6SjWh8fiDmq4uuZdKTtKJozEHIX6wcXenokowLAUuOO9fddMmW4U4Q5vR49ZjFosdMjQXTRecZlkZIHur9DfB0eOpoHIsYqw__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZ8X6BdxRDBQzkgHnNeUizTmfZpEOXwQ9zl4bg07Qzyp2xlpe9AHUEvafIlBKOPhExl8MkQZRhgtGkuhI1LGYQJxLLJlCpiaim5bkwiA2DZ-aofLbChYF0sseSlbMyvMdd-LwxESyWVITeP546tsf41SzpObHf-m6po633RvDjikojXBalaQA4WCC39LP5bwOkDG4rPBRgQx6NLDXHVShrJPJHoZg0xOAZSXeBtr2nQGKcYgBieJNODP35Yques1aNSujEfTebkx7fzxzbWhl6Dguiw10xk0Keo62p5kXhMeZA3SkpuTIu0~5Wikas-I4qoiXGYa5oAvue9yafdzzw__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/e4e4/d40b/dc5bf5a2de00232ed3b7e18eadcbe03a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SSycjZ6CQV460UXtpz3gm5~eA-Yd71sdqqbvGOnTB19cv8U0HPZzLVnpJel-~ZmJKyG7PuLncJFtpCaUWZu2QvIYUpwWyxt9xdmxJ5b5GLtheOml6aLoWJaffd8H0XXmiGsS4lqYp6QXI8RAmuWRm5pIv67E4-bIm3Au~s3j9ujEwFAwWZawEWd~WN4U8VHdD7TA7NmMurmZrS8qnBAYnSufSSOuGIlKuktoLWuaM0gYiEB56i-u3nFpgzEHxspLdERDV7Kqau-5LQ7WupDNFpIOXrWzFGqVd2AkZlzJJAN6RJGSjOBAxL7DnS5Vn0aZmcm9l4h6ZtUuuznjvCEtzw__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/3087/05a3/0ba138a3797a763d4510333166532abb?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FbAZzrUxALXF5UVCXFHmF9p1BNTAKiC8mEjasUk-nQ1vK8Icu8wd~CLYmvPmEVG02KsKx5B1tMKjkKJfUzoMNhUX84fs7cDoVu9R7pvPvvgbUCVHocg2r3T3b5qjb-5wnto6hovCRc7IwQDlJVf81At6Pj-zHTxVHjvXmB7Kb3aqqgl47kC2n8aThGx0RWAUFjpHC7o3w4ayygTq4recyMdZyirH6SyYHy4HMHcloZpDFCkuQExqiFoJQlcx9nwhvqd~fi9M7CZf-G~4K~z4Ejzu8VjKYJti~9pubB-V3rqcXvHii~8YlIJJfx3h9fO9f7Af3b78vOtvl~ZAIbRlSQ__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/9cba/0115/47643788a57b79a4aa1d6c6db76208a5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oA77WUscbW1tjfvUkCKFKPcKd-wDLTiEs1NcNOSNy4sZoTkuQ2gd46m5pqRIyPURUzpQjzoX-s9cvJy4Uv~0DhI~l2eqrGP9cKAE8fdZid66~y0gG5z5njXO11roF81rePuJbMiHnGLxyT8-gJVK4vEcCLEwJPvLa4gHd8xwQGRFthUwfmWmMvAaoU~UYci8BBZdrzk7H~gTSAI78sbAJzoCGy5kNUh5Afao3hZxY42H07ckZFLLTR6AeCajn-f1AHH70AKtEJTl7PVLhBSB3ieg3cvhPmXMw1f3b~5Il~lTDw3EW-18bY1jvbukCEW2s3dIugeHLyjCvhHGdDxoGw__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
//   {
//     zurag:
//       "https://s3-alpha-sig.figma.com/img/dbae/ead3/16e4297057a78fcd78323914d00b0bf8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=drS~q33SfPUvUg1BD76yTWUvbCevxnvk4JuGAIg8VDFgxV-pojUGqQc4WpThwW0mBu3T7zEtyG7JkduX9qU2oewXozDH7bqxYWtCKe2AKMRoC8uq2KOOLz4wVH3y-x5yhezOSoQYB4cSr3USs6ZqlaepZqcuTG3OqyKRaYsyjCmdnW~Q-rEdQDzC~E4huxFUpaPJOWPVMnCsmpZiyNJugN4CN5buSIvDcaWpbwn-hVM2X5GTE9wmUnHs5~RnEbtsRdP~aDxrkRHdtHuWCk3wKcSRfBdh7Ka214Zm86-eHhpQdZLqxKOtVE46yW3EpDhrcdAfXsaOfcs2fymL~vrgFg__",
//     category: "Technology",
//     headline:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     udur: "August 20, 2022",
//   },
// ];
const BLOG = () => {
  const [article, setArticles] = useState([]);

  const getArticleData = async () => {
    const response = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  console.log("articles", article);
  return (
    <div className="mt-32 text-center ">
      <p className="text-xl font-bold mb-10">All Blog Post </p>
      <div className="flex justify-between mb-10">
        <ul className="flex gap-5">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <ul>
          <li>View All</li>
        </ul>
      </div>
      <div className="grid grid-cols-3 w-full ">
        {article.map((article) => {
          console.log("article", article);
          return (
            <Link href={`/blog/${article.id}`}>
              <Blog
                zurag={article.cover_image}
                category={article.type_of}
                headline={article.title}
                udur={article.readable_publish_date}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BLOG;
