import { supabase } from "@/src/api/index";

export const getUser = async (id: string) => {
    const { data, error } = await supabase.from("users").select("*").eq("id", id).single();
};