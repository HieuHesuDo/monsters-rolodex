import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => ( //truyền placeholder và handleChange như một props
    <input
    className='search'
          type="search"
          placeholder={placeholder}
          onChange={handleChange} //Khi nào nhập vào ô input thì onChange sẽ được kích hoạt và chạy handleChange
        />
)