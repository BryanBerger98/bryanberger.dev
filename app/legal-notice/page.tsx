import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import Footer from '../_components/Footer';

const LegalNoticePage = () => {

	return (
		<>
			<div className="container mx-auto py-8 flex flex-col gap-8 mb-8">
				<h1 className="text-4xl font-bold">Mentions légales</h1>
				<Button
					className="gap-2 w-fit"
					variant="outline"
					asChild
				>
					<Link href="/">
						<ArrowLeft size="16" />
						Retour au site
					</Link>
				</Button>
				<div>
					<h2 className="text-3xl font-semibold mb-4">1 - Édition du site</h2>
					<p>
						<span className="mr-1">En vertu de l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé aux utilisateurs du site internet</span>
						<Link
							className="text-blue-500 hover:underline"
							href="https://bryanberger.dev"
						>https://bryanberger.dev
						</Link>
						<span> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</span>
					</p>
					<p>
						<span className="font-semibold">Propriétaire du site:</span> Bryan Berger, Auto-entrepreneur au numéro de SIREN 838388205 - Contact : contact@weberger.net
					</p>
					<p>
						<span className="font-semibold">Directeur de la publication:</span> Bryan Berger - Contact : contact@weberger.net.
					</p>
					<p>
						<span className="font-semibold">Délégué à la protection des données:</span> Bryan Berger - contact@weberger.net
					</p>
					<p>
						<span className="font-semibold">Hébergeur:</span> Vercel Inc. 440 N Barranca Ave #4133 Covina, CA 91723
					</p>
				</div>
				<div>
					<h2 className="text-3xl font-semibold mb-4">2 - Propriété intellectuelle et contrefaçons.</h2>
					<p className="mb-2">
						<span className="mr-1">Le code source du site web est sous</span>
						<Link
							className="text-blue-500 hover:underline"
							href="https://github.com/BryanBerger98/bryanberger.dev/blob/main/LICENSE.txt"
							target="_blank"
						>Licence MIT
						</Link>.
					</p>
					<div className="p-4 rounded-md flex flex-col gap-3 bg-slate-100 max-w-[700px] text-justify">
						<p>
							La permission est accordée, gratuitement, à toute personne obtenant une copie
							de ce logiciel et des fichiers de documentation associés (le &ldquo;Logiciel&rdquo;), de traiter
							dans le Logiciel sans restriction, y compris sans limitation les droits
							pour utiliser, copier, modifier, fusionner, publier, distribuer, sous-licencier et/ou vendre
							des copies du Logiciel, et de permettre aux personnes auxquelles le Logiciel est
							meublé pour le faire, sous réserve des conditions suivantes:
						</p>

						<p>
							L&apos;avis de droit d&apos;auteur ci-dessus et cet avis de permission doivent être inclus dans tous les
							copies ou parties substantielles du Logiciel.
						</p>

						<p>
							LE LOGICIEL EST FOURNI &ldquo;TEL QUEL&rdquo;, SANS GARANTIE D&apos;AUCUNE SORTE, EXPRESSE OU
							IMPLICITE, Y COMPRIS MAIS SANS S&apos;Y LIMITER LES GARANTIES DE QUALITÉ MARCHANDE,
							D&apos;ADAPTATION À UN USAGE PARTICULIER ET D&apos;ABSENCE DE CONTREFAÇON. EN AUCUN CAS LE
							AUTEURS OU LES TITULAIRES DES DROITS D&apos;AUTEUR NE SERONT RESPONSABLES DE TOUTE RÉCLAMATION, DOMMAGES OU AUTRE
							RESPONSABILITÉ, QUE CE SOIT DANS UNE ACTION DE CONTRAT, DE DÉLIT OU AUTREMENT, DÉCOULANT DE,
							HORS OU EN RELATION AVEC LE LOGICIEL OU L&apos;UTILISATION OU D&apos;AUTRES TRANSACTIONS DANS LE LOGICIEL.
						</p>
					</div>
				</div>
				<div>
					<h2 className="text-3xl font-semibold mb-4">3 - Limitations de responsabilité.</h2>
					<p>
						<span className="mr-1">Bryan Berger ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site</span><Link href="https://bryanberger.dev">https://bryanberger.dev</Link>.
					</p>
					<p>
						<span className="mr-1">Bryan Berger décline toute responsabilité quant à l&apos;utilisation qui pourrait être faite des informations et contenus présents sur</span><Link href="https://bryanberger.dev">https://bryanberger.dev</Link>.
					</p>
					<p>
						<span className="mr-1">Bryan Berger s&apos;engage à sécuriser au mieux le site</span><Link href="https://bryanberger.dev">https://bryanberger.dev</Link><span>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</span>
					</p>
					<p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Bryan Berger se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p>
					<p>Le cas échéant, Bryan Berger se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l&apos;utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
				</div>
				<div>
					<h2 className="text-3xl font-semibold mb-4">4 - CNIL et gestion des données personnelles.</h2>
					<p>
						<span className="mr-1">À ce jour, le site</span>
						<Link href="https://bryanberger.dev">https://bryanberger.dev</Link>
						<span>ne prélève aucune donnée de ses utilisateurs.</span>
					</p>
					{ /* <p>
					<span className="mr-1">Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l&apos;utilisateur du site</span><Link href="https://bryanberger.dev">https://bryanberger.dev</Link><span> dispose d&apos;un droit d&apos;accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Bryan Berger - contact@weberger.net.</span>
				</p>
				<p>
					<span className="mr-1">Pour plus d&apos;informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre</span><Link href="https://bryanberger.dev/legal-notice">https://bryanberger.dev/legal-notice</Link>.
				</p> */ }
				</div>
				<div>
					<h2 className="text-3xl font-semibold mb-4">5 - Liens hypertextes et cookies.</h2>
					<p>
						<span className="mr-1">Le site</span>
						<Link href="https://bryanberger.dev">https://bryanberger.dev</Link>
						<span>contient des liens hypertextes vers d&apos;autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d&apos;autres sites vers</span>
						<Link href="https://bryanberger.dev">https://bryanberger.dev</Link>.
					</p>
					<p>
						<span className="mr-1">La navigation sur le site</span>
						<Link href="https://bryanberger.dev">https://bryanberger.dev</Link>
						<span>est ne provoque l&apos;installation d&apos;aucun cookie sur l&apos;ordinateur de l&apos;utilisateur.</span>
					</p>
					{ /* <p>
					<span className="mr-1">La navigation sur le site</span>
					<Link href="https://bryanberger.dev">https://bryanberger.dev</Link>
					<span>est susceptible de provoquer l&apos;installation de cookie(s) sur l&apos;ordinateur de l&apos;utilisateur.</span>
				</p> */ }
					{ /* <p>
					<span className="mr-1">Un &ldquo;cookie&rdquo; est un fichier de petite taille qui enregistre des informations relatives à la navigation d&apos;un utilisateur sur un site. Les données ainsi obtenues permettent d&apos;obtenir des mesures de fréquentation, par exemple.</span>
				</p>
				<p>
					Vous avez la possibilité d&apos;accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
				</p>
				<p>
					Les cookies sont enregistrés pour une durée maximale de 6 mois.
				</p>
				<p>
					Pour plus d&apos;informations sur la façon dont nous faisons usage des cookies, lisez notre <Link href="https://bryanberger.dev/legal-notice">https://bryanberger.dev/legal-notice</Link>.
				</p> */ }
				</div>
				<div>
					<h2 className="text-3xl font-semibold mb-4">6 - Droit applicable et attribution de juridiction.</h2>
					<p>
						<span className="mr-1">Tout litige en relation avec l&apos;utilisation du site</span>
						<Link href="https://bryanberger.dev">https://bryanberger.dev</Link>
						<span>est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</span>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default LegalNoticePage;