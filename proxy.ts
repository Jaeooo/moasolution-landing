// Supabase 사용 안 함 - 주석 처리
// import { updateSession } from "@/lib/supabase/proxy";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

// export async function proxy(request: NextRequest) {
//   return await updateSession(request);
// }

// 임시 더미 함수 (에러 방지용)
export async function proxy(request: NextRequest) {
  return NextResponse.next({ request });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
