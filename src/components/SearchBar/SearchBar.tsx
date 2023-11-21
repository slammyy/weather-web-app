import './SearchBar.scss';
import { useState } from 'react';
import capitalize from '../../utils/capitalize';

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setQuery(capitalize(target.value));
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(query);
        setQuery("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={query} placeholder='Search...' autoFocus />
        </form>
    );
};

export default SearchBar;
