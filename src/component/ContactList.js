import React, {useState,useEffect} from 'react'
import { SearchBox } from './SearchBox'
import { ContactItem } from './ContactItem'
import { useSelector } from 'react-redux'

export const ContactList = () => {
    const contactList = useSelector((state=>state.contactList));
    const keyword = useSelector((state=>state.keyword));
    let [filteredList, setFilteredList] = useState([]);

    useEffect( () => {
        if( keyword !== "" || keyword === undefined ) {
            let list = contactList.filter((item) => item.name.includes(keyword));
            setFilteredList(list);
        }else {
            setFilteredList(contactList);
        }
    },[contactList,keyword])

    return (
        <div>
            <SearchBox/>
            {filteredList.map( (item,idx) => (
                <ContactItem key={idx} item={item} />
            ))}
        </div>
    )
}
