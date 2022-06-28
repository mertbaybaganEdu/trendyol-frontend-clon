import Text from "../Text/Text";
import MdKeyboardArrowDown from "react-icons/lib/md/MdKeyboardArrowDown";

const SearchFilters = () => {
  return (
    <div id="sticky" className="stuck">
      <div className="aggrgtn-cntnr-wrppr">
        <div className="fltrs-wrppr">
          <div className="fltr-cntnr-ttl-area">
            <div className="fltr-cntnr-ttl">
              <Text color="blackLite" align="" size="sm">
                Marka
              </Text>
            </div>
            <div className="i-dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="fltrs">
            <div className="checkbox">
              <input type="checkbox" id="checkbox1" />
            </div>
            <div className="fltr-item-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
