import { IconName, BsSearch } from "react-icons/bs";
const SearchBar = ({ keyword, onChange }) => {
  const BarStyle = {
    width: "400px",
    height:"30px",
    background: "white",
    border: '1px solid black',
    paddingTop: "5px",
    paddingLeft:"10px",
    borderRadius:'10px'
  };
  return (
    <div style={BarStyle}>
      <BsSearch />

      <input
        style={{ border: "none", paddingLeft:'25px', width:'80%' }}
        key="search-bar"
        value={keyword}
        placeholder={"Try Saree,Kurti or Search by Product Code "}
      />
    </div>
  );
};

export default SearchBar;
