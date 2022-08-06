import React from 'react'

const Head = ({title,description}) => {
  React.useEffect(()=>{
    const titulo = title + ' | Dogs'
    document.title = titulo
    document.querySelector('meta[name=description]').setAttribute('content',description || '')
  },[title,description])
  return null
}

export default Head