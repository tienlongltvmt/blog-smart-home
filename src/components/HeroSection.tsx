import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogData";

type HeroSectionProps = {
  featuredPost: BlogPost;
};

const HeroSection = ({ featuredPost }: HeroSectionProps) => {
  return (
    <section className="bg-black text-white pt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-4 flex items-center">
              <span className="text-sm font-medium">Newest Blog</span>
              <span className="mx-2">•</span>
              <span className="text-sm opacity-70">
                {featuredPost.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {featuredPost.title}
            </h1>

            <p className="text-base md:text-lg opacity-80 mb-8">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center mb-6">
              <img
                src={featuredPost.author.avatar}
                alt={featuredPost.author.name}
                className="w-10 h-10 rounded-full mr-3 border border-white/20"
              />
              <div>
                <p className="text-sm opacity-70">Written by</p>
                <p className="font-medium">{featuredPost.author.name}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button
                asChild
                variant="outline"
                className="text-white border-white/30 hover:bg-white/10"
              >
                <Link to={`/blog/${featuredPost.slug}`}>Read More</Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-white rounded-full opacity-70 hover:opacity-100"
              >
                <ArrowRight size={20} />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full min-h-[400px] bg-gray-800">
            <img
              src={featuredPost.featuredImage}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
