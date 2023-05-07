import {SelectMenu} from "./selectmenu/SelectMenu.jsx";
import {
    Egypt,
    India,
    Italy,
    Japan, Mexico,
    Morocco,
    Spain,
    Syria,
    Tunisia,
    Turkey, Usa
} from "../../../../../assets/images/flags/index.js";

export const ExploreArticle = () => {
    const countries = [
        {
            src:Tunisia,
            text:'Tunisia'
        },
        {
            src:Italy,
            text:'Italy'
        },
        {
            src:Syria,
            text:'Syria'
        },
        {
            src:Japan,
            text:'Japan'
        },
        {
            src:Morocco,
            text:'Morocco'
        },
        {
            src:Turkey,
            text:'Turkey'
        },
        {
            src:India,
            text:'India'
        },
        {
            src:Spain,
            text:'Spain'
        },
        {
            src:Egypt,
            text:'Egypt'
        },
        {
            src:Mexico,
            text:'Mexico'
        },
        {
            src:Usa,
            text:'Usa'
        }
    ]
    return (
        <article>
            <SelectMenu countries={countries}/>
        </article>
    )
}