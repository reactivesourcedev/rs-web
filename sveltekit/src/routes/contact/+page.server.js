import { NAMECHEAP_EMAIL } from "$env/static/private";
import transporter from "$lib/mail/emailSetup.js";

export const actions = {
    sendContactEmail: async({ request }) => {
        try{
            const formData = await request.formData();
            console.log(... formData);
            const name = formData.get("name");
            const email = formData.get("email");
            const cellphone = formData.get("cellphone");
            const message = formData.get("message");
            let subject = 'RS Contacto: ' + name 
            + ' ' + email + ' ' + cellphone;
            let html = 
            `<h2>Hola RS! he enviado mis datos de contacto: </h2>
            <h6>${name}</h6>
            <h6>${email}</h6>
            <h6>${cellphone}</h6>
            <pre>${message}</pre>`;

            //cc: 'santiago.lozano92@gmail.com',
            const mailMessage = {
                from: NAMECHEAP_EMAIL,
                to: NAMECHEAP_EMAIL,                
                subject: subject,
                text: message,
                html: html,
            };

            console.log(mailMessage);

            const sendEmail = async (mailMessage) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(mailMessage, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(mailMessage);

            return {
                success: "Email is sent",
            };

        }catch (error) {
            console.error(error);
        }

    }
} 


