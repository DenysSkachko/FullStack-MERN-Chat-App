import { FaUsers } from "react-icons/fa";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    
      <div className="overflow-y-hidden w-full pb-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
          
            <div className="relative mx-auto lg:mx-0 flex items-center gap-4">
              <div className="size-12 object-cover rounded-full bg-accent/10" />
            </div>

            <div className="hidden lg:block text-left min-w-0 flex-1 bg-accent/10 rounded-xl">
              <div className="skeleton h-7 w-32 mb-2" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
  );
};

export default SidebarSkeleton;