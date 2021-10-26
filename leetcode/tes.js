import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import lodash from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete(props) {
  const { onSelectItem } = props;
  const [selectedValue, setSelectedValue] = useState('');
  const [searchParam, setParam] = useState('');
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState({});
  const sendQuery = (param) => {
    setIsLoading(true);
    setList([]);
    axios.get(ITEMS_API_URL, {
      params: {
        q: param
      }
    }).then((res) => {
      setIsLoading(false);
      setList(res.data);
    }).catch(error => {
      console.log(error)
    })
  }
  /* useEffect(() => {
    if (selectedValue && selectedValue !== '')
      onSelectItem(selectedValue)
  }, [selectedValue]) */
  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const onChange = ({ target: { value } }) => {
    setParam(value);
    const search = lodash.debounce(sendQuery, DEBOUNCE_DELAY);
    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
        prevSearch.cancel();
      }
      return search;
    });
    search(value);
  };
  const controlClassNames = classnames({
    control: true,
    'is-loading': isLoading
  })
  return (
    <div className="wrapper">
      <div className={controlClassNames}>
        <input onChange={onChange} type="text" className="input" />
      </div>
      {list.length > 0 && <div className="list is-hoverable">
        {list.length > 0 && list.map((el, index) => <a onClick={(e) => { e.stopPropagation(); e.preventDefault();onSelectItem(e.currentTarget.textContent) }} key={`${index}-${el}`} className="list-item">{el}</a>)}
      </div>}
    </div>
  );
}
