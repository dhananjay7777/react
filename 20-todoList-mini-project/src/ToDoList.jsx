import { useState, useEffect } from "react";

// function thats allows us to enter activity and save the activity inside an array
function ToDoList() {
   const [activity, setActivity] = useState(""); //this is for the activity you enter
   const [listData, setListData] = useState([]); //this is to save activity in an array (listData) and then later display the activities you entered
   function addActivity() {
      setListData([...listData, activity]); //saves activity in array
      setActivity(""); // makes inputbox empty so that we can write next activity. Improves UI.
   }

   //------------------------------------------------------------------------------------------------
   // just to check if activity is added. Whenever we click add button setListData is called and activity is
   // added to listData array. So, whenever we add activity, we console log listData array
   useEffect(() => {
      console.log(listData);
   }, [listData]);

   //-------------------------------------------------------------------------------------------------
   //function to remove single activity
   // i is the key of each list item
   function removeActivity(i) {
      const updatedData = listData.filter((elem, id) => {
         return i != id;
      });
      setListData(updatedData);
   }

   // listData.filter((elem, id) => { return i != id; });

   // This uses the filter method on listData.
   // For each element in listData, the filter method calls the provided function with two arguments: elem (the element itself) and id (the index of the element).
   // The function checks if i is not equal to id (the index of the current element). If it's not equal, the element is included in the new array updatedData; otherwise, it's filtered out.
   // setListData(updatedData);

   // Finally, the setListData function is called with the new array updatedData, updating the state of listData to remove the element at index i.

   //-------------------------------------------------------------------------------------------------

   // function to remove all activites with one click
   function removeall() {
      setListData([]);
   }

   return (
      <>
         <div className="header flex justify-center py-10 px-10 mt-8 bg-lime-200 w-1/2 rounded-sm mx-auto">
            <h1 className="heading text-violet-950 font-mono font-extrabold text-5xl mx-auto">
               To Do List
            </h1>
         </div>

         <div className="flex justify-center py-10 px-10 bg-violet-200 w-1/2 rounded-sm mx-auto">
            <input
               type="text"
               placeholder=" Add Activity"
               className="py-3 rounded-md w-3/5 border-none pl-2"
               value={activity}
               onChange={(e) => setActivity(e.target.value)}
            />
            <button
               className="text-violet-950 bg-lime-200 px-5 rounded-md font-serif ml-6 font-semibold"
               onClick={addActivity}
            >
               ADD
            </button>
         </div>

         <h3 className="flex justify-center bg-violet-200 w-1/2 mx-auto font-bold text-violet-950 text-3xl">
            Here's is your list:
         </h3>
         <div className="w-full flex justify-center">
            <div className="inline-block py-8 px-8 bg-violet-200 w-1/2 rounded-sm  text-center float-left">
               {/* if list is not empty run map function */}
               {listData != [] &&
                  listData.map((data, i) => {
                     return (
                        <>
                           <div className="flex justify-start">
                              <p
                                 key={i}
                                 className="text-purple-300 w-3/5 font-semibold bg-slate-950 my-3 px-2 py-2 rounded-md justify-center flex mx-auto font-poppins"
                              >
                                 {data}
                              </p>

                              <button
                                 className="w-1/4 py-2 my-3 font-mono border-2 border-red-500 rounded-lg"
                                 onClick={() => removeActivity(i)}
                              >
                                 Remove
                              </button>
                           </div>
                        </>
                     );
                  })}
            </div>
         </div>

         {/* if there is at least one activity in the list then we display remove all button */}
         {listData.length >= 1 && (
            <div className="bg-violet-200 w-1/2 flex mx-auto justify-center py-3">
               <button
                  className="  border-red-800 border-2 px-2 py-2 flex mx-auto justify-center rounded-lg font-mono font-semibold"
                  onClick={removeall}
               >
                  Remove ALL
               </button>
            </div>
         )}
      </>
   );
}

export default ToDoList;
