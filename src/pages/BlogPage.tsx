
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  return (
    <>
      <Helmet>
        <title>Blog - Stuffeus</title>
        <meta 
          name="description" 
          content="Explore our collection of articles on home transformation, tech solutions, and lifestyle tips."
        />
      </Helmet>
    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Blog Stuffeus</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Discover innovative ideas and solutions for your home and lifestyle
                </p>
                
                <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                  <div className="flex items-center bg-white rounded-full border shadow-sm search-animation overflow-hidden">
                    <div className="pl-4">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="search"
                      placeholder="Search on Stuffeus..."
                      className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button type="submit" size="sm" className="m-1 rounded-full">Search</Button>
                  </div>
                </form>
              </div>
              
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    {...post}
                    className="h-full"
                  />
                ))}
              </div>
              
              {/* Show message if no posts match search */}
              {currentPosts.length === 0 && (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium mb-2">No results found</h3>
                  <p className="text-gray-600">
                    We couldn't find any posts matching "{searchTerm}". Please try a different search term.
                  </p>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > postsPerPage && (
                <div className="flex justify-center mt-16">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Logic to show pages centered around current page
                      let pageNum = i + 1;
                      if (totalPages > 5) {
                        if (currentPage > 3) {
                          pageNum = currentPage + i - 2;
                          if (pageNum > totalPages) {
                            pageNum = totalPages - (4 - i);
                          }
                        }
                      }
                      
                      return (
                        <Button 
                          key={i} 
                          variant="outline" 
                          size="sm"
                          className={
                            pageNum === currentPage ? "bg-primary text-white hover:bg-primary/90" : ""
                          }
                          onClick={() => setCurrentPage(pageNum)}
                          disabled={pageNum === currentPage}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <span className="px-2">...</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setCurrentPage(totalPages)}
                        >
                          {totalPages}
                        </Button>
                      </>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
