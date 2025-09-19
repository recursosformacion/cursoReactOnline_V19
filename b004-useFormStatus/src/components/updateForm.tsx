export const updateUser = async (user: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(user), 5000);
      
    });
}