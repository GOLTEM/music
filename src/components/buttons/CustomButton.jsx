import React from 'react'

function CustomButton({outline, text, onClick}) {
    return (
        <div onClick={onClick} className={`${outline ? 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white ':'bg-teal-500 text-white border border-teal-500 hover:bg-teal-600 '} p-2 rounded  uppercase text-sm font-semibold cursor-pointer `}>
            {text}
        </div>
    )
}

export default CustomButton
