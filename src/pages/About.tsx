const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      <p className="text-gray-700 text-lg max-w-xl text-center">
        This is a sample React project demonstrating CRUD operations with products.
        You can add, edit, delete, and filter products, as well as toggle their status.
        Built with React, Tailwind CSS, and localStorage for persistence.
      </p>
    </div>
  );
};

export default About;

