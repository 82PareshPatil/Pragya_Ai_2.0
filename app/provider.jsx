// import { supabase } from '@/Services/supabaseClient';
// import React, { useEffect } from 'react';

// function Provider({ children }) {

//     const [user,setUser] = useState();
//   useEffect(() => {
//     const createNewUser = async () => {
//       // Get current authenticated user
//       const { data: { user }, error: authError } = await supabase.auth.getUser();
      
//       if (authError) {
//         console.error('Error fetching user:', authError.message);
//         return;
//       }

//       if (!user) {
//         console.log('No authenticated user');
//         return;
//       }

//       try {
//         // Check if user exists in database
//         const { data: existingUsers, error: selectError } = await supabase
//           .from('Users')
//           .select('*')
//           .eq('email', user.email);

//         if (selectError) throw selectError;

//         // Create new user if not found
//         if (existingUsers?.length === 0) {
//           const { error: insertError } = await supabase
//             .from('Users')
//             .insert([{
//               name: user.user_metadata?.name || user.email,
//               email: user.email,
//               picture: user.user_metadata?.picture || null,
//               // Consider adding auth user ID if your schema requires it
//               // auth_id: user.id
//             }
        
//         ])
//         console.log(data);
//         setUser(data);
//         return;

//           if (insertError) throw insertError;
//           console.log('New user created successfully');
//         }

//         setUser(Users[0]);
//       } catch (error) {
//         console.error('User creation error:', error.message);
//       }
//     };

   
//   }, []);

//   return <div>{children}</div>;
// }

// export default Provider;



import { UserDetailedContext } from '@/context/UserDetailedContext';
import { supabase } from '@/Services/supabaseClient';
import React, { useContext, useEffect, useState } from 'react'; // Added useState import

function Provider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        const createNewUser = async () => {
            // Get current authenticated user
            const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
            
            if (authError) {
                console.error('Error fetching user:', authError.message);
                return;
            }

            if (!authUser) {
                console.log('No authenticated user');
                return;
            }

            try {
                // Check if user exists in database
                const { data: existingUsers, error: selectError } = await supabase
                    .from('Users')
                    .select('*')
                    .eq('email', authUser.email);

                if (selectError) throw selectError;

                // Create new user if not found
                if (existingUsers?.length === 0) {
                    const { data: newUser, error: insertError } = await supabase // Changed to capture data
                        .from('Users')
                        .insert([{
                            name: authUser.user_metadata?.name || authUser.email,
                            email: authUser.email,
                            picture: authUser.user_metadata?.picture || null,
                        }])
                        .select(); // Added .select() to get the inserted record

                    if (insertError) throw insertError;
                    
                    console.log('New user created successfully', newUser);
                    setUser(newUser[0]);
                    return;
                }

                // Set user state with existing user
                setUser(existingUsers[0]);
            } catch (error) {
                console.error('User creation error:', error.message);
            }
        };

        createNewUser(); // Added function invocation
    }, []);

    return (
      
    <UserDetailedContext.Provider value={{user, setUser}}>
   <div> {children}    </div>
    </UserDetailedContext.Provider>
    )

}

export default Provider;

export const useUser = () => {

    const context=useContext(UserDetailedContext);
    return context;
}