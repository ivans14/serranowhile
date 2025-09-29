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
		const isEnglish = language === 'EN';
		const subject = 'Nuevo mensaje de contacto - Serrano While';

		const emailContent = `
		<html>
			<body style="font-family: Arial, sans-serif; line-height: 1.5;">
			<h2>Nuevo mensaje de contacto - Serrano While</h2>

			<h3>Datos del contacto:</h3>
			<p><strong>Nombre:</strong> ${name}</p>
			<p><strong>Apellidos:</strong> ${surname}</p>
			<p><strong>Email:</strong> ${email}</p>
			${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}

			<h3>Mensaje:</h3>
			<p>${message}</p>
			</body>
		</html>
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
			: isEnglish
			? 'Message confirmation received - Serrano While'
			: 'Confirmació de missatge rebut - Serrano While';

		const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1466b8; border-bottom: 2px solid #1466b8; padding-bottom: 10px;">
          ${
						isSpanish
							? 'Mensaje recibido correctamente'
							: isEnglish
							? 'Message received successfully'
							: 'Missatge rebut correctament'
					}
        </h2>
        
        <p style="line-height: 1.6; color: #333;">
         ${
						isSpanish
							? `"Hola ${name},"`
							: isEnglish
							? `"Hello ${name},"`
							: `"Hola ${name},"`
					}
        </p>
        
        <p style="line-height: 1.6; color: #333;">
          ${
						isSpanish
							? 'Gracias por ponerte en contacto con nosotros. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.'
							: isEnglish
							? 'Thank you for contacting us. We have received your message and will get back to you as soon as possible.'
							: 'Gràcies per posar-te en contacte amb nosaltres. Hem rebut el teu missatge i ens posarem en contacte amb tu el més aviat possible.'
					}
        </p>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0a335c; margin-top: 0;">
            ${
							isSpanish
								? 'Resumen de tu mensaje:'
								: isEnglish
								? 'Summary of your message:'
								: 'Resum del teu missatge:'
						}
          </h3>
          <p style="line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #1466b8; color: white; border-radius: 8px; text-align: center;">
          <h3 style="margin-top: 0; color: white;">
            ${
							isSpanish
								? 'Información de contacto'
								: isEnglish
								? 'Contact information'
								: 'Informació de contacte'
						}
          </h3>
          <p style="margin: 5px 0;">📧 info@serranowhile.com</p>
          <p style="margin: 5px 0;">📞 684 48 80 17</p>
          <p style="margin: 5px 0;">📍 Avenida Diagonal 449, Barcelona</p>
        </div>

        <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>${
						isSpanish
							? 'Este es un mensaje automático, por favor no respondas a este email.'
							: isEnglish
							? 'This is an automatic message, please do not reply to this email.'
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
