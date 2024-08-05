import React from "react";
import Blog from "./blog";

const medeenuud = [
  {
    zurag:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-SvH~z-mGLp~6yzyAcLXyM0ZLQDdurTguok8IU7e6t-8bVXldStP5ZvHQVizoJI2PbNKnF97u~5r7OaKWPliYNVuPgj6uv-dwzbO35pp8jAKECiDeJ6z9PFZtgvQtjJf~uR3i4GU5SOj2BSmjKS3IqO24xW2MKu6ye2~OVevqRBv7LpPJ7RrW5nydfVTa~aQWt9~54gByB9hFNCQDJAx8IUQg9hFIGdRpFuW13Ssp1rSm~Dc~Nsot387YbNX~0POxjlzS6x3vN-OiEzP~qZm6-nq~CiwVGTq~F0F6B6-uOfXDc1Fz~9df2iEUC6ZBe6~nwdCrZSly1V1Z6ezbm6pA__",
    category: "Technology",
    headline:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    udur: "August 20, 2022",
  },
  {
    zurag:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-SvH~z-mGLp~6yzyAcLXyM0ZLQDdurTguok8IU7e6t-8bVXldStP5ZvHQVizoJI2PbNKnF97u~5r7OaKWPliYNVuPgj6uv-dwzbO35pp8jAKECiDeJ6z9PFZtgvQtjJf~uR3i4GU5SOj2BSmjKS3IqO24xW2MKu6ye2~OVevqRBv7LpPJ7RrW5nydfVTa~aQWt9~54gByB9hFNCQDJAx8IUQg9hFIGdhttps://s3-alpha-sig.figma.com/img/7465/4a8f/67369b797c8fb2e96a533fd515fb2939?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OAGpUoxLs0LOs8E~JOjUBUHNDF9cFu-VggNVbbr9V82WRUI5RG3A6f9mVAqYfGOf4-oCILpHCy4aMxKhwlPyBUfNeE3KpYUCyWxvqmOwCNXWkeGeL3hIRJ5gGlvmLmUqoRI2JXvNYtnFRtyKjN1CntIscIqTb5ZEzjhg2fz1nXYjuVhf1CyuQay7Y-mq7Oz9-yKmBRRo5YdsAhJ4XoI3S-9lzyOpMMtzrKxRmAbbF8q6T0CvwmUVioYdZ0fs~m-5dFRSv6z~-Ukt3CCpFiUKjBU0vx4uZx8ewRCihN6~wYnBeXwmKfdMAePSy3oNTGEVC5NoDH2Ak95KAxcwbUOktg__RpFuW13Ssp1rSm~Dc~Nsot387YbNX~0POxjlzS6x3vN-OiEzP~qZm6-nq~CiwVGTq~F0F6B6-uOfXDc1Fz~9df2iEUC6ZBe6~nwdCrZSly1V1Z6ezbm6pA__",
    category: "Technology",
    headline:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    udur: "August 20, 2022",
  },
];
const BLOG = () => {
  return (
    <div className="mt-32">
      <p className="text-xl font-bold mb-10">All Blog Post </p>
      <div className="flex justify-between">
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
      {medeenuud.map((medee) => {
        return (
          <Blog
            zurag={medee.zurag}
            category={medee.category}
            headline={medee.headline}
            udur={medee.udur}
          />
        );
      })}
    </div>
  );
};

export default BLOG;
