
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostForm from "@/components/BlogPostForm";
import { Helmet } from "react-helmet";

const CreateBlogPostPage = () => {
  return (
    <>
      <Helmet>
        <title>Create New Blog Post - Stuffeus</title>
        <meta
          name="description"
          content="Create and publish a new blog post on Stuffeus"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow py-12 bg-gray-50">
          <BlogPostForm />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CreateBlogPostPage;
