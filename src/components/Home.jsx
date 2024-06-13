const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to Arpita Singh - Freelance Social Media Marketer
      </h1>
      <p className="text-lg text-center mb-8">
        Enhancing your online presence, one campaign at a time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Welcome! I'm Arpita Singh, a passionate freelance social media
            marketer dedicated to helping businesses enhance their online
            presence and achieve their marketing objectives. With over 1 year of
            experience, I specialize in creating and managing paid social media
            campaigns that drive engagement, increase brand awareness, and
            generate leads.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">My Services</h2>
          <ul>
            <li className="mb-2">
              <strong>Strategy Development:</strong> Crafting customized social
              media strategies based on thorough market research and client
              objectives.
            </li>
            <li className="mb-2">
              <strong>Content Creation:</strong> Designing engaging and visually
              appealing content, and managing a consistent content calendar.
            </li>
            <li className="mb-2">
              <strong>Ad Management:</strong> Creating targeted ad campaigns,
              conducting A/B testing, and optimizing for better performance.
            </li>
            <li className="mb-2">
              <strong>Community Engagement:</strong> Interacting with followers,
              building relationships with influencers, and fostering brand
              advocacy.
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
  );
};

export default Home;
