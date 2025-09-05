import React, { useState } from "react";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const postsData = [
  // ✅ Tech Posts (6)
  {
    id: 1,
    title: "Exploring React",
    category: "Tech",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*T4Ev5nTyJrd1TOMbrrRg6w.jpeg",
    description: "A beginner’s journey into React.js",
    date: "2025-09-01",
  },
  {
    id: 2,
    title: "Mastering JavaScript",
    category: "Tech",
    image: "https://itsagar.com/assets/v3/images/page/javascript.webp",
    description: "Tips to take your JavaScript skills to the next level.",
    date: "2025-08-20",
  },
  {
    id: 3,
    title: "Understanding Node.js",
    category: "Tech",
    image: "https://invedus.com/blog/wp-content/uploads/2022/01/what-is-nodejs.png",
    description: "How Node.js powers modern backend",
    date: "2025-07-10",
  },
  {
    id: 4,
    title: "Getting Started with MongoDB",
    category: "Tech",
    image: "https://tse3.mm.bing.net/th/id/OIP.gBui_q0WbxHT5r28sUktlQHaD0?r=0&cb=thfvnext&w=710&h=366&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Learn NoSQL with MongoDB for scalable databases.",
    date: "2025-06-15",
  },
  {
    id: 5,
    title: "Top 10 VS Code Extensions",
    category: "Tech",
    image: "https://tse4.mm.bing.net/th/id/OIP.5t_YWmb1U7VRvcHBP2eraAHaDt?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Boost your productivity with these  tools.",
    date: "2025-05-05",
  },
  {
    id: 6,
    title: "AI in Everyday Life",
    category: "Tech",
    image: "https://tse4.mm.bing.net/th/id/OIP.QqBEw_N1aASJI-RHT6m1gQAAAA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "How artificial intelligence is shaping our future.",
    date: "2025-04-22",
  },

  // ✅ Food Posts (6)
  {
    id: 7,
    title: "Top 10 Healthy Foods",
    category: "Food",
    image: "https://wallpaperaccess.com/full/1738000.jpg",
    description: "Best foods for energy and a balanced diet.",
    date: "2025-07-15",
  },
  {
    id: 8,
    title: "Karachi Food Tour",
    category: "Food",
    image: "https://th.bing.com/th/id/R.7d0bcaae4e3e43be6cde7ac16fb83ed5?rik=MbNylE6uZXKj%2bQ&riu=http%3a%2f%2fi.brecorder.com%2fwp-content%2fuploads%2f2017%2f04%2fMain-Picture-1024.jpg&ehk=vvXUppjJtFoqjy8xDC86uHORHP%2b7%2bfIMyiDzebRqXPA%3d&risl=&pid=ImgRaw&r=0",
    description: "Exploring street food and restaurants in Karachi.",
    date: "2025-06-10",
  },
  {
    id: 9,
    title: "Delicious Pakistani Biryani",
    category: "Food",
    image: "https://mingleflavors.com/wp-content/uploads/2024/03/aromatic-chicken-biryani-cuisine.webp",
    description: "Why Biryani is the king of Pakistani cuisine.",
    date: "2025-05-12",
  },
  {
    id: 10,
    title: "Best Street Foods in Lahore",
    category: "Food",
    image: "https://i.pinimg.com/originals/fe/16/00/fe16008d4bd160537cb59c9ecdb9d152.jpg",
    description: "From gol gappay to kebabs – a foodie’s dream.",
    date: "2025-04-01",
  },
  {
    id: 11,
    title: "5 Quick & Healthy Snacks",
    category: "Food",
    image: "https://tse4.mm.bing.net/th/id/OIP.EXydIlmuHIAZ1Ool5bBZCwHaEL?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Stay fit with these easy-to-make snacks.",
    date: "2025-03-18",
  },
  {
    id: 12,
    title: "Exploring Turkish Cuisine",
    category: "Food",
    image: "https://tse3.mm.bing.net/th/id/OIP.ksf_wLCw8WFW5Z-9t0-NNQHaFb?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A taste of kebabs, baklava, and Turkish delights.",
    date: "2025-02-28",
  },

  // ✅ Travel Posts (6)
  {
    id: 13,
    title: "Trip to Hunza Valley",
    category: "Travel",
    image: "https://picsum.photos/400/250?random=31",
    description: "Beautiful landscapes and peaceful vibes of Hunza.",
    date: "2025-08-20",
  },
  {
    id: 14,
    title: "Exploring Skardu",
    category: "Travel",
    image: "https://tse4.mm.bing.net/th/id/OIP.uxGCvljooe2eKlMxWFyvswHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A journey to the mountains and lakes of Skardu.",
    date: "2025-07-08",
  },
  {
    id: 15,
    title: "A Weekend in Murree",
    category: "Travel",
    image: "https://i.tribune.com.pk/media/images/545461-murreeinp-1367907090/545461-murreeinp-1367907090.jpg",
    description: "The perfect summer getaway in Pakistan.",
    date: "2025-06-01",
  },
  {
    id: 16,
    title: "Dubai Desert Safari",
    category: "Travel",
    image: "https://tse4.mm.bing.net/th/id/OIP.ydVlEKJPhU5RciKwWpW1zAHaE8?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Camel rides, dune bashing, and Arabian nights.",
    date: "2025-05-19",
  },
  {
    id: 17,
    title: "Exploring Istanbul",
    category: "Travel",
    image: "https://tse2.mm.bing.net/th/id/OIP.sSNpV7blo9xQvLPQAUF9GQHaE7?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "A mix of history, culture, and modern beauty.",
    date: "2025-04-07",
  },
  {
    id: 18,
    title: "Maldives Paradise",
    category: "Travel",
    image: "https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif",
    description: "Crystal clear beaches and luxury resorts.",
    date: "2025-03-25",
  },
];





function App() {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter by category
  const filteredPosts =
    category === "All"
      ? postsData
      : postsData.filter((post) => post.category === category);

  // Search filter
  const searchedPosts = filteredPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
let currentPosts;
if (category === "All") {
  // show all posts when "All" is selected
  currentPosts = searchedPosts;
} else {
  // normal pagination for other categories
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost);
}



  return (
    <div className="max-w-7xl mx-auto p-4">
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <Filter setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No posts found
          </p>
        )}
      </div>
  {category !== "All" && (
  <Pagination
    totalPosts={searchedPosts.length}
    postsPerPage={postsPerPage}
    setCurrentPage={setCurrentPage}
  />
)}

      <Footer/>
    </div>
  );
}

export default App;
