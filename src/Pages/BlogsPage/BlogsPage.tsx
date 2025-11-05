import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Search, Calendar, User, Clock, Tag, Filter } from "lucide-react";
import { sampleBlogs, getAllTags, BlogPost } from "@/data/blogData";
import { SparklesCore } from "@/Components/ui/sparkles";

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:border-blue-400/30"
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {blog.tags.length > 2 && (
            <span className="text-xs text-gray-400">
              +{blog.tags.length - 2} more
            </span>
          )}
        </div>

        <h3 className="font-bold text-xl text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
          {blog.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  const allTags = getAllTags(sampleBlogs);
  const displayedTags = showAllTags ? allTags : allTags.slice(0, 8);

  const filteredBlogs = useMemo(() => {
    return sampleBlogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => blog.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center my-24">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover insights, tutorials, and industry best practices from our
            team of experts
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search blogs by title, content, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20"
            />
          </div>

          {/* Tags Filter */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <h3 className="font-semibold text-white">Filter by Tags</h3>
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                >
                  Clear All
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {displayedTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className={`transition-all duration-200 ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white hover:bg-blue-600 border-blue-400"
                      : "bg-transparent border-white/20 text-gray-300 hover:bg-white/5 hover:border-blue-400/50 hover:text-blue-400"
                  }`}
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Button>
              ))}
            </div>

            {allTags.length > 8 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllTags(!showAllTags)}
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
              >
                {showAllTags ? "Show Less" : `Show All ${allTags.length} Tags`}
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>
              Showing {filteredBlogs.length} of {sampleBlogs.length} blog
              {sampleBlogs.length !== 1 ? "s" : ""}
            </span>
            {(searchQuery || selectedTags.length > 0) && (
              <span className="text-blue-400">Filters active</span>
            )}
          </div>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-12 shadow-lg">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                No blogs found
              </h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search query or clearing the filters
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="border-white/20 text-gray-300 hover:bg-white/5 hover:border-blue-400/50 hover:text-blue-400"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 mt-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Get the latest blog posts and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-300/50 focus:ring-blue-300/20"
            />
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
