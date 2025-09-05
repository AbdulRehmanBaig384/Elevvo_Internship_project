const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-2 mt-6">
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className="px-4 py-2 border rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
