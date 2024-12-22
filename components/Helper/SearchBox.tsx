import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="searchBox">
      {/* 1st search input */}
      <div className="searchSubBox">
        <FaMapLocationDot className="w-10 h-10 text-blue-600" />
        <div>
          <p className="searchInputText">Location</p>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Where are you going?"
            className="searchInput"
          />
        </div>
      </div>

      {/* 2nd search input */}
      <div className="searchSubBox">
        <FaRegCalendarAlt className="searchIcon" />
        <div>
          <p className="searchInputText">Start Date</p>
          <input
            type="date"
            name="location"
            id="location"
            className="searchInput"
          />
        </div>
      </div>

      {/* 3rd search input */}
      <div className="searchSubBox">
        <FaRegCalendarAlt className="searchIcon" />
        <div>
          <p className="searchInputText">End Date</p>
          <input
            type="date"
            name="location"
            id="location"
            className="searchInput"
          />
        </div>
      </div>

      {/* 4th search input */}
      <div className="searchSubBox">
        <FaUser className="searchIcon" />
        <div>
          <p className="searchInputText">Guest</p>
          <p className="searchInputText">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
