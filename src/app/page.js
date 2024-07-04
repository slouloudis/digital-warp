import Test from "@/components/Test"
import CausesError from "@/components/CausesError"
export default function Page() {
  return (
    <main className="pb-10 lg:pb-12">
       <Test theText={'This was passed via props'}/>
       <CausesError />
    </main>
  )
}