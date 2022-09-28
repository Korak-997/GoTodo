import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export {
  addList,
  deleteList,
  allLists,
  getList,
};

//* List operations

const getList = async (id) => {
  let { data: days, error } = await supabase
    .from("lists")
    .select("*")
    .eq("id", id);
  return error || lists == null
    ? { status: false, msg: error }
    : { status: true, data };
};

const allLists = async () => {
  let { data: lists, error } = await supabase.from("lists").select("*");
  return error || lists == null
    ? { status: false, msg: error }
    : { status: true, data: lists };
};

const addList = async (list) => {
  const { data, error } = await supabase.from("lists").insert([list]);
  return error || data == null
    ? { status: false, msg: error }
    : { status: true, data };
};

const updateList = async (id, list) => {
  const { data, error } = await supabase
    .from("lists")
    .update(list)
    .eq("id", id);
  return error || data == null
    ? { status: false, msg: error }
    : { status: true, data };
};

const deleteList = async (id) => {
  const { data, error } = await supabase.from("lists").delete().eq("id", id);
};
