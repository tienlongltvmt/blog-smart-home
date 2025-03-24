
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import HeroSection from '@/components/HeroSection';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { blogPosts, getRecentPosts } from '@/data/blogData';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  // Use the first 3 blog posts as featured posts
  const featuredPosts = blogPosts.slice(0, 3);
  const topBlogs = blogPosts.slice(3, 6);
  const latestBlogs = blogPosts.slice(6, 9);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stuffeus - Home Transformation and Lifestyle</title>
        <meta name="description" content="Discover innovative ideas for home transformation, tech solutions, and lifestyle tips on Stuffeus." />
        <meta property="og:title" content="Stuffeus - Home Transformation and Lifestyle" />
        <meta property="og:description" content="Discover innovative ideas for home transformation, tech solutions, and lifestyle tips on Stuffeus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stuffeus.com" />
        <meta property="og:image" content={featuredPosts[0].featuredImage} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <HeroSection featuredPosts={featuredPosts} />
          
          {/* Blog Search */}
          <section className="py-8 bg-white shadow-sm relative z-20 -mt-12 rounded-t-3xl">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center bg-white rounded-full border shadow-sm search-animation overflow-hidden">
                  <div className="pl-4">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="search"
                    placeholder="Search on Stuffeus..."
                    className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                  />
                  <Button size="sm" className="m-1 rounded-full">Search</Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Top Blogs Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Top Blogs</h2>
                <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-primary flex items-center gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topBlogs.map((blog) => (
                  <BlogCard key={blog.id} {...blog} />
                ))}
              </div>
            </div>
          </section>
          
          {/* Latest Blog Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Latest Blog</h2>
                <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-primary flex items-center gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latestBlogs.map((blog) => (
                  <BlogCard key={blog.id} {...blog} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <span className="px-2">...</span>
                  <Button variant="outline" size="sm">8</Button>
                  <Button variant="outline" size="sm">9</Button>
                  <Button variant="outline" size="sm">10</Button>
                  
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

