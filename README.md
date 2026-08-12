# Sur papier

Une application pour mettre une décision par écrit et la voir en entier.

## À quoi ça sert

Certaines décisions ne bloquent pas par manque d'information. La personne sait
déjà ce qu'elle pourrait y gagner, et elle sait déjà ce qui la retient — mais
ces deux vérités ne se rencontrent jamais au même moment.

L'application pose cinq questions, la personne écrit ses réponses, et les cinq
réponses apparaissent ensuite ensemble sur une seule page.

Elle ne calcule rien, ne recommande rien, ne note rien. Elle ne pousse ni vers
l'action ni vers le statu quo : décider de ne rien faire, en connaissance de
cause, est un résultat aussi valable qu'accepter.

**Ce n'est pas un outil médical.** Elle ne remplace aucun avis professionnel et
ne donne aucune information sur les traitements.

## Les cinq questions

1. Qu'est-ce que ça pourrait m'apporter ?
2. Qu'est-ce qui me retient ?
3. Qu'est-ce que ça me coûterait, et pendant combien de temps ?
4. Où j'en serai dans deux ans si je ne fais rien ?
5. Qu'est-ce qui reste incertain pour moi ?

Les questions restées sans réponse s'affichent telles quelles sur la page
finale. Un blanc est une information.

## Utilisation

Ouvrir l'application, écrire une page, la relire. Ce qui est écrit s'enregistre
au fil de la frappe. La page peut être imprimée — pour l'emporter à une
consultation, par exemple.

Plusieurs pages peuvent coexister : une décision reconsidérée six mois plus tard
se relit à côté de ce qui avait été écrit la première fois.

## Où sont les données

Tout reste dans le navigateur de l'appareil (`localStorage`, préfixe
`surpapier_`). Rien n'est envoyé nulle part : pas de serveur, pas de compte,
pas de mesure d'audience, aucune requête réseau.

Conséquence : effacer les données du navigateur efface les pages.
« Enregistrer une copie » produit un fichier JSON à conserver ;
« Récupérer une copie » le relit. À faire avant toute réinitialisation
d'appareil.

## Installation sur un téléphone

- **iPhone (Safari)** : bouton Partager, puis « Sur l'écran d'accueil ».
- **Android (Chrome)** : menu ⋮, puis « Installer l'application ».

Une fois installée, elle fonctionne sans connexion.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | l'application entière |
| `manifest.json` | déclaration PWA |
| `service-worker.js` | fonctionnement hors ligne |
| `icon.png` | icône iOS (180 × 180) |
| `icon-192.png`, `icon-512.png` | icônes du manifest |

Tous les fichiers vont à la racine du dépôt. Aucune dépendance externe,
aucune étape de compilation.

## Mise à jour

Incrémenter `VERSION` dans `service-worker.js` à **chaque** modification,
sinon les appareils déjà installés continuent de servir l'ancienne version.

## Polices

Les polices ne sont pas embarquées : la mise en page utilise Atkinson
Hyperlegible et Fraunces si elles sont disponibles, et les polices du système
sinon. Pour figer le rendu, les intégrer en base64 dans `index.html`.

## Licence

CC0 1.0 Universel — voir le fichier `LICENSE`.

À reprendre, modifier et rebaptiser librement, sans citation ni autorisation.
Fourni sans aucune garantie.
