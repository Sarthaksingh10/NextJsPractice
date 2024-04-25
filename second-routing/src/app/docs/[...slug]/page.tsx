//this is the example of catch all segment in this the file is writte as [...name] and works like spread operator

export default function SelectAllcomponent({params}:{
    params:{
        slug:string[]
    }
}) {
  if (params.slug.length===2) {
    return <h1>viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
  }
  else if(params.slug.length===1){
    return <h1>Viewing docs for feature {params.slug[0]}</h1>
  }
  return <h1>viewing the docs</h1>
}
