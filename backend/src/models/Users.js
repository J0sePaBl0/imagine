const { SupabaseClient } = require('@supabase/supabase-js');
const supabase = require('../database/db');


const createUser = async (userData) => {
    try{
        const { data, error } = await supabase.from('users').insert(userData).select();
        if (error) {
            throw new Error(`Supabase error: ${error.message}`);
        }
        return data [0];
    }catch (err){
        console.error("Error creating user:", err.message);
        console.error("User creation failed:", {
        message: err.message,
        code: err.code, 
        details: err.details
    });
    throw new Error(`Failed to create user: ${err.message}`);
    }
};

const createAuthUser = async (email, password) => {
    try{
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        
      });
      if (error) throw error;

      return data.user.id;
      }catch(err){
        console.error("Error creating auth user", err.message);
        throw err;
      }
};


 //Login user
const loginUser = async (email, password) => {
          try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    // Get additional user data from your custom table if needed
    const { data: userData } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    return {
      ...data.user,
      ...userData,
      session: data.session
    };
  } catch (error) {
    throw error;
  }
};
/*
// Get user by ID
const getUserById = async (id) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (error) {
        throw error;
    }
};
*/
module.exports = {
    createUser,
    loginUser,
    createAuthUser
    //getUserById
};