# Board Game Tom

Application web statique (HTML/CSS/JS, sans build) déployée sur Netlify,
avec une fonction serverless pour l'envoi d'e-mails via Brevo.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Markup ; charge le CSS puis les deux JS |
| `styles.css` | Toutes les styles |
| `assets.js` | Données lourdes en base64 (cadres, avatars, fonds, emblèmes). À charger **avant** `app.js`. |
| `app.js` | Logique applicative (UI, rangs, Supabase, événements, e-mails) |
| `netlify/functions/send-email.js` | Relai serverless vers Brevo (garde la clé côté serveur) |
| `netlify.toml` | Config de déploiement Netlify |

> `assets.js` et `app.js` sont des `<script>` classiques chargés dans l'ordre :
> les `const` d'`assets.js` sont donc visibles depuis `app.js`.

## Aperçu en local

Ouvrir `index.html` suffit pour l'interface. En revanche l'envoi d'e-mails
ne fonctionne qu'une fois déployé (il dépend de la fonction Netlify).

## Déploiement (Netlify + GitHub)

1. Pousser ce dépôt sur GitHub.
2. Sur Netlify : **Add new site → Import from Git**, choisir le dépôt.
3. Réglages : *publish directory* = `.`, les fonctions sont détectées via `netlify.toml`.
4. Définir les variables d'environnement (voir ci-dessous), puis déployer.

## Variables d'environnement (Netlify → Site settings → Environment variables)

| Clé | Valeur |
|---|---|
| `BREVO_KEY` | la clé API Brevo (commence par `xkeysib-…`) |
| `BREVO_FROM` | l'adresse d'expédition vérifiée (`…@smtp-brevo.com`) |

Ces valeurs ne doivent **jamais** être committées dans le dépôt.

## Sécurité — à traiter

- **Clé Brevo** : l'ancienne clé a été exposée publiquement dans le code client.
  La révoquer dans Brevo, en générer une nouvelle, et mettre la nouvelle
  dans `BREVO_KEY` côté Netlify.
- **Mot de passe admin** : `ADMIN_PW` est encore en clair dans `app.js`, donc
  lisible par n'importe qui. À déplacer vers une vraie authentification
  (Supabase ou une fonction Netlify) — chantier séparé.
- La clé `anon` de Supabase est conçue pour être publique : pas d'action.
