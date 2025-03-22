
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { getBlogPostBySlug, getRecentPosts } from '@/data/blogData';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '');
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== post?.id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate, slug]);
  
  if (!post) {
    return null; // We'll redirect in the useEffect
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} - Stuffeus Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featuredImage} />
      </Helmet>
    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex-grow"></div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                
                <div className="flex items-center mb-8">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">Written by</p>
                    <p className="text-gray-600">{post.author.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Featured Image */}
          <section className="pb-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl animate-scale-in">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Content Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-lg">
                <p className="lead text-xl mb-6">
                  {post.excerpt}
                </p>
                
                {/* For demo purposes, we'll create some placeholder content */}
                <h2>The Evolution of Home Design</h2>
                <p>
                  The concept of home has evolved significantly over the centuries. From basic shelters 
                  focused purely on protection from the elements, to modern smart homes that blend 
                  functionality with aesthetic appeal, the journey has been remarkable.
                </p>
                
                <p>
                  Today's home design philosophy centers around creating spaces that not only look good 
                  but also enhance our wellbeing and complement our lifestyle. This intersection of form 
                  and function is what makes modern home transformation so exciting.
                </p>
                
                <h2>Key Elements of a Transformed Space</h2>
                <p>
                  When approaching a home transformation project, consider these essential elements:
                </p>
                
                <ul>
                  <li>
                    <strong>Lighting:</strong> Both natural and artificial lighting play crucial roles in 
                    setting the mood and functionality of a space.
                  </li>
                  <li>
                    <strong>Color palette:</strong> Colors can dramatically alter the perception of space 
                    and influence emotions.
                  </li>
                  <li>
                    <strong>Texture and materials:</strong> The tactile elements of your space add depth 
                    and character.
                  </li>
                  <li>
                    <strong>Space planning:</strong> How you arrange furniture and define areas impacts 
                    the flow and functionality.
                  </li>
                </ul>
                
                <h2>Bringing It All Together</h2>
                <p>
                  The true art of home transformation lies in the harmonious integration of all these 
                  elements. It's about creating a space that reflects your personality while meeting 
                  your practical needs. With thoughtful planning and creative vision, any home can be 
                  transformed into a personalized sanctuary.
                </p>
                
                <blockquote>
                  "The home should be the treasure chest of living." — Le Corbusier
                </blockquote>
                
                <p>
                  As you embark on your own home transformation journey, remember that the most successful 
                  spaces are those that evolve naturally over time, collecting memories and adapting to 
                  your changing lifestyle.
                </p>
              </div>
            </div>
          </section>
          
          {/* Related Posts */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">You Might Also Like</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    {...relatedPost}
                    className="h-full"
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
