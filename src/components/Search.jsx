import { useState } from "react";

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handlekey = (e) => {
        if (e.key === 'Enter') {
            handeSubmit();
        }
    }

    const handeSubmit = () => {
        cb(value);
    }

    return (<div className="row">
        <div className="input-field col s12">
            <input type="search"
                id="search-field"
                placeholder="search"
                onKeyDown={handlekey}
                onChange={(e) => setValue(e.target.value)}
                value={value} />
        </div>
        <button className="btn btn1"
            onClick={handeSubmit}>
            Search</button>
    </div>

    )
}

export default Search;