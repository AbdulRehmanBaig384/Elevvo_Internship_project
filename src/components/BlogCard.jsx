const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4">
      <img
        src={post.image}
        alt={post.title}
        className="rounded-xl w-full h-48 object-cover"
      />
      <div className="mt-3">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600 mt-1">{post.description}</p>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
          <span>{post.date}</span>
          <span className="px-5 py-1 bg-blue-100 text-blue-600 rounded-full text-2xl font-semibold hover:bg-blue-200 ">
            {post.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
