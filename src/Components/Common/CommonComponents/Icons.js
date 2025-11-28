export const Edit = ({ className = 'inline-block mr-2 cursor-pointer w-7 h-7',  alt = 'Edit', onClick }) => {
    return (
        <img src={'/assets/Images/edit.png'} alt={alt} className={className} onClick={onClick} />
    )
}

export const Delete = ({ className = 'inline-block mr-2 cursor-pointer w-7 h-7', alt = 'Delete', onClick }) => {
    return (
        <img src={'/assets/Images/bin.png'} alt={alt} className={className} onClick={onClick} />
    )
}

export const Search = ({ onClick, className = 'inline-block mr-2 cursor-pointer w-7 h-7', alt = 'Search', }) => {
    return (
        <img src={'/assets/Images/search.png'} alt={alt} className={className} onClick={onClick} />
    )
}