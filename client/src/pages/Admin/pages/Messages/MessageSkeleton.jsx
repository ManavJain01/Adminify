export default function MessageSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 items-center mr-auto">
        <span className="bg-black w-11 h-11 rounded-full animate-pulse" />

        <section className="flex flex-col gap-2">
          <span className="bg-black w-48 h-4 rounded-full animate-pulse" />
          <span className="bg-black w-48 h-4 rounded-full animate-pulse"/>
        </section>
      </div>

      <div className="flex gap-5 items-center ml-auto">
        <section className="flex flex-col gap-2">
          <span className="bg-black w-48 h-4 rounded-full animate-pulse" />
        </section>
        
        <span className="bg-black w-11 h-11 rounded-full animate-pulse" />
      </div>
    </div>
  )
}