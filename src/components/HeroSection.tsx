
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/data/blogData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  featuredPosts: BlogPost[];
};

const HeroSection = ({ featuredPosts }: HeroSectionProps) => {
  return (
    <section className="bg-black text-white pt-8">
      <div className="container mx-auto">
        <Carousel className="relative">
          <CarouselContent>
            {featuredPosts.map((post) => (
              <CarouselItem key={post.id}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Content */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="mb-4 flex items-center">
                      <span className="text-sm font-medium">Newest Blog</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm opacity-70">
                        {post.readTime}
                      </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      {post.title}
                    </h1>

                    <p className="text-base md:text-lg opacity-80 mb-8">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center mb-6">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full mr-3 border border-white/20"
                      />
                      <div>
                        <p className="text-sm opacity-70">Written by</p>
                        <p className="font-medium">{post.author.name}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Button
                        asChild
                        variant="outline"
                        className="text-white border-white/30 hover:bg-white/10"
                      >
                        <Link to={`/blog/${post.slug}`}>Read More</Link>
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
                      src={post.featuredImage}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute bottom-4 right-4 z-10 flex gap-2 md:bottom-8 md:right-8">
            <CarouselPrevious 
              className={cn(
                "relative h-8 w-8 rounded-full border border-white/30 bg-black/50 text-white hover:bg-black/80",
                "left-0 -translate-y-0"
              )}
            />
            <CarouselNext 
              className={cn(
                "relative h-8 w-8 rounded-full border border-white/30 bg-black/50 text-white hover:bg-black/80",
                "right-0 -translate-y-0"
              )}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
