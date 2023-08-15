export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/add-user",
    "/profile",
    "/notiifcations",
    "/students/:path",
    "/trainers/:path",
    "/fees",
    "/exercise/:path",
    "/diet/:path",
    "/user/:path*",
  ],
};
