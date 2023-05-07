import "./SelectMenu.modules.scss";
import {Flags} from "../../../../../../assets/images/flags/index.js";
import { useState} from "react";
import {AiOutlineCaretDown} from "react-icons/ai";

export const SelectMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const initialInfos = {src: Flags, text: 'Pays'}
    const [BtnInfos, setBtnInfos] = useState(initialInfos);

    const onOptionClick = (item) => {
        setIsSelected(true);
        setIsOpen((state) => !state);
        setBtnInfos(
            {
                src: item.src,
                text: item.text
            }
        )
    }
    return (
        <div className={`select-menu ${isOpen ? 'active' : ''} ${isSelected ? 'selected' : ''}`}>
            <div className="select-btn" onClick={() => setIsOpen((state) => !state)}>
                <div className="sBtn-content">
                    <img className="sBtn-img" src={BtnInfos.src} alt={BtnInfos.text}/>
                    <span className="sBtn-text">{BtnInfos.text}</span>
                </div>
                <AiOutlineCaretDown className="text-orange-500 text-xl"/>

            </div>
            {
                isOpen &&
                <ul className="options">
                    {props.countries.map((item) =>
                        <li className="option" key={item.text} onClick={()=> onOptionClick(item)}>
                            <img className="option-img" src={item.src} alt={item.text}/>
                            <span className="option-text">{item.text}</span>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
};
