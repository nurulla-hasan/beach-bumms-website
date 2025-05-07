// components/PageContainer.tsx
const PageContainer = ({ children }) => {
    return (
      <div className="max-w-7xl mx-auto px-2 md:py-16 py-10 text-black">
        {children}
      </div>
    );
  };
  
  export default PageContainer;
  