import "./ListItem.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import FlipMove from "react-flip-move"
function ListItems(props){
    const items=props.items
    const listItem=items.map(item=>{
        return <div className="list" key={items.key}>
            <p>
               <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}/>
                <span>
                <FontAwesomeIcon className="faicons"icon="trash" onClick={()=>props.deleteItem(item.key)}/>
            </span>
            </p>
            
        </div>
    })
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">    
            {listItem}
            </FlipMove>
            </div>
    )
}
export default ListItems