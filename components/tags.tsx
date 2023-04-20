import { Key } from "react"
import { Props } from "react-burger-menu"

type PostBodyProps = {
  tags: string,
  index: 0
}
export default function Tags({ tags }:any) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className='mt-8 text-lg font-bold'>
        Tagged
        {tags.edges.map((_tags: any, index: Key | null | undefined) => (
          <span key={index} className="ml-4 font-normal">
            {tags.node.name}
          </span>
        ))}
      </p>
    </div>
  )
}
