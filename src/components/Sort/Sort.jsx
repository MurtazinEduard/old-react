import React from 'react';
import style from './Sort.module.css'
import { useState, useRef } from 'react';
const Sort = ({ items }) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false)

    const sortRef = React.useRef()

    const [activeItem, setActivItem] = React.useState(0)

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const activeLabel = items[activeItem];
    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)){
          setVisiblePopup(false)
        }
    }

    const onSelectItem = (index) => {
        setActivItem(index);
        setVisiblePopup(false)
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);  

    return (
        <div className={style.sort} ref={sortRef} >
            <div>
                <span>Сортировка по:</span>
                <span className={style.toggle} onClick={toggleVisiblePopup}> {activeLabel}</span>
                <div className={style.choose}>
                {visiblePopup &&  
                <div className={style.sort__popup}>
                    <ul>
                    {items && items.map((name, index) => (
                        <li 
                            onClick={() => onSelectItem(index)}
                            className={activeItem=== index ? style.active : ''}
                            key = {`${name}_${index}`}
                        >
                            {name}
                        </li>
                        ))}
                    </ul>
                </div>}
            </div>
            </div>
        </div>
    );
};

export default Sort;