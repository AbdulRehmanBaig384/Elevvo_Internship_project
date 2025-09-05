const Filter = ({ setCategory }) => {
  const categories = ["All", "Tech", "Travel", "Food"];
  return (
    <div className="flex gap-3 justify-center mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filter;
