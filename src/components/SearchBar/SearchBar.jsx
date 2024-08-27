import { useState } from 'react'
import css from './SearchBar.module.css'
import toast from 'react-hot-toast';


export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = (evt) => {
        setQuery(evt.target.value);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        onSubmit(query);
        setQuery(query);
    }

    return (
        <header className={css.searchBar}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search images and photos"
                    className={css.input}
                />
                <button type="submit" className={css.button}>Search</button>
            </form>
        </header>
    );
}