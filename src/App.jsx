import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts/Posts';
import Pagination from './components/Pagination/Pagination';

function App() {

  const [posts,setPosts] = useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();

  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = num => setCurrentPage(num);
  

  return (
    <div className="App">
      <h1 className="text-primary mb-4">Blog Posts</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
