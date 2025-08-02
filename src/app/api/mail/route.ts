import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const gmail_user = process.env.GMAIL_USER;
const gmail_pass = process.env.GMAIL_PASS;
const gmail_host = process.env.GMAIL_HOST;

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		console.log(body);

		const { name, surname, email, phone, message, language } = body;

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ message: 'Dirección de email no válida' },
				{ status: 400 }
			);
		}

		// Create transporter (configure with your email service)
		const transporter = nodemailer.createTransport({
			host: gmail_host,
			port: 587,
			secure: false,
			auth: {
				user: gmail_user,
				pass: gmail_pass,
			},
		});

		// Email content based on language
		const isSpanish = language === 'ES';
		const subject = 'Nuevo mensaje de contacto - Serrano While';

		const emailContent = `
			Nuevo mensaje de contacto - Serrano While

			Datos del contacto:
			Nombre: ${name}
			Apellidos: ${surname}
			Email: ${email}
			${phone ? `Teléfono: ${phone}` : ''}

			Mensaje:
			${message}
			`;

		// Send email to company
		await transporter.sendMail({
			from: gmail_user,
			to: gmail_user,
			subject: subject,
			html: emailContent,
			replyTo: email,
		});

		// Send confirmation email to user
		const userSubject = isSpanish
			? 'Confirmación de mensaje recibido - Serrano While'
			: 'Confirmació de missatge rebut - Serrano While';

		const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1466b8; border-bottom: 2px solid #1466b8; padding-bottom: 10px;">
          ${
						isSpanish
							? 'Mensaje recibido correctamente'
							: 'Missatge rebut correctament'
					}
        </h2>
        
        <p style="line-height: 1.6; color: #333;">
         "Hola ${name},"
        </p>
        
        <p style="line-height: 1.6; color: #333;">
          ${
						isSpanish
							? 'Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.'
							: 'Gràcies per posar-te en contacte amb nosaltres. Hem rebut el teu missatge i ens posarem en contacte amb tu el més aviat possible.'
					}
        </p>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0a335c; margin-top: 0;">
            ${isSpanish ? 'Resumen de tu mensaje:' : 'Resum del teu missatge:'}
          </h3>
          <p style="line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #1466b8; color: white; border-radius: 8px; text-align: center;">
          <h3 style="margin-top: 0; color: white;">
            ${isSpanish ? 'Información de contacto' : 'Informació de contacte'}
          </h3>
          <p style="margin: 5px 0;">📧 xxx@gmail.com</p>
          <p style="margin: 5px 0;">📞 6XX XXX XXX</p>
          <p style="margin: 5px 0;">📍 Avenida Diagonal 449, Barcelona</p>
        </div>

        <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>${
						isSpanish
							? 'Este es un mensaje automático, por favor no respondas a este email.'
							: 'Aquest és un missatge automàtic, si us plau no responguis a aquest email.'
					}</p>
        </div>
      </div>
    `;

		await transporter.sendMail({
			from: gmail_user,
			to: email,
			subject: userSubject,
			html: userHtmlContent,
		});

		return NextResponse.json(
			{ message: 'Email sent successfully' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error sending email:', error);
		return NextResponse.json(
			{ message: 'No se ha podido enviar tu mensaje' },
			{ status: 500 }
		);
	}
}
