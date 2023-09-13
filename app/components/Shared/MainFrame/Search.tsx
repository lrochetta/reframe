const Search = ({
  filterText,
  onFilter,
}: {
  filterText: string;
  onFilter: any;
}) => (
  <>
    <input
      className="form-control py-2 px-2 w-full text-black"
      id="search"
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={onFilter}
    />
  </>
);

export default Search;
