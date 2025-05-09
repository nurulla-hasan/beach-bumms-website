"use client";
import PrivateRoute from "@/components/privet-route/PrivetRoute";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import store from "@/redux/store";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";

export default function RootLayoutClient({ children }) {
  const pathName = usePathname();

  const noNavbarRoutes = ["/auth", "/admin", "/404"];
  const hideNavFooter = noNavbarRoutes.some((route) =>
    pathName.startsWith(route)
  );

  return (

    <>
      <Provider store={store}>
        <PrivateRoute>
          {
            !hideNavFooter && <Navbar />
          }
          {/* Content */}
          <div className={`container min-h-[calc(100vh-72px)] mx-auto max-w-full`}>
            {children}
          </div>
          {
            !hideNavFooter && <Footer />
          }
        </PrivateRoute>
      </Provider>
    </>
  );
}
