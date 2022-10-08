import React from 'react';

const Id = ({aaa,arr}) => {
    console.log(arr)
    return (
        <div className="arr">
            {aaa}
            <button >delete</button>
        </div>
    );
};

export default Id;