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
const deleteUser = async (userId) => {
    try {
        const { data, error } = await supabase.from('users')
        .delete()
        .eq('auth_id', userId)
        .select();
        if (error) {
            throw new Error(`Supabase error: ${error.message}`);
        }
        return data;
    } catch (err) {
        console.error("Error deleting user:", err.message);
        throw new Error(`Failed to delete user: ${err.message}`);
    }



}

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

const authLogin = async (email, password) => {
  try {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if(error) throw error;

  return data;

  } catch (error) {
    console.error('Error logging in:', error.message)
    throw error;
  }
};

const getUserByAuthId = async (authId) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('auth_id', authId)
            .single();

        if (error) throw error;

        return data;
    } catch (err) {
        console.error('Error fetching user by auth ID:', err.message);
        throw err;
    }
};

const getUserData = async (req, res) => {
    res.status(200).send(req.user);
}

module.exports = {
    createUser,
    authLogin,
    createAuthUser,
    getUserByAuthId,
    getUserData,
    deleteUser
};