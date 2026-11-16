# Forme Libre

Site vitrine responsive de mobilier personnalisable, projet conceptuel NextStep.

## Lancer le site localement

Le projet est en HTML, CSS et JavaScript natifs. Aucun framework, installation npm ou étape de compilation n’est nécessaire. Les fichiers `dist/` sont les sources directement servies au navigateur.

Depuis le dossier du dépôt, avec Python 3 installé :

```bash
python3 -m http.server 8000 --directory dist
```

Sous Windows, si la commande précédente n’est pas disponible :

```powershell
py -m http.server 8000 --directory dist
```

Ouvrir http://localhost:8000. Arrêter le serveur avec Ctrl+C.

## Contenu

- `dist/index.html` : navigation, hero, collection, personnalisation, étapes du projet, showroom, contact et footer.
- `dist/style.css` : styles, dispositions ordinateur/tablette/mobile et animations.
- `dist/script.js` : navigation mobile, dialogues, interactions et formulaire de démonstration.
- `dist/reveal.js` : apparitions au défilement et gestion de la réduction des animations.
- `dist/assets/` : images, logo et polices locales.
- `design.md` : décisions de design et historique des révisions ; les révisions les plus récentes prévalent.

Le formulaire simule une prise de contact : aucun message ni commande n’est transmis. Aucun backend n’est nécessaire. Les contenus commerciaux appartiennent au scénario fictif.

## Travailler avec un agent de code

Ouvrir ce dossier avec Codex CLI ou un autre environnement de développement. Conserver les visuels et la mise en page existante sur ordinateur, tablette et mobile. Le site respecte `prefers-reduced-motion`.

Pour préparer une vidéo, lancer le serveur local, attendre le chargement des images et des polices, puis capturer la vraie page et ses animations avec un navigateur automatisé. Ne pas reconstruire l’interface dans les outils de montage. Les outils de capture et de montage ne sont pas inclus dans ce dépôt.

## Hébergement

Tout hébergeur de fichiers statiques peut servir le dossier `dist/`. Le paramétrage privé de la publication Sites et les identifiants d’accès ne sont pas nécessaires au lancement local et ne sont pas inclus dans cette copie.
