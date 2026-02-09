// Supabase 사용 안 함 - 주석 처리
import { redirect } from "next/navigation";
// import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function UserInfo() {
  // const supabase = await createClient();
  // const { data, error } = await supabase.auth.getClaims();

  // if (error || !data?.claims) {
  //   redirect("/auth/login");
  // }

  // return (
  //   <p className="text-muted-foreground">
  //     Welcome! You are signed in as{" "}
  //     <span className="font-medium text-foreground">{data.claims.email}</span>
  //   </p>
  // );

  // 임시 더미 UI (에러 방지용)
  redirect("/auth/login");
}

export default function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Suspense fallback={<p className="text-muted-foreground">Loading...</p>}>
        <UserInfo />
      </Suspense>
    </div>
  );
}
