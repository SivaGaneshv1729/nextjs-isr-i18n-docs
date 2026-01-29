---
title: Einführung
description: Willkommen in der Magischen Bibliothek
---

# Einführung: Die Magische Bibliothek

Willkommen auf der **Mehrsprachigen Dokumentationsseite**. Dieses Projekt ist nicht nur eine statische Website; es ist eine "Magische Bibliothek", die auf moderner Webarchitektur basiert.

## Wie funktioniert es?

### 1. Next.js (Der Bibliothekar)

Next.js ist der schlaue Bibliothekar. Wenn jemand Ihre Website besucht, fragt er nach einer Seite (wie "Einführung"). Der Bibliothekar rennt los, holt sie und zeigt sie.

- **React**: Das sind die **Lego-Steine**, die der Bibliothekar benutzt, um die Seite zu bauen. Ein Stein ist ein Knopf, ein anderer die Seitenleiste.

### 2. Docker (Die Magische Brotdose)

Normalerweise, wenn Sie zu Hause kochen, schmeckt es bei einem Freund vielleicht anders.
**Docker** ist wie eine **magische Brotdose**. Sie legen Ihre ganze Küche (Code) hinein. Jetzt, egal wo Sie diese Dose öffnen (Ihr Computer, mein Computer oder das Internet), sieht die Website genau gleich aus.

### 3. ISR (Die "Update"-Magie)

Das steht für **Inkrementelle Statische Regenerierung**, oder der **"Fotokopierer"**.

- **Ohne ISR**: Der Bibliothekar muss die Seite jedes Mal von Hand schreiben, wenn jemand danach fragt. Langsam!
- **Mit ISR**: Der Bibliothekar macht eine **Fotokopie** der Seite und gibt sie jedem. Es ist super schnell!
- **Der Trick**: Alle 60 Sekunden, wenn Sie den Text ändern, macht der Bibliothekar eine _neue_ Fotokopie.

## Beispiele aus der Praxis

### Netflix Hilfe-Center

Wenn Netflix eine neue Funktion hinzufügt, aktualisieren sie die Hilfeseite. Sie wollen nicht ihre gesamte Website (Millionen von Seiten) nur für einen Tippfehler neu bauen. Sie nutzen **ISR**, um genau diese eine Seite sofort zu korrigieren.

### Stripe Dokumentation

Diese Firmen haben Dokumentation in über 30 Sprachen. Sie nutzen **i18n**, damit `stripe.com/docs` Englisch zeigt, aber `stripe.com/de/docs` automatisch Deutsch.

## Hauptmerkmale

- **Internationalisierung**: Inhalt verfügbar in Englisch, Spanisch, Französisch, Deutsch, Japanisch.
- **Volltextsuche**: Angetrieben von Fuse.js.
- **API-Referenz**: Swagger UI Integration.
