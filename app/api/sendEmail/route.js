import { Resend } from 'resend';

const resend = new Resend('re_XhXWZW9r_9wh5zVnUDpjm26pYFZrdAKe9');

export async function POST(req) {
  try {
    const { nombre, email, mensaje } = await req.json();

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'samu_dmatheu@live.com',
      subject: 'Mensaje de tu porfolio',
      html: `
        <h2>Nuevo mensaje desde tu Porfolio</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
