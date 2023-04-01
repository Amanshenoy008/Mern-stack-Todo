import { useEffect, useState } from "react";

const Forms = ({lol , darkmode}) => {
  const [todos, settodos] = useState();
  const [s, sets] = useState();

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((d) => d.json())
      .then((data) => {
        settodos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lol]);

  const handledel = (id) => {
    console.log(id);
    fetch("http://localhost:8000/" + id, {
      method: "DELETE",
    })
      .then((d) => d.json())
      .then((data) => {
      //  console.log(data);
      })
      .catch((err) => 
      console.log(err)
      );
  };

  const handlecomp = ()=>{
        console.log(s)
  }

  return (
    <div className="mt-9 flex flex-col gap-5">
      {todos &&
        todos.map((t) => (
          <div key={t._id} className={darkmode? 'border-2 border-white  p-2 flex gap-4 rounded-md justify-around'  : "border-2 border-black dark:border-black p-2 flex gap-4 rounded-md justify-around"}>
            <p className="relative top-2">{t.task}</p>
            <button
              onClick={() => {
                handledel(t._id);
              }}
              className="btn text-red-800 hover:bg-red-500 btn-outline"
            >
              {" "}
              Delete{" "}
            </button>
            <div onClick={handlecomp} className="">
                <label className="swap relative top-3" >
            <input type="checkbox" onChange={(e)=>sets(e.target.value)}/>
               <div className="swap-on line-through	" >Completed</div> 
               <div className="swap-off"  >Completed</div>
               </label>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forms;
