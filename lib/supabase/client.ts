// Supabase 사용 안 함 - 주석 처리
// import { createBrowserClient } from "@supabase/ssr";

// export function createClient() {
//   return createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
//   );
// }

// 임시 더미 함수 (에러 방지용)
export function createClient() {
  throw new Error("Supabase is not configured. Please uncomment the Supabase code if needed.");
}
