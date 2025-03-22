
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

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
        "blog-card group block rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md", 
        isHorizontal ? "grid grid-cols-2 gap-4" : "flex flex-col",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "overflow-hidden rounded-xl aspect-video", 
        isHorizontal && "order-2"
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
        isHorizontal && "order-1 flex justify-center"
      )}>
        {/* Read Time */}
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <Clock className="h-3 w-3 mr-1" />
          {readTime}
        </div>
        
        {/* Title */}
        <h3 className={cn(
          "font-semibold line-clamp-2 group-hover:text-primary transition-colors",
          isLarge ? "text-2xl mb-3" : "text-lg mb-2" 
        )}>
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className={cn(
          "text-gray-600 line-clamp-2",
          isLarge ? "text-base mb-6" : "text-sm mb-4"
        )}>
          {excerpt}
        </p>
        
        {/* Author */}
        <div className="mt-auto flex items-center">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-xs text-gray-500">Written by</p>
            <p className="text-sm font-medium">{author.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
