import React from 'react'
import { TbLoader3 } from "react-icons/tb";

const LoadingButton = ({ isLoading, text, onClick, type }) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      disabled={isLoading}
      className="bg-accent hover:bg-middle text-dark w-full flex-center py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 disabled:pointer-events-none"
    >
      {isLoading ? (
        <>
          <TbLoader3 className="size-6 animate-spin" />
          <span className="ml-2 text-sm">Loading...</span>
        </>
      ) : (
        text
      )}
    </button>
  )
}

export default LoadingButton
