import type {NextRequest} from "next/server";

export const getTokenFromCookies = (request: NextRequest) => {
  return request.cookies.get('accessToken')?.value;
};