import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react"

type PostBodyProps = {  
  Categories: string,
  Index: 0
}
export default function Categories({ categories }:any) {
  return (
    <span className="ml-1">
      {categories.edges.length > 0 ? (
        categories.edges.map((category: { node: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined } }, index: Key | null | undefined) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories.edges.node.name}</span>
      )}
    </span>
  )
}
