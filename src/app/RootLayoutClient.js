"use client";
import PrivateRoute from "@/components/privet-route/PrivetRoute";
import Navbar from "@/components/shared/navbar/Navbar";
import store from "@/redux/store";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";

export default function RootLayoutClient({ children }) {
  const pathName = usePathname();

  const noNavbarRoutes = ["/auth", "/admin", "/404"];
  const hideNavbar = noNavbarRoutes.some((route) =>
    pathName.startsWith(route)
  );

  // const isHiddenRoute = ["/home", '/auth/login', '/auth/signup', '/auth/forgot-password', '/auth/verify-email', '/auth/reset-password'];
  // const hidePadding = isHiddenRoute.includes(pathName);

  return (

    <>
      <Provider store={store}>
        <PrivateRoute>
            {
              !hideNavbar && <Navbar />
            }
          <div className={`relative min-h-[calc(100vh-88px)] bg-white`}>
            {/* Content */}
            <div className={`relative container mx-auto max-w-full`}>
              {children}
            </div>
          </div>

          {/* <Footer /> */}
        </PrivateRoute>
      </Provider>
    </>
  );
}
