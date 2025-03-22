
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

type HeroSectionProps = {
  featuredPost: BlogPost;
};

const HeroSection = ({ featuredPost }: HeroSectionProps) => {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={featuredPost.featuredImage}
          alt={featuredPost.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white animate-fade-up">
          <div className="mb-4 flex items-center">
            <span className="text-sm font-medium">Newest Blog</span>
            <span className="mx-2">•</span>
            <span className="text-sm text-gray-300">{featuredPost.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {featuredPost.title}
          </h1>
          
          <p className="text-lg text-gray-200 mb-8">
            {featuredPost.excerpt}
          </p>
          
          <div className="flex items-center mb-8">
            <img
              src={featuredPost.author.avatar}
              alt={featuredPost.author.name}
              className="w-10 h-10 rounded-full mr-4 border-2 border-white"
            />
            <div>
              <p className="font-medium">Written by</p>
              <p className="text-gray-300">{featuredPost.author.name}</p>
            </div>
          </div>
          
          <Button asChild size="lg" className="group">
            <Link to={`/blog/${featuredPost.slug}`}>
              Read More
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
