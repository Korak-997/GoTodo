import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// export {
//   addList,
//   editList,
//   deleteList,
//   allLists,
//   getList,
//   getTodo,
//   allTodos,
//   addTodo,
//   editTodo,
//   deleteTodo
// };


//* List operations
