export default function Footer({data={}}) {
  return (
    <div className="bg-gray-900 flex flex-col justify-center min-h-16 p-5">
      <div className="flex gap-5 justify-between flex-wrap">
        <div>Copyright 2024 | {data.company || 'Company Name'}</div>

        <div>Mr. {data.owner || 'Owner'}</div>
      </div>
    </div>
  )
}