import React,{useState} from 'react';
import todo from "../images/todo.png";
import './ToDo.css';

const ToDo = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);
    const addItem = ()=>{
        if(!inputData){}
        else{
            setItems([...items, inputData]);
            setInputData("");
        }
        
    }
     const handleKeypress = (e) => {
       //it triggers by pressing the enter key
      if (e.key === 'Enter') 
      {
          addItem();
     }
     };
    const deleteItem = (id)=>{
        const updatedItems = items.filter((item,ind)=>{
            return ind !== id;
        })
        setItems(updatedItems);
    }
    
    return (
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add a new item"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              onKeyPress={handleKeypress}
            />
            <i className="fa fa-plus" title="Add item" onClick={addItem}></i>
          </div>
          {items.map((item, index) => {
            return (
              <div className="showItems">
                <div className="eachItem" key={index}>
                  <h3>{item}</h3>
                  <i
                    class="fas fa-trash-alt"
                    title="Delete Item"
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              </div>
            );
          })}

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ToDo;