// components/PageContainer.tsx
const PageContainer = ({ children }) => {
    return (
      <div className="max-w-7xl 3xl:max-w-[1560px] mx-auto px-4 md:py-16 py-10 text-black">
        {children}
      </div>
    );
  };
  
  export default PageContainer;
  