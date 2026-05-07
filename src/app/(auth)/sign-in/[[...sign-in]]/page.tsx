export const runtime = "nodejs";

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
}