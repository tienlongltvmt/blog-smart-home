
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type BlogCardProps = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  variant?: 'default' | 'large' | 'horizontal';
  className?: string;
};

const BlogCard = ({
  slug,
  title,
  excerpt,
  featuredImage,
  readTime,
  author,
  variant = 'default',
  className,
}: BlogCardProps) => {
  const isLarge = variant === 'large';
  const isHorizontal = variant === 'horizontal';
  
  return (
    <Link 
      to={`/blog/${slug}`}
      className={cn(
        "blog-card group block rounded-2xl overflow-hidden", 
        isHorizontal ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "flex flex-col",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "image-container overflow-hidden rounded-xl aspect-video", 
        isHorizontal && "md:order-2"
      )}>
        <img
          src={featuredImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className={cn(
        "flex flex-col", 
        isLarge ? "p-6" : "p-4", 
        isHorizontal && "md:order-1 flex justify-center"
      )}>
        {/* Read Time */}
        <span className="text-xs text-gray-500 mb-2">{readTime}</span>
        
        {/* Title */}
        <h3 className={cn(
          "font-semibold line-clamp-2 group-hover:text-primary transition-colors",
          isLarge ? "text-2xl mb-3" : "text-lg mb-2" 
        )}>
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        
        {/* Author */}
        <div className="mt-auto flex items-center">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm text-gray-700">
            Written by <span className="font-medium">{author.name}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
