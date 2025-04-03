export const actions = {
    sendContactEmail: async({ request }) => {
        const formData = await request.formData();
        console.log(... formData);

    }
} 


