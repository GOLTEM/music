import React from "react";
import { XIcon } from '@heroicons/react/outline'
const Tags = (props) => {

    const [tags, setTags] = React.useState([]);
    const addTags = event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="mt-4 mb-2">
            <div className={`${props.className} tags-input border rounded flex flex-row flex-wrap`}>
                <ul className="flex flex-row items-center flex-wrap w-full pl-1 bg-gray-100">
                    {
                        tags.length < 1 ? (<p className="text-gray-500 flex px-1 flex-row items-center rounded my-2 w-full justify-between">Write a song name below and press enter</p>) : (
                            <>
                                {tags.map((tag, index) => (
                                    <li key={index} className="text-gray-700 font-semibold flex px-1 flex-row items-center rounded my-2 w-full justify-between">
                                        <span>{index+1}. {tag}</span>
                                        <i
                                            className="material-icons"
                                            onClick={() => removeTags(index)}
                                        >
                                            <XIcon width={16} height={16} className="cursor-pointer ml-1" />
                                        </i>
                                    </li>
                                ))}
                            </>
                        )
                    }
                </ul>

            </div>
            <input
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add more"
                variant="filled"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
            />
        </div>
    );
};
export default Tags;