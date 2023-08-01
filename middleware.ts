export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/add-user",
    "/profile",
    "/notiifcations",
    "/staff",
    "/customers",
    "/fees",
    "/exercise",
    "/diet",
  ],
};
