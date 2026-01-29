---
title: Introduction
description: Bienvenue à la Bibliothèque Magique
---

# Introduction : La Bibliothèque Magique

Bienvenue sur le **Site de Documentation Multi-Langues**. Ce projet n'est pas seulement un site web statique ; c'est une "Bibliothèque Magique" construite avec une architecture web moderne.

## Comment ça marche ?

### 1. Next.js (Le Bibliothécaire)

Next.js est le bibliothécaire intelligent. Quand quelqu'un visite votre site, il demande une page (comme "Introduction"). Le bibliothécaire court la chercher et la montre.

- **React** : Ce sont les **briques Lego** que le bibliothécaire utilise pour construire la page. Une brique est un bouton, une autre est la barre latérale.

### 2. Docker (La Boîte à Déjeuner Magique)

Normalement, si vous cuisinez un repas à la maison, il peut ne pas avoir le même goût chez un ami.
**Docker** est comme une **boîte à déjeuner magique**. Vous mettez toute votre cuisine (code) à l'intérieur. Maintenant, peu importe où vous ouvrez cette boîte (votre ordinateur, mon ordinateur ou internet), le site web a exactement la même apparence.

### 3. ISR (La Magie de la "Mise à Jour")

Cela signifie **Régénération Statique Incrémentielle**, ou la **"Photocopieuse"**.

- **Sans ISR** : Le bibliothécaire doit écrire la page à la main à chaque fois que quelqu'un la demande. Lent !
- **Avec ISR** : Le bibliothécaire fait une **photocopie** de la page et la donne à tout le monde. C'est super rapide !
- **Twist** : Toutes les 60 secondes, si vous changez le texte, le bibliothécaire fait une _nouvelle_ photocopie.

## Exemples du Monde Réel

### Centre d'Aide Netflix

Quand Netflix ajoute une nouvelle fonctionnalité, ils mettent à jour la page d'aide. Ils ne veulent pas reconstruire tout leur site (des millions de pages) juste pour une faute de frappe. Ils utilisent **ISR** pour corriger juste cette page instantanément.

### Documentation Stripe

Ces entreprises ont de la documentation dans plus de 30 langues. Elles utilisent **i18n** pour que `stripe.com/docs` affiche l'anglais, mais `stripe.com/fr/docs` affiche le français automatiquement.

## Fonctionnalités Clés

- **Internationalisation** : Contenu disponible en anglais, espagnol, français, allemand, japonais.
- **Recherche plein texte** : Propulsée par Fuse.js.
- **Référence API** : Intégration Swagger UI.
