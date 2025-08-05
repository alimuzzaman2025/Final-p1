import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`w-[1320px] mx-auto px-2 ${className}`}>{children}</div>
  )
}

export default Container