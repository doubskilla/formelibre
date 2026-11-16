# Forme Libre — Direction et règles de design

Version 1 — 5 novembre 2026

## 1. Périmètre et statut

Page d’accueil uniquement, en français. Projet fictif de mobilier contemporain personnalisable fabriqué à Dakar, showroom à Ouakam. Priorité au frontend, à la qualité visuelle et au mobile. Aucun paiement, calcul de devis ou traitement réel des demandes.

Ce document conserve les choix du travail d’idéation. Il ne demande pas de refaire les maquettes ou d’ajouter une étape au workflow. Les nouvelles consignes du créateur priment sur ce document.

- Direction retenue : premier hero, version allégée avec cartouche de prix raffiné.
- Collection : composition asymétrique validée ; CTA final à présenter comme un bouton.
- Personnalisation : dernière piste typographique, explorée en desktop et mobile ; base de travail poursuivie ensuite, sans validation finale explicite.
- Commande : frise en trois étapes, base retenue pour poursuivre.
- Showroom : version « Voyez. Touchez. Prenez place. », explicitement validée, puis adaptée au mobile.
- Contact et footer : dernière proposition, pas encore explicitement validée.
- Couleurs exactes, polices et animations ci-dessous : spécifications proposées pour traduire les images en code, pas des valeurs déjà approuvées.
- Le créateur dispose de photos de produits et d’un logo : intégrer ses fichiers en priorité après réception. Ne pas les remplacer arbitrairement par les visuels de concept.

## 2. Intention

Chaleureux, contemporain, tactile et accessible. La personnalité vient des compositions asymétriques, des images intégrées au texte, de la typographie et de la photographie. Garder peu d’informations simultanément visibles.

Éviter : grilles uniformes partout, cartes bordées systématiques, badges décoratifs, ombres fortes, répétition de CTA, effets sans rapport avec le produit. Ne pas reprendre la piste du showroom avec porte, ni les hero olive ou jaune, ni leur synthèse.

## 3. Références visuelles locales

Les images servent à guider la composition. Ne pas intégrer une capture de maquette comme une section du site : recréer texte, liens et composants en HTML/CSS et extraire/préparer des médias sans interface.

| Section | Image de référence |
| --- | --- |
| Hero retenu | [Desktop](generated_images/exec-9acb20f7-f3f5-4c39-82ad-4707b608f965.png) |
| Collection asymétrique | [Desktop](generated_images/exec-412f953b-cdf4-408a-aa3b-0325551fe61f.png) |
| Personnalisation typographique | [Desktop](generated_images/exec-63445ca2-5c89-4f3f-b245-90d8a4401b0a.png) · [Mobile](generated_images/exec-8c4c820a-f899-416a-ad59-532466ffce0f.png) |
| Commande | [Desktop](generated_images/exec-f45b6800-69b4-4466-8325-77237a0f8c2c.png) |
| Showroom retenu | [Desktop](generated_images/exec-42238e04-37de-4e16-84e4-521cfe86ea4d.png) · [Mobile](generated_images/exec-07d305ff-1f6f-4422-bd4a-e288f23f2eb2.png) |
| Contact et footer proposés | [Desktop](generated_images/exec-e68e0ac4-68ec-4963-a401-df1834f23b08.png) |

Ces chemins sont relatifs à ce document. Les préserver ou les actualiser si le projet est déplacé.

## 4. Tokens proposés

### Couleurs

| Usage | Valeur de départ |
| --- | --- |
| Fond principal écru | `#F6F1E9` |
| Surface ivoire / cartouche | `#FFF8ED` |
| Texte et boutons espresso | `#382416` |
| Texte secondaire | `#705C4D` |
| Filets décoratifs | `#D3C3B2` |
| Bordures de champs | `#8A7461` |
| Fond footer | `#352116` |

Rouille et olive apparaissent surtout dans les photographies. Pas de dégradé ajouté pour imiter le grain des images générées. Vérifier les contrastes effectifs lors de l’intégration ; les filets décoratifs ne servent pas de seule limite à un contrôle interactif.

### Typographie

Paire de départ proposée : **DM Sans** pour texte, navigation et titres sans empattements ; **DM Serif Display Italic** pour les mots expressifs et certains montants. Vérifier licences, disponibilité des fichiers et rendu réel avant adoption. Deux familles maximum, hébergement local si possible.

- Corps : 17–20 px desktop, 16–18 px mobile ; interligne 1,45–1,6.
- Texte secondaire : 14–16 px ; ne pas réduire pour faire tenir une composition.
- Hero : environ 64–96 px desktop, 38–52 px mobile, ajustés au texte et au conteneur.
- Titres de section : 48–72 px desktop, 32–44 px mobile.
- Personnalisation typographique : 64–112 px desktop, 30–38 px mobile.
- Titres de produits : 24–32 px desktop, 22–26 px mobile.
- Italique réservé aux expressions clés ; pas de mélange aléatoire des polices.
- Les tailles sont fluides ; ne pas reproduire les dimensions brutes des captures générées.

### Géométrie

- Conteneur de départ : largeur maximale 1440 px, marges 48–64 px desktop, 20–24 px mobile.
- Espaces : échelle 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- Entre sections : environ 96–144 px desktop, 64–88 px mobile ; ajuster visuellement le rythme global.
- Gouttières : 32–48 px desktop ; 20–24 px mobile.
- Images : rayons 12–20 px. Vignettes intégrées aux mots : 16–24 px.
- Boutons : hauteur minimale 48 px, rayon 12 px ; pilule possible dans la navigation uniquement.
- Ombre réservée au cartouche du hero, très légère. Grilles produit sans fond de carte ni ombre.

## 5. Structure et contenus

### 01 — Hero

- Logo fourni à gauche ; navigation vers Les modèles, Personnalisation, Le showroom ; CTA « Demander un devis ».
- H1 : « Faites place à votre façon de vivre. »
- Mot « votre » en italique avec petit détail de tissu intégré à la composition.
- Phrase : « Canapés et fauteuils personnalisables, fabriqués à Dakar. »
- CTA : « Découvrir les modèles » (libellé du visuel retenu).
- Photo Soma à droite. Cartouche ivoire dans l’image : SOMA / À partir de / 390 000 FCFA.
- Pas de bandeau de réassurance ni de légende supplémentaire sous la photo.

### 02 — Collection

- Titre : « À chacun sa place. » avec une petite image de matière intégrée.
- Soma en grand à gauche ; Ligne et Angle en formats horizontaux à droite, décalés verticalement.
- Par produit : image, nom, prix de départ, flèche discrète. Aucune description ni série de boutons « Découvrir ».
- Images/cartes prévues comme entrées vers les détails, sans imposer leur développement à ce stade.
- CTA unique en bas : **bouton « Voir les 9 modèles »**, et non lien souligné comme sur la maquette.
- Les autres modèles restent hors de la composition initiale ; leur éventuelle révélation sera traitée au frontend.

### 03 — Personnalisation

- Introduction : « Le modèle vous plaît. »
- Trois lignes typographiques alternant mots et images :
  - « Votre espace. » + croquis cohérent du modèle.
  - Image des tissus + « Votre matière. » (matière en italique).
  - « Vos finitions. » + détail de couture/pied.
- Bouton : « Parlons de mes envies ».
- Mention : « Personnalisation selon les possibilités de chaque modèle. »
- Ne pas supposer une compatibilité de toutes les options avec tous les produits.

### 04 — Commande

- Titre : « De votre idée à votre salon. »
- Frise sobre, trois étapes avec numéros 01–03, petits points et ligne fine.
- **Votre projet** : « Un modèle, vos dimensions, vos envies. Nous échangeons pour préparer votre devis. »
- **Les détails validés** : « Nous confirmons les options et le devis. Un acompte de 60 % est demandé après acceptation. »
- **La fabrication** : « Généralement 3 à 5 semaines après validation de la commande, selon le produit et les matériaux. »
- Note : « Livraison principalement dans la région de Dakar. Autres villes étudiées au cas par cas. »
- Aucun CTA supplémentaire.

### 05 — Showroom

- Repère : « Le showroom · Ouakam, Dakar ».
- Titre : « Voyez. Touchez. Prenez place. » avec « Touchez » en italique.
- Composition asymétrique : titre au-dessus de la vue d’assise à gauche ; gros plan de mains comparant des tissus à droite, suivi du texte et du bouton.
- Texte : « Essayez les assises. Comparez les matières. Parlons de votre intérieur. »
- Bouton : « Demander un rendez-vous ».
- Mention : « Ouakam, Dakar · Rendez-vous conseillé ».
- L’image doit montrer l’utilité de la visite. Pas de mise en scène de porte ou d’architecture monumentale.

### 06 — Contact et footer (proposition à conserver comme base)

- Titre : « Et chez vous ? »
- « Un modèle en tête, une envie à préciser ? » / « Nous préciserons les détails ensemble. »
- Choix Un devis / Une visite ; nom ; téléphone ou e-mail ; modèle facultatif ; projet.
- Devis : « Envoyer ma demande de devis ». Visite : « Envoyer ma demande de visite ».
- Démonstration visible : aucune demande réellement envoyée. Ne pas afficher une confirmation d’envoi réel.
- Footer espresso : logo, liens internes, phrase de marque et mention du projet fictif NextStep.
- Pas de coordonnées, horaires, avis, statistiques ou liens sociaux inventés.

## 6. Mobile

- Conception adaptée, pas réduction homothétique de la maquette desktop.
- Hero en une colonne ; titre et CTA lisibles, image et prix à proximité. Vérifier la hauteur totale sans forcer tout dans un seul écran.
- Collection : lecture Soma, Ligne, Angle. Images généreuses, nom et prix proches ; aucun détail essentiel uniquement au survol.
- Personnalisation : lignes de deux colonnes compactes, texte sur deux lignes et image alternée ; empiler davantage si nécessaire sur les écrans très étroits.
- Frise commande verticale.
- Showroom : titre, photo d’assise, cadrage horizontal plus court des mains et tissus, texte, bouton pleine largeur.
- Contact : titre puis formulaire, champs en une colonne.
- Navigation mobile compacte et accessible ; aucun débordement horizontal.
- Points de départ de breakpoints : 640 et 1024 px ; les adapter aux collisions de contenu observées.
- Vérifications ciblées : 360, 390, 768, 1024 et 1440 px, avec zoom et longs libellés.

## 7. Composants et états

Centraliser boutons, conteneurs, titres, cartes produit, médias, champs et filets pour garantir leur cohérence.

- Boutons principaux : fond espresso, texte ivoire, flèche cohérente, aucun changement de taille au survol.
- Liens d’ancrage : destinations prévisibles ; ne pas déclencher une demande ou une réservation réelle.
- Cartes produit : une zone cliquable principale accessible, nom explicite. Détails hors périmètre tant qu’ils ne sont pas demandés.
- États à prévoir au codage : hover, focus-visible, actif, erreurs de formulaire si validation locale implémentée.
- Cibles tactiles d’au moins 44 × 44 px ; focus visible ; libellés permanents des champs.
- Textes alternatifs factuels sur les produits ; images purement décoratives avec alternative vide.
- Un seul H1, hiérarchie sémantique indépendante de la taille des caractères.

## 8. Mouvement — propositions, à régler sur le site

- Apparitions courtes : opacité et translation de 12–20 px, environ 450–650 ms ; contenu visible par défaut si JS échoue.
- Hero : arrivée légère du titre et de la photo, sans défilement bloqué ni écran de chargement décoratif.
- Collection : léger zoom photo au survol (maximum 1,025) et déplacement de flèche de 3–4 px ; pas de déplacement de la carte.
- Personnalisation : apparition des trois lignes dans l’ordre, décalage de 80–120 ms maximum ; maintenir texte et image ensemble.
- Frise : dessin subtil facultatif ; ne jamais retarder la lecture des étapes.
- Showroom : révélation sobre, pas de porte animée ou de parallaxe prononcée.
- Boutons : transitions couleur 160–220 ms.
- Respecter `prefers-reduced-motion` ; privilégier l’instantané ou un fondu simple. Aucun contenu essentiel dépendant d’une animation.

## 9. Assets et données

À recevoir : logo (SVG idéalement, PNG transparent possible), images produit, nom du modèle correspondant à chaque image, vues ou détails disponibles. Demander uniquement l’association manquante si les noms de fichiers sont ambigus.

- Les visuels de produit du créateur priment sur les sofas illustratifs des maquettes. Adapter le recadrage et les détails matière à ces vrais assets.
- Préserver silhouettes, couleurs, coutures et pieds entre les vues d’un même modèle.
- Logo : respecter proportions, marges de protection et variantes fournies. Le mot-symbole des maquettes est provisoire.
- Exporter les médias web en AVIF/WebP avec variantes de taille ; préserver sources originales.
- Utiliser `aspect-ratio`, largeur/hauteur explicites et recadrage réglé par image.
- Charger le hero prioritairement ; différer les images sous la ligne de flottaison.
- Éviter de réutiliser partout la même vue de Soma : varier les angles et les détails cohérents.

| Modèle | Prix de départ |
| --- | ---: |
| Soma | 390 000 FCFA |
| Ligne | 580 000 FCFA |
| Angle | 890 000 FCFA |
| Horizon | 1 250 000 FCFA |
| Conversation | 1 450 000 FCFA |
| Modulo | 1 650 000 FCFA |
| Noma | 220 000 FCFA |
| Pivot | 350 000 FCFA |
| Volume | 420 000 FCFA |

Toujours conserver la qualification « À partir de ». Ne pas créer de dimensions, tissus disponibles, avis ou promesses non définis dans le brief.

## 10. Critères de fidélité avant livraison frontend

- Hero conforme à la version allégée, prix dans son cartouche.
- Collection asymétrique et informations minimales ; CTA de collection sous forme de bouton.
- Rythme distinct pour chaque section ; pas de retour à une succession de cartes uniformes.
- Cohérence de couleurs, polices, arrondis et photographies.
- Logo et assets fournis réellement intégrés ; pas de remplacement silencieux.
- Lisibilité et recadrages contrôlés sur mobile ; aucun débordement.
- Boutons correctement nommés, clavier utilisable, réduction du mouvement respectée.
- Démonstration frontend clairement identifiée, aucune fausse confirmation de demande.
- Comparaison visuelle avec les références, sans nouvelle génération de page complète imposée.

## Ajustement navigation — 5 novembre 2026

En-tête sur trois colonnes : identité à gauche, liens centrés, CTA à droite. Le CTA reprend la forme du bouton du hero (rayon 11 px, hauteur 54 px desktop et 50 px mobile). Le fichier original du logo est toujours attendu ; conserver le nom typographique temporaire sans inventer de symbole.

## Navigation responsive — mise à jour

Logo préparé sur fond transparent, à gauche du nom. Sur grand écran (1180 px et plus) : Les modèles, Personnalisation, Le showroom et CTA devis. En dessous : identité et bouton hamburger sans texte visible, avec nom accessible. Panneau superposé avec les trois entrées, devis, fermeture par bouton, Échap et clic extérieur. Les panneaux informatifs restent provisoires, les sections de page ne sont pas encore développées.

## Menu compact — 7 novembre 2026

Sur mobile et tablette (<1180 px), petit panneau écru aligné à droite sous l’icône hamburger, superposé au hero sans déplacer son contenu. Largeur 280 px mobile et 320 px tablette, bornée à la largeur disponible ; hauteur intrinsèque d’environ 232 px. Trois liens sans séparateurs, texte 17 px mobile / 18 px tablette, zones tactiles d’au moins 46 px. Bouton devis de 46 px minimum, rayon 11 px comme celui du hero. Panneau sans contour, rayon 14 px et ombre légère. Ouverture et fermeture à 320 ms par translation de 8 px avec fondu ; icône passant de hamburger à croix, sans texte visible. Échap, clic extérieur et bouton bascule ferment le panneau. Menu fermé inert et aria-hidden ; préférence mouvement réduit respectée. Défilement interne uniquement si la hauteur disponible est insuffisante.

## Collection intégrée — 7 novembre 2026

Composition asymétrique reprise de la maquette validée, avec les photographies produits fournies : fichier 2 pour Soma beige, fichier 6 pour Ligne olive et fichier 3 pour Angle beige (association d’après leurs silhouettes et le brief). Les originaux restent dans les pièces jointes ; versions WebP 1280 et 640 px dans assets. Titre avec détail de tissu, trois images, noms et prix de départ, bouton unique « Voir les 9 modèles ». Deux colonnes sur desktop et tablette ; lecture verticale Soma, Ligne, Angle sur mobile. Les liens « Les modèles » et le CTA du hero mènent à #modeles. Apparition 600 ms au premier passage dans le viewport, zoom au survol limité à 1,025, préférence mouvement réduit respectée. Panneaux produits et liste des neuf modèles uniquement en démonstration frontend.

## Texte et mouvement de collection — ajustement

Phrase ajoutée sous le titre : « Des assises à personnaliser, pour trouver votre place. » Texte secondaire 18 px desktop/tablette, 16 px mobile. Apparition renforcée à 850 ms sur 30 px, déclenchée à 18 % de visibilité avec une marge basse de 40 px. Les éléments initialement hors écran attendent leur entrée ; un focus clavier les révèle également. Réduction du mouvement respectée.

## Personnalisation intégrée — 7 novembre 2026

Section #personnalisation après la collection : « Le modèle vous plaît. », puis trois lignes associant texte et image. Alternance Votre espace / croquis, matières / Votre matière (italique), Vos finitions / détail du pied et revêtement Soma. Disposition mobile et tablette spécifique : texte sur deux lignes sur mobile, image sur l’autre moitié. CTA unique « Parlons de mes envies », mention de compatibilité des options sous le bouton. Croquis généré à partir de la photo Soma fournie et tissus d’inspiration générés comme médias indépendants ; finition issue de la photo originale par cadrage CSS, aucune maquette incorporée comme section. Chaque ligne apparaît avec ses médias à 850 ms, ouverture subtile du cadre image à 950 ms, réduction du mouvement respectée. Navigation Personnalisation liée à cette section ; CTA vers le formulaire frontend existant.

## Personnalisation — titre et mouvement affinés

Titre renforcé : « Le modèle vous plaît. Faites-le vôtre. », 34–40 px mobile et 46–64 px desktop/tablette. Phrase : « Dimensions, matières, finitions : explorons ensemble les possibilités pour votre intérieur. » Croquis remplacé par un dessin au trait plus contrasté, lignes de construction sans mesures inventées. Cadrage du pied et tissu resserré. Révélation des duos sur 900 ms ; ouverture de l’image sur 1000 ms après chargement. Déclenchement effectif à 24 % de visibilité. En accès par le menu ou l’ancre directe, attente de la fin du défilement puis remise en jeu des animations de cette section. Réduction du mouvement et accès clavier pris en compte ; contenus visibles si JavaScript indisponible.

## Commande intégrée — 10 novembre 2026

« De votre idée à votre salon. » : frise en escalier sur desktop/tablette, grands numéros éditoriaux 01–03 et tracé fin reliant les étapes. Votre projet ; Les détails validés (acompte 60 % après acceptation) ; La fabrication (généralement 3 à 5 semaines, selon le produit et les matériaux). Mise en page verticale mobile avec ligne animée par étape. Texte et conditions du brief conservés, note livraison Dakar/autres villes, aucun CTA supplémentaire. Révélation au défilement à 24 % de visibilité, tracé 1600 ms desktop et 1100 ms mobile ; réduction du mouvement respectée.

## Collection — macro et fidélité des images

Vignette matière remplacée par une photographie macro rouille indépendante (couture et courbe d’accoudoir), rapprochée du titre ; suppression du grossissement CSS à 480 % de la petite image de canapé. Photos produits réexportées en WebP sans perte depuis les JPEG originaux (pixels décodés identiques). Sur desktop/tablette, utilisation forcée de la source complète 1280 px ; variantes responsive conservées sur mobile. La définition native des photos demeure 1280 × 853 : aucun agrandissement artificiel ni détail produit inventé.

## Cohérence typographique et médias — révision

Les titres H2 collection, personnalisation et commande partagent DM Sans 500, taille clamp(42px,4.6vw,64px) desktop/tablette et clamp(36px,9.4vw,42px) mobile, interligne 1,08. Les libellés de personnalisation restent secondaires (34–52 px desktop, 27–34 px mobile), dans la même famille. Le H1 conserve sa hiérarchie propre. Croquis sur fond transparent, détail de pied et couture remplacé par un vrai visuel rapproché sans zoom CSS. Photos des trois produits restaurées par génération fidèle à leurs sources ; nouveaux fichiers responsives, modèle et couleur conservés autant que possible. Photo Soma présentée à son ratio complet 3:2 pour éviter le grossissement dû au recadrage.

## Personnalisation — planche d’atelier, 11 novembre 2026

À partir de 761 px, composition validée en trois colonnes : croquis à gauche, matières au centre dans une colonne 20 % plus large, finition à droite. Visuels de même hauteur et intitulés alignés sous les images ; intitulés en DM Sans 400, sans gras. Le titre principal passe en DM Sans 700 à la demande du client ; introduction sous le titre, alignée à gauche. Sur tablette, hauteurs, gouttières et libellés s’adaptent pour garder les trois colonnes lisibles. CTA centré sous l’ensemble. Aucune modification de la composition, des styles ou des médias mobiles (760 px et moins). Les animations existantes et la préférence de mouvement réduit sont conservées.

## Vignette collection — 11 novembre 2026

Le cadre à côté de « À chacun sa place » reprend les dimensions, proportions et rayons de la vignette du hero selon chaque largeur d’écran. Le détail rouille est remplacé par une macro dédiée de tissu olive et de bois, inspirée du canapé Ligne, pour éviter la répétition du hero. Cette demande concerne aussi la collection mobile ; la personnalisation mobile reste inchangée.

## Showroom — composition intégrée

Après la commande : « Votre prochain canapé mérite un essai. » en DM Sans 700, taille H2 commune. Introduction sous le titre, alignée à gauche : « Au showroom, prenez le temps de comparer le confort, les tissus et les dimensions. Nous vous accompagnons dans votre choix. Retrouvez-nous à Ouakam, Dakar, sur rendez-vous. » L’adresse et la mention du rendez-vous font partie du paragraphe ; aucun bloc d’information en bas à gauche de l’image. Grande photographie illustrative autonome, sans texte incorporé, exportée en WebP 768/1200/1774 px. Elle représente une ambiance du projet fictif et devra être remplacée par une vraie photo pour un showroom réel.

CTA « Planifier ma visite » sous la photographie, à droite sur desktop/tablette et pleine largeur sur mobile. Formulaire de démonstration explicite, aucune demande envoyée. Navigation « Le showroom » liée à #showroom sur tous les écrans. Ratio image 2,35 desktop, 1,9 tablette, 1,15 mobile avec cadrage privilégiant le canapé olive. Apparition 900 ms et ouverture douce du visuel 1200 ms après chargement ; mouvement réduit respecté. Les introductions collection, personnalisation, commande et showroom partagent désormais les variables --body-copy-size (18 px desktop/tablette, 16 px mobile) et --body-copy-leading (1,55).

## Transition commande / showroom — 12 novembre 2026

La structure existante de la commande est conservée : trois étapes décalées, numéros et tracé en escalier sur desktop/tablette, frise verticale mobile. Suppression complète de la mention de livraison isolée, sans la déplacer dans les étapes. Marge intérieure basse ramenée à 56 px desktop, 48 px tablette, 44 px mobile.

Showroom sur fond olive profond #343b2d en pleine largeur, avec texte et bouton ivoire #f5f1e9. Transition franche depuis le fond ivoire de la commande, sans séparateur ni dégradé ; alignements des contenus conservés. Fond étendu par ombre et découpe CSS sans élargir la mise en page. Introduction raccourcie : « Comparez le confort et les matières au showroom. Nous vous accompagnons dans votre choix à Ouakam, Dakar, sur rendez-vous. » Largeur de lecture limitée à 62ch, mêmes tailles de texte. Photographie, bouton, adaptations responsive et animations existantes conservés. Les autres fonds de section restent inchangés dans cette révision.

## Contact et pied de page — 12 novembre 2026

Enchaînement validé : showroom olive, contact ivoire, footer espresso. Contact #projet : « Quel canapé avez-vous en tête ? », paragraphe « Un modèle repéré, des dimensions à respecter ou simplement une idée : parlons de votre projet. », bouton unique « Demander mon devis » ouvrant le formulaire frontend de démonstration. Titre H2 DM Sans 700, taille commune ; texte 18 px desktop/tablette, 16 px mobile. Symbole du logo en ton discret à droite sur desktop/tablette, masqué sur mobile. Apparition de 900 ms, réduction du mouvement respectée.

Footer espresso #352317, identité et navigation ivoire, informations secondaires #d5c5b5. Logo, Les modèles, Personnalisation, Le showroom, localisation Ouakam/Dakar et rendez-vous. Aucun téléphone, e-mail ou lien social inventé : non fournis dans le brief. Dernière ligne : attribution au projet fictif NextStep, mentions expliquant le scénario de démonstration, retour en haut. Le footer remplace la barre de prototype et son bouton de rejeu. Trois colonnes desktop, deux colonnes tablette, empilement mobile. Navigation toujours visible sans attendre d’animation. Aucun backend ou envoi de formulaire ajouté.

## Contact photographique et footer XXL — révision validée

Cette révision remplace la composition de contact ivoire et le footer compact. Une photographie d’ambiance autonome (canapé beige, table en noyer, mur olive et rideaux) occupe toute la largeur de la section contact. Titre et texte ivoire à gauche, formulaire opaque ivoire à droite. Le formulaire est directement visible et comporte trois champs avec libellés permanents : Votre nom ; Téléphone ou e-mail ; Votre projet. Bouton « Demander mon devis ». Validation native, état de démonstration explicite, aucune transmission ni stockage des valeurs ; méthode dialog et interception de submit. Les appels de contact existants restent disponibles.

Sur tablette, deux colonnes avec espacement réduit. Sur mobile, titre et introduction sur une image haute de 410 px, puis formulaire sur ivoire sous l’image, champs à 16 px pour éviter le zoom automatique iOS. Dispositions précédentes des autres sections conservées. Photo en WebP 1536 et 768 px. Apparition douce existante, formulaire révélé lors du focus clavier et mode mouvement réduit respecté.

Footer espresso : véritable symbole fourni par le client, navigation horizontale et retour en haut, puis « forme libre. » en DM Sans 700 sur presque toute la largeur (20cqw, approche -0,065em). Le petit symbole inventé par la maquette générée n’est pas repris. Navigation empilée sur mobile ; signature conservée sur une ligne et dimensionnée selon le conteneur. Mentions et attribution au projet fictif en bas, sans répétition de localisation.


## Contact lié à la collection et navigation horizontale — correction du 12 novembre

Cette révision prévaut sur les deux descriptions précédentes du contact/footer. La photographie est créée à partir du canapé Ligne fourni : assise olive et piètement noyer, mise en scène sobre sans accessoires. Texte brun sur mur clair, photographie à gauche sur grand écran, formulaire ivoire à droite. Jusqu’à 1000 px (tablettes comprises), image et introduction au-dessus du formulaire, sans grands champs encadrés. Coordonnées sur deux colonnes dès 481 px dans cette disposition ; sur téléphone, une colonne.

Le formulaire commence par une sélection facultative des modèles Soma, Ligne et Angle (visuels du catalogue) et une option de conseil. Coordonnées sur lignes fines, demande libre facultative en deux lignes. Étiquettes permanentes, sélection et focus visibles, aucun envoi effectif. Les autres sections sont inchangées.

Les trois liens du footer restent horizontaux sur toutes les tailles. Sur mobile : symbole et retour en haut sur la première ligne ; Modèles, Personnalisation, Showroom sur la suivante ; signature XXL en dessous. Aucun empilement vertical des liens. Maintenir des cibles tactiles de 44 px et un espacement suffisant, sans débordement horizontal.
