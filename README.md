# Package llms.txt — Into The Shift

## Fichiers inclus

- `llms.txt` : fichier principal à déposer à la racine du site.
- `llms-full.md` : version longue de référence pour les IA et les évolutions futures.
- `robots-llms-example.txt` : exemple de bloc à intégrer dans `robots.txt`.

## Où déposer les fichiers

Dépose `llms.txt` et `llms-full.md` à la racine du site, au même niveau que :

- `index.html`
- `home.html`
- `sitemap.xml`
- `robots.txt`

Ils doivent être accessibles ici :

- https://shiftstudio.intotheshift.io/llms.txt
- https://shiftstudio.intotheshift.io/llms-full.md

## Option recommandée dans le head HTML

Ajouter cette balise dans le `<head>` des pages principales :

```html
<link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs">
```

## Option robots.txt

Tu peux ajouter l'exemple fourni dans `robots-llms-example.txt` à ton `robots.txt` existant.

## À tester après mise en ligne

Ouvre directement :

https://shiftstudio.intotheshift.io/llms.txt

Si le fichier s'affiche en texte brut, c'est bon.
