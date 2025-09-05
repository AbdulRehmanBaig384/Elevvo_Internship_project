const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search blog posts..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
