import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import authService from "../appwrite/auth";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

const AllPost = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getFilteredPosts = async () => {
      if (userData) {
        const response = await service.getPosts();
        if (response) {
          const filtered = response.documents.filter(
            (post) => post.userId === userData.$id
          );
          setPost(filtered);
          console.log(filtered);
        }
      }
    };
    getFilteredPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Arpita Singh
      </h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-4">
          I'm Arpita Singh, a passionate freelance social media marketer
          dedicated to helping businesses enhance their online presence and
          achieve their marketing objectives. With over a year of experience in
          the industry, I specialize in creating and managing paid social media
          campaigns that drive engagement, increase brand awareness, and
          generate leads.
        </p>
        <p className="text-lg mb-4">
          As a social media marketer, I am committed to staying updated with the
          latest trends and continuously enhancing my skills. My approach is
          client-focused, and I strive to deliver customized solutions that meet
          the unique needs of each business I work with.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-4">My Expertise</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <strong>Strategy Development:</strong> Crafting customized
                social media strategies based on thorough market research and
                client objectives.
              </li>
              <li className="mb-2">
                <strong>Content Creation:</strong> Designing engaging and
                visually appealing content, and managing a consistent content
                calendar.
              </li>
              <li className="mb-2">
                <strong>Ad Management:</strong> Creating targeted ad campaigns,
                conducting A/B testing, and optimizing for better performance.
              </li>
              <li className="mb-2">
                <strong>Community Engagement:</strong> Interacting with
                followers, building relationships with influencers, and
                fostering brand advocacy.
              </li>
              <li className="mb-2">
                <strong>Analytics and Reporting:</strong> Tracking performance
                metrics, providing detailed reports, and offering actionable
                insights.
              </li>
              <li className="mb-2">
                <strong>Continuous Learning:</strong> Staying updated with the
                latest social media trends and continuously enhancing my skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Me?</h2>
        <p className="text-lg mb-4">
          Choosing the right social media marketer can make a significant
          difference in achieving your business goals. Here’s why you should
          consider working with me:
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Personalized Approach:</strong> I take the time to
            understand your business and create strategies that align with your
            objectives.
          </li>
          <li className="mb-2">
            <strong>Proven Results:</strong> My campaigns have successfully
            increased engagement, brand awareness, and leads for my clients.
          </li>
          <li className="mb-2">
            <strong>Transparent Reporting:</strong> I provide detailed reports
            and actionable insights to help you understand the impact of our
            efforts.
          </li>
          <li className="mb-2">
            <strong>Dedicated Support:</strong> I am committed to providing
            exceptional service and support throughout our collaboration.
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
