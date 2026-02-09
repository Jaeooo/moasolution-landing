// Supabase 사용 안 함 - 주석 처리
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
// export async function createClient() {
//   const cookieStore = await cookies();

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll();
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) =>
//               cookieStore.set(name, value, options),
//             );
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if you have proxy refreshing
//             // user sessions.
//           }
//         },
//       },
//     },
//   );
// }

// 임시 더미 함수 (에러 방지용)
export async function createClient() {
  throw new Error("Supabase is not configured. Please uncomment the Supabase code if needed.");
}
