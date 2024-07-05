function Stats({initialItems}) {
    const totalPacked = initialItems.reduce((acc,curr)=>(curr.packed?acc+1:acc),0);
    const percentage = ((totalPacked*100)/initialItems.length).toFixed(0);
    return (
      <footer className="stats">
          {initialItems.length===0? 
           ( <em>Let's start packing stuffs🚀</em>)
            :
            (percentage>=100? (<em>You got everything! Ready to go ✈️</em>) : (<em> 💼You have {initialItems.length} items in your list, and you already packed {totalPacked}({percentage}%)</em>))
          }
      </footer>
    );
  }

  export default Stats;