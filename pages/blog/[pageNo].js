import React from 'react'
import {useRouter} from 'next/router'

const pageNo = () => {
    const router = useRouter()
    const data = router.query.pageNo;

  return (
      <>
          <h1> Data entered is {data}</h1>
      </>
  )
}

export default pageNo