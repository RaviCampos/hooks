import axios from "axios";
import { useState, useEffect } from "react";
import ArcticleTitle from "./ArcticleTitle";

function Dropdown() {
    const [index, setIndex] = useState(null);
    const [title, setTitle] = useState(null);
    useEffect(() => {
        const getPostTitle = async () => {
            if(index) {
                console.log(index)
                try {
                    const response = await axios.get("https://www.comoebommorarnoprimeiroandar.com/wp-json/wp/v2/posts?_fields=title&per_page=3");
                    
                    setTitle(response.data[index].title.rendered);
                } catch(e) {
                    console.log(e)
                }
            }
        }

        getPostTitle();
    }, [index])
    return (
        <div>
            <select name="index" id="indexDrop" onChange={e => setIndex(e.target.value)}>
                <option value="" selected disabled hidden>-choose-</option>
                <option value="0">First</option>
                <option value="1">Second</option>
                <option value="2">Third</option>
            </select>
            <ArcticleTitle title={title}/>
        </div>
    )
}




export default Dropdown;