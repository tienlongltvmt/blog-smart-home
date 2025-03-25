import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get featured posts (first 3 posts)
  const featuredPosts = blogPosts.slice(0, 3);

  // Get top blog posts (excluding the featured ones)
  const topBlogPosts = blogPosts.slice(3, 7);

  // Filter posts based on search term (for pagination section)
  const filteredPosts = blogPosts.filter(
    (post) =>
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

        <main className="flex-grow">
          {/* Hero Section with Carousel */}
          <HeroSection featuredPosts={featuredPosts} />

          {/* Blog Header and Search */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Blog Stuffeus</h2>

                <div className="flex items-center gap-4">
                  <form
                    onSubmit={handleSearch}
                    className="max-w-xs flex items-center rounded-full border bg-white overflow-hidden"
                  >
                    <Input
                      type="search"
                      placeholder="Search on Stuffeus..."
                      className="border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  </form>

                  <Button asChild variant="default">
                    <Link to="/blog/create">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Post
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Top Blogs Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">Top Blogs</h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* First column - 1 large blog post */}
                  <div>
                    <BlogCard
                      key={topBlogPosts[0].id}
                      {...topBlogPosts[0]}
                      variant="large"
                      className="h-full"
                    />
                  </div>

                  {/* Second column - 2 smaller blog posts in vertical layout */}
                  <div className="grid grid-cols-1 gap-8">
                    {topBlogPosts.slice(1, 3).map((post) => (
                      <BlogCard
                        key={post.id}
                        {...post}
                        variant="horizontal"
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* All Blog Posts with Pagination */}
              <div>
                <h3 className="text-2xl font-bold mb-6">All Articles</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <BlogCard key={post.id} {...post} className="h-full" />
                  ))}
                </div>

                {/* Show message if no posts match search */}
                {currentPosts.length === 0 && (
                  <div className="text-center py-10">
                    <h3 className="text-xl font-medium mb-2">
                      No results found
                    </h3>
                    <p className="text-gray-600">
                      We couldn't find any posts matching "{searchTerm}". Please
                      try a different search term.
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
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>

                      {Array.from(
                        { length: Math.min(5, totalPages) },
                        (_, i) => {
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
                                pageNum === currentPage
                                  ? "bg-primary text-white hover:bg-primary/90"
                                  : ""
                              }
                              onClick={() => setCurrentPage(pageNum)}
                              disabled={pageNum === currentPage}
                            >
                              {pageNum}
                            </Button>
                          );
                        }
                      )}

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
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
