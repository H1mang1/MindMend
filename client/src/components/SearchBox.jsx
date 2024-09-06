const SearchBox = () => {
    return (
        <div className="flex items-center bg-purple-50 justify-center  h-screen">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden w-2/4">
                <label htmlFor="search" className="sr-only">Search input:</label>
                <input 
                    type="search" 
                    id="search" 
                    placeholder="Search by zip code or city" 
                    className="px-4 py-2 w-full focus:outline-none"
                />
                <button type="submit" className="bg-purple-500 text-white px-4 py-2">
                    <img src="/images/search.jpg" alt="Search" className="h-6 w-6 rounded-full"/>
                </button>
            </div>
        </div>
    );
};
export default SearchBox;
