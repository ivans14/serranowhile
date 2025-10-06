'use client';
import { Separator } from '@/components/ui/separator';
import React, { useContext } from 'react';
import { LanguageContext, Language } from './context';
import CustomDialog from './CustomDialog';
import { useRouter } from 'next/navigation';

const translations = {
	ES: {
		contact: 'Contacto',
		legal: {
			title: 'Aviso legal',
			desc: (
				<ol className='flex flex-col gap-2 list-decimal pl-5'>
					<li>
						<strong>Datos del titular</strong>
						<br />
						En cumplimiento con el deber de información recogido en el artículo
						10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
						la Información y del Comercio Electrónico, se informa que el titular
						del sitio web es:
						<ul className='list-disc pl-5'>
							<li>Titular: DURAN SERRANO PARTNERS, S.L.</li>
							<li>NIF/CIF: B21781406</li>
							<li>
								Domicilio social: Av. Diagonal 449 4ª Planta 08036 Barcelona
							</li>
						</ul>
					</li>

					<li>
						<strong>Objeto</strong>
						<br />
						El presente sitio web tiene por objeto ofrecer información sobre los
						servicios de consultoría a empresas prestados por Serrano While. El
						acceso y/o uso de este sitio web atribuye la condición de usuario,
						aceptando, desde dicho acceso y/o uso, el presente Aviso Legal.
					</li>

					<li>
						<strong>Condiciones de uso</strong>
						<br />
						El usuario se compromete a hacer un uso adecuado de los contenidos y
						servicios que Serrano While ofrece a través de su web y a no
						emplearlos para:
						<ul className='list-disc pl-5'>
							<li>
								Incurrir en actividades ilícitas o contrarias a la buena fe y al
								orden público.
							</li>
							<li>
								Provocar daños en los sistemas físicos y lógicos de [Nombre
								comercial], de sus proveedores o de terceras personas.
							</li>
							<li>
								Intentar acceder y, en su caso, utilizar las cuentas de correo
								electrónico de otros usuarios y modificar o manipular sus
								mensajes.
							</li>
						</ul>
						Serrano While se reserva el derecho de retirar todos aquellos
						comentarios y aportaciones que vulneren el respeto a la dignidad de
						la persona, que sean discriminatorios, xenófobos, racistas,
						pornográficos, que atenten contra la juventud o la infancia, el
						orden o la seguridad pública o que, a su juicio, no resulten
						adecuados para su publicación.
					</li>

					<li>
						<strong>Propiedad intelectual e industrial</strong>
						<br />
						Todos los contenidos del sitio web, incluyendo textos, imágenes,
						gráficos, logos, iconos, software, así como su diseño gráfico y
						códigos fuente, constituyen una obra cuya propiedad pertenece a
						Serrano While, sin que puedan entenderse cedidos al usuario ninguno
						de los derechos de explotación sobre los mismos más allá de lo
						estrictamente necesario para el correcto uso de la web.
					</li>

					<li>
						<strong>Protección de datos</strong>
						<br />
						Serrano While cumple con las directrices del Reglamento General de
						Protección de Datos (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018
						(LOPDGDD), y vela por garantizar un correcto uso y tratamiento de
						los datos personales del usuario. Para más información, consulte
						nuestra [Enlace a Política de Privacidad].
					</li>

					<li>
						<strong>Exclusión de garantías y responsabilidad</strong>
						<br />
						Serrano While no se hace responsable, en ningún caso, de los daños y
						perjuicios de cualquier naturaleza que pudieran ocasionar, a título
						enunciativo: errores u omisiones en los contenidos, falta de
						disponibilidad del portal o la transmisión de virus o programas
						maliciosos o lesivos en los contenidos, a pesar de haber adoptado
						todas las medidas tecnológicas necesarias para evitarlo.
					</li>

					<li>
						<strong>Modificaciones</strong>
						<br />
						Serrano While se reserva el derecho de efectuar sin previo aviso las
						modificaciones que considere oportunas en su portal, pudiendo
						cambiar, suprimir o añadir tanto los contenidos como los servicios
						que se presten a través de la misma.
					</li>

					<li>
						<strong>Legislación aplicable y jurisdicción</strong>
						<br />
						La relación entre Serrano While y el usuario se regirá por la
						normativa española vigente y cualquier controversia se someterá a
						los Juzgados y tribunales de Barcelona, salvo que la normativa
						aplicable disponga otra cosa.
					</li>
				</ol>
			),
		},
		privacy: {
			title: 'Política de privacidad',
			desc: (
				<ol className='flex flex-col gap-2 list-decimal pl-5'>
					<li>
						<strong>Responsable del tratamiento</strong>
						<br />
						En cumplimiento del Reglamento (UE) 2016/679, del Parlamento Europeo
						y del Consejo, de 27 de abril de 2016 (RGPD), y de la Ley Orgánica
						3/2018, de 5 de diciembre (LOPDGDD), se informa al usuario de que
						los datos personales que facilite a través de este sitio web serán
						tratados por:
						<ul className='list-disc pl-5'>
							<li>Titular: DURAN SERRANO PARTNERS, S.L.</li>
							<li>NIF/CIF: B21781406</li>
							<li>
								Domicilio social: Av. Diagonal 449 4ª Planta 08036 Barcelona
							</li>
						</ul>
					</li>

					<li>
						<strong>Finalidad del tratamiento</strong>
						<br />
						Los datos personales proporcionados por los usuarios serán
						utilizados con las siguientes finalidades:
						<ul className='list-disc pl-5'>
							<li>
								Gestionar y prestar los servicios de consultoría ofrecidos por
								SERRANO WHILE.
							</li>
							<li>
								Atender solicitudes de información, contacto o presupuesto.
							</li>
							<li>
								Cumplir con las obligaciones legales aplicables al responsable
								del tratamiento.
							</li>
						</ul>
						No se realizarán tratamientos automatizados de datos con fines de
						elaboración de perfiles.
					</li>

					<li>
						<strong>Legitimación</strong>
						<br />
						La base legal para el tratamiento de sus datos es el consentimiento
						que usted otorga al enviar un formulario o contactar por cualquier
						vía, así como la ejecución de un contrato en caso de que contrate
						nuestros servicios.
					</li>

					<li>
						<strong>Conservación de los datos</strong>
						<br />
						Los datos se conservarán durante el tiempo necesario para cumplir
						con la finalidad para la que se recaban y para determinar las
						posibles responsabilidades que se pudieran derivar de dicha
						finalidad y del tratamiento de los datos.
					</li>

					<li>
						<strong>Destinatarios</strong>
						<br />
						No se cederán datos a terceros, salvo obligación legal.
						<br />
						Tampoco se realizarán transferencias internacionales de datos.
					</li>

					<li>
						<strong>Derechos de los usuarios</strong>
						<br />
						El usuario puede ejercer en cualquier momento los siguientes
						derechos en relación con sus datos personales:
						<ul className='list-disc pl-5'>
							<li>Derecho de acceso</li>
							<li>Derecho de rectificación</li>
							<li>Derecho de supresión</li>
							<li>Derecho de limitación del tratamiento</li>
							<li>Derecho de oposición</li>
							<li>Derecho a la portabilidad de los datos</li>
							<li>Derecho a retirar el consentimiento en cualquier momento</li>
						</ul>
						Para ejercer estos derechos, puede enviar una solicitud expresa,
						junto con una copia de su DNI o documento equivalente, a través del
						correo electrónico: [email de contacto].
						<br />
						<br />
						Asimismo, tiene derecho a presentar una reclamación ante la Agencia
						Española de Protección de Datos (www.aepd.es) si considera que se ha
						vulnerado alguno de sus derechos.
					</li>

					<li>
						<strong>Seguridad</strong>
						<br />
						SERRANO WHILE aplica las medidas técnicas y organizativas necesarias
						para garantizar la seguridad, integridad y confidencialidad de los
						datos conforme a la legislación vigente.
					</li>
				</ol>
			),
		},
	},

	CAT: {
		contact: 'Contacte',
		legal: {
			title: 'Avís legal',
			desc: (
				<ol className='flex flex-col gap-2 list-decimal pl-5'>
					<li>
						<strong>Dades del titular</strong>
						<br />
						En compliment del deure d&apos;informació recollit a l&apos;article
						10 de la Llei 34/2002, d&apos;11 de juliol, de Serveis de la
						Societat de la Informació i del Comerç Electrònic, s&apos;informa
						que el titular del lloc web és:
						<ul className='list-disc pl-5'>
							<li>Titular: DURAN SERRANO PARTNERS, S.L.</li>
							<li>NIF/CIF: B21781406</li>
							<li>
								Domicili social: Av. Diagonal 449 4a Planta 08036 Barcelona
							</li>
						</ul>
					</li>

					<li>
						<strong>Objecte</strong>
						<br />
						Aquest lloc web té per objecte oferir informació sobre els serveis
						de consultoria a empreses prestats per Serrano While. L&apos;accés
						i/o ús d&apos;aquest lloc web atribueix la condició d&apos;usuari,
						acceptant, des d&apos;aquest accés i/o ús, el present Avís Legal.
					</li>

					<li>
						<strong>Condicions d&apos;ús</strong>
						<br />
						L&apos;usuari es compromet a fer un ús adequat dels continguts i
						serveis que Serrano While ofereix a través del seu web i a no
						emprar-los per a:
						<ul className='list-disc pl-5'>
							<li>
								Incórrer en activitats il·lícites o contràries a la bona fe i a
								l&apos;ordre públic.
							</li>
							<li>
								Provocar danys en els sistemes físics i lògics de [Nom
								comercial], dels seus proveïdors o de terceres persones.
							</li>
							<li>
								Intentar accedir i, si escau, utilitzar els comptes de correu
								electrònic d&apos;altres usuaris i modificar o manipular els
								seus missatges.
							</li>
						</ul>
						Serrano While es reserva el dret de retirar tots aquells comentaris
						i aportacions que vulnerin el respecte a la dignitat de la persona,
						que siguin discriminatoris, xenòfobs, racistes, pornogràfics, que
						atemptin contra la joventut o la infància, l&apos;ordre o la
						seguretat pública o que, al seu judici, no resultin adequats per a
						la seva publicació.
					</li>

					<li>
						<strong>Propietat intel·lectual i industrial</strong>
						<br />
						Tots els continguts del lloc web, incloent textos, imatges, gràfics,
						logotips, icones, programari, així com el seu disseny gràfic i codis
						font, constitueixen una obra la propietat de la qual pertany a
						Serrano While, sense que es puguin entendre cedits a l&apos;usuari
						cap dels drets d&apos;explotació sobre els mateixos més enllà del
						que sigui estrictament necessari per al correcte ús del web.
					</li>

					<li>
						<strong>Protecció de dades</strong>
						<br />
						Serrano While compleix amb les directrius del Reglament General de
						Protecció de Dades (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018
						(LOPDGDD), i vetlla per garantir un correcte ús i tractament de les
						dades personals de l&apos;usuari. Per a més informació, consulteu la
						nostra [Enllaç a Política de Privacitat].
					</li>

					<li>
						<strong>Exclusió de garanties i responsabilitat</strong>
						<br />
						Serrano While no es fa responsable, en cap cas, dels danys i
						perjudicis de qualsevol naturalesa que poguessin ocasionar, a títol
						enunciatiu: errors o omissions en els continguts, falta de
						disponibilitat del portal o la transmissió de virus o programes
						maliciosos o lesius en els continguts, tot i haver adoptat totes les
						mesures tecnològiques necessàries per evitar-ho.
					</li>

					<li>
						<strong>Modificacions</strong>
						<br />
						Serrano While es reserva el dret d&apos;efectuar sense avís previ
						les modificacions que consideri oportunes al seu portal, podent
						canviar, suprimir o afegir tant els continguts com els serveis que
						es prestin a través del mateix.
					</li>

					<li>
						<strong>Legislació aplicable i jurisdicció</strong>
						<br />
						La relació entre Serrano While i l&apos;usuari es regirà per la
						normativa espanyola vigent i qualsevol controvèrsia se sotmetrà als
						Jutjats i tribunals de Barcelona, llevat que la normativa aplicable
						disposi una altra cosa.
					</li>
				</ol>
			),
		},
		privacy: {
			title: 'Política de privacitat',
			desc: (
				<ol className='flex flex-col gap-2 list-decimal pl-5'>
					<li>
						<strong>Responsable del tractament</strong>
						<br />
						En compliment del Reglament (UE) 2016/679, del Parlament Europeu i
						del Consell, de 27 d&apos;abril de 2016 (RGPD), i de la Llei
						Orgànica 3/2018, de 5 de desembre (LOPDGDD), s&apos;informa a
						l&apos;usuari que les dades personals que faciliti a través
						d&apos;aquest lloc web seran tractades per:
						<ul className='list-disc pl-5'>
							<li>Titular: DURAN SERRANO PARTNERS, S.L.</li>
							<li>NIF/CIF: B21781406</li>
							<li>
								Domicili social: Av. Diagonal 449 4a Planta 08036 Barcelona
							</li>
						</ul>
					</li>

					<li>
						<strong>Finalitat del tractament</strong>
						<br />
						Les dades personals proporcionades pels usuaris seran utilitzades
						amb les següents finalitats:
						<ul className='list-disc pl-5'>
							<li>
								Gestionar i prestar els serveis de consultoria oferts per
								SERRANO WHILE.
							</li>
							<li>
								Atendre sol·licituds d&apos;informació, contacte o pressupost.
							</li>
							<li>
								Complir amb les obligacions legals aplicables al responsable del
								tractament.
							</li>
						</ul>
						No es realitzaran tractaments automatitzats de dades amb finalitats
						d&apos;elaboració de perfils.
					</li>

					<li>
						<strong>Legitimació</strong>
						<br />
						La base legal per al tractament de les seves dades és el
						consentiment que vostè atorga en enviar un formulari o contactar per
						qualsevol via, així com l&apos;execució d&apos;un contracte en cas
						que contracti els nostres serveis.
					</li>

					<li>
						<strong>Conservació de les dades</strong>
						<br />
						Les dades es conservaran durant el temps necessari per complir amb
						la finalitat per a la qual es recullen i per determinar les
						possibles responsabilitats que es poguessin derivar d&apos;aquesta
						finalitat i del tractament de les dades.
					</li>

					<li>
						<strong>Destinataris</strong>
						<br />
						No es cediran dades a tercers, llevat d&apos;obligació legal.
						<br />
						Tampoc es realitzaran transferències internacionals de dades.
					</li>

					<li>
						<strong>Drets dels usuaris</strong>
						<br />
						L&apos;usuari pot exercir en qualsevol moment els següents drets en
						relació amb les seves dades personals:
						<ul className='list-disc pl-5'>
							<li>Dret d&apos;accés</li>
							<li>Dret de rectificació</li>
							<li>Dret de supressió</li>
							<li>Dret de limitació del tractament</li>
							<li>Dret d&apos;oposició</li>
							<li>Dret a la portabilitat de les dades</li>
							<li>Dret a retirar el consentiment en qualsevol moment</li>
						</ul>
						Per exercir aquests drets, pot enviar una sol·licitud expressa,
						juntament amb una còpia del seu DNI o document equivalent, a través
						del correu electrònic: [email de contacte].
						<br />
						<br />
						Així mateix, té dret a presentar una reclamació davant
						l&apos;Agència Espanyola de Protecció de Dades (www.aepd.es) si
						considera que s&apos;ha vulnerat algun dels seus drets.
					</li>

					<li>
						<strong>Seguretat</strong>
						<br />
						SERRANO WHILE aplica les mesures tècniques i organitzatives
						necessàries per garantir la seguretat, integritat i confidencialitat
						de les dades conforme a la legislació vigent.
					</li>
				</ol>
			),
		},
	},

	ENG: {
		contact: 'Contact',
		legal: {
			title: 'Legal Notice',
			desc: (
				<ol className='flex flex-col gap-2 list-decimal pl-5'>
					<li>
						<strong>Owner Information</strong>
						<br />
						In compliance with the information duty set forth in Article 10 of
						Law 34/2002, of July 11, on Information Society and Electronic
						Commerce Services, it is hereby informed that the owner of the
						website is:
						<ul className='list-disc pl-5'>
							<li>Owner: DURAN SERRANO PARTNERS, S.L.</li>
							<li>Tax ID/CIF: B21781406</li>
							<li>
								Registered Address: Av. Diagonal 449 4th Floor 08036 Barcelona
							</li>
						</ul>
					</li>

					<li>
						<strong>Purpose</strong>
						<br />
						The purpose of this website is to provide information about business
						consulting services provided by Serrano While. Access and/or use of
						this website grants the status of user, accepting, from such access
						and/or use, this Legal Notice.
					</li>

					<li>
						<strong>Terms of Use</strong>
						<br />
						The user undertakes to make appropriate use of the content and
						services that Serrano While offers through its website and not to
						use them to:
						<ul className='list-disc pl-5'>
							<li>
								Engage in illegal activities or activities contrary to good
								faith and public order.
							</li>
							<li>
								Cause damage to the physical and logical systems of [Trade
								name], its suppliers or third parties.
							</li>
							<li>
								Attempt to access and, where applicable, use other users&apos;
								email accounts and modify or manipulate their messages.
							</li>
						</ul>
						Serrano While reserves the right to remove all comments and
						contributions that violate respect for human dignity, that are
						discriminatory, xenophobic, racist, pornographic, that threaten
						youth or childhood, order or public safety or that, in its judgment,
						are not suitable for publication.
					</li>

					<li>
						<strong>Intellectual and Industrial Property</strong>
						<br />
						All website content, including texts, images, graphics, logos,
						icons, software, as well as its graphic design and source codes,
						constitute a work whose ownership belongs to Serrano While, without
						any exploitation rights over them being understood as transferred to
						the user beyond what is strictly necessary for the correct use of
						the website.
					</li>

					<li>
						<strong>Data Protection</strong>
						<br />
						Serrano While complies with the guidelines of the General Data
						Protection Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018
						(LOPDGDD), and ensures the correct use and treatment of the
						user&apos;s personal data. For more information, please consult our
						[Link to Privacy Policy].
					</li>

					<li>
						<strong>Exclusion of Warranties and Liability</strong>
						<br />
						Serrano While is not responsible, in any case, for damages and
						losses of any nature that could be caused, including but not limited
						to: errors or omissions in content, lack of portal availability or
						transmission of viruses or malicious or harmful programs in content,
						despite having adopted all necessary technological measures to
						prevent it.
					</li>

					<li>
						<strong>Modifications</strong>
						<br />
						Serrano While reserves the right to make modifications it deems
						appropriate to its portal without prior notice, being able to
						change, delete or add both content and services provided through it.
					</li>

					<li>
						<strong>Applicable Law and Jurisdiction</strong>
						<br />
						The relationship between Serrano While and the user shall be
						governed by current Spanish regulations and any dispute shall be
						submitted to the Courts and tribunals of Barcelona, unless
						applicable regulations provide otherwise.
					</li>
				</ol>
			),
		},
		privacy: {
			title: 'Privacy Policy',
			desc: (
				<ol className='flex flex-col gap-2 list-decimal pl-5'>
					<li>
						<strong>Data Controller</strong>
						<br />
						In compliance with Regulation (EU) 2016/679, of the European
						Parliament and of the Council, of 27 April 2016 (GDPR), and Organic
						Law 3/2018, of 5 December (LOPDGDD), the user is informed that the
						personal data provided through this website will be processed by:
						<ul className='list-disc pl-5'>
							<li>Owner: DURAN SERRANO PARTNERS, S.L.</li>
							<li>Tax ID/CIF: B21781406</li>
							<li>
								Registered Address: Av. Diagonal 449 4th Floor 08036 Barcelona
							</li>
						</ul>
					</li>

					<li>
						<strong>Purpose of Processing</strong>
						<br />
						The personal data provided by users will be used for the following
						purposes:
						<ul className='list-disc pl-5'>
							<li>
								Manage and provide consulting services offered by SERRANO WHILE.
							</li>
							<li>Handle requests for information, contact or quotes.</li>
							<li>
								Comply with legal obligations applicable to the data controller.
							</li>
						</ul>
						No automated data processing will be performed for profiling
						purposes.
					</li>

					<li>
						<strong>Legal Basis</strong>
						<br />
						The legal basis for processing your data is the consent you provide
						when submitting a form or contacting us by any means, as well as the
						execution of a contract if you hire our services.
					</li>

					<li>
						<strong>Data Retention</strong>
						<br />
						Data will be retained for the time necessary to fulfill the purpose
						for which it is collected and to determine any liabilities that may
						arise from such purpose and from data processing.
					</li>

					<li>
						<strong>Recipients</strong>
						<br />
						Data will not be transferred to third parties, except by legal
						obligation.
						<br />
						International data transfers will not be made either.
					</li>

					<li>
						<strong>User Rights</strong>
						<br />
						Users may exercise the following rights regarding their personal
						data at any time:
						<ul className='list-disc pl-5'>
							<li>Right of access</li>
							<li>Right of rectification</li>
							<li>Right of erasure</li>
							<li>Right to restriction of processing</li>
							<li>Right to object</li>
							<li>Right to data portability</li>
							<li>Right to withdraw consent at any time</li>
						</ul>
						To exercise these rights, you may send an express request, together
						with a copy of your ID or equivalent document, via email to:
						[contact email].
						<br />
						<br />
						You also have the right to file a complaint with the Spanish Data
						Protection Agency (www.aepd.es) if you consider that any of your
						rights have been violated.
					</li>

					<li>
						<strong>Security</strong>
						<br />
						SERRANO WHILE applies the necessary technical and organizational
						measures to ensure the security, integrity and confidentiality of
						data in accordance with current legislation.
					</li>
				</ol>
			),
		},
	},
};

function Footer() {
	const { language } = useContext(LanguageContext);
	const t = translations[language as Language];
	const router = useRouter();
	return (
		<div className='relative text-xs md:text-base bottom-0 bg-primary flex justify-center text-background w-[100%] p-10'>
			<div className='flex justify-center items-center gap-5 text-center'>
				<p
					className='flex-1 hover:cursor-pointer'
					onClick={() => router.push('/contact')}
				>
					{t.contact}
				</p>
				<Separator orientation='vertical' />
				<CustomDialog
					title={t.legal.title}
					description={t.legal.desc}
					trigger={
						<p className='flex-1 hover:cursor-pointer'>{t.legal.title}</p>
					}
				/>
				<Separator orientation='vertical' />
				<CustomDialog
					title={t.privacy.title}
					description={t.privacy.desc}
					trigger={
						<p className='flex-1 hover:cursor-pointer'>{t.privacy.title}</p>
					}
				/>
			</div>
		</div>
	);
}

export default Footer;
