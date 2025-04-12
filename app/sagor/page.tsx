import Link from "next/link"

const Page = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-slate-700 mb-10">This is the test Page</h1>
      </div>

      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default Page