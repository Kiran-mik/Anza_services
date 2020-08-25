import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {commonAPI,count_search} from '../redux/actions'
import {API_KEY} from '../../src/configs/config'
const DashBoard = ({commonAPI,count_search,...props}) => {
  const [formData, setFormData] = useState({
    searchVal: '',
    limit: 9,
    gifList:[],
    errors: {}
  })
  const [count,setCount]=useState(0)


  useEffect(() => {
    let value_of_search=props.val_of_count
    if(value_of_search&&value_of_search.count_&&value_of_search.count_.no_of_attempts){
      setCount(value_of_search.count_.no_of_attempts)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.val_of_count]);

  useEffect(() => {
    getGIFlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  //fetch GIF list during rendering
  const getGIFlist=async(val)=>{
    let response = await commonAPI(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${formData.limit}&offset=0`, '', 'get')
    setFormData({...formData,gifList:response.data,searchVal:val?'':formData.searchVal})
  }


//search for particular GIF from list of records
  const searchGIF=async()=>{
    let response = await commonAPI(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${formData.searchVal}&limit=${formData.limit}&offset=0`, '', 'get')
    count_search(count+1)
    setFormData({...formData,gifList:response.data})
  }



  let { searchVal,gifList } = formData
  return (
    <React.Fragment>

      <section className="profile-frm">
          <div className="container">
            <form autoComplete="off" className="store-search" onSubmit={e => { e.preventDefault(); searchGIF() }}>
                <input type="seach" name="searchVal" value={searchVal} onChange={(e) => setFormData({ ...formData, searchVal: e.target.value })} placeholder="Search here" />
                <span className="close-ic" ></span>
                {searchVal&&<button className="search-close" type='button' onClick={()=>getGIFlist('empty')}>&times;</button>}
              </form>
             <h6>Count:{count}</h6>
            <div className="row">
              <div className="col-md-12">
               <div className="frm">
                {gifList.length!==0&&gifList.map((gif, id) => {
                  return (
                    <iframe  src={gif.embed_url} frameBorder="0" key={id} title={id} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  )
                })}
                </div> 
              </div>
            </div>
          </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  val_of_count: state.commonStore
})



export default connect(mapStateToProps, {  commonAPI,count_search })(DashBoard)



