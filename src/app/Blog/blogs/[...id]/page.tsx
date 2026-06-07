import React from 'react'

const TestPage =async({params}:  {params:Promise<{ id: string }>}) => {

    const id = await params;
    console.log(id)
  return (
    <div>catch alll...</div>
  )
}

export default TestPage
