/**
 * Future apiRequest async function to handle api calls 
 */

export const saveUserForm = () =>
    new Promise((f) => {
        setTimeout(f, 1000);
    })
    .then(() => {
        console.log('Form is saved');
    });