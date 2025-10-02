# Pràctica: Sistema de control de versions (Git Flow)

## Introducció

En esta pràctica s'ha utilitzat **Git** junt amb el flux de treball **Git Flow** per gestionar un projecte col·laboratiu.
Encara que és una pràctica individual, s'han simulat 3 usuaris diferents (Usuari 1, Usuari 2, Usuari 3) amb commits diferenciats.

---

## Configuració inicial

* Creació del repositori a GitHub.
* Inicialització de `git flow` amb branques principals `main` i `develop`.
* Invitació al col·laborador obligatori **antoni-gimenez**.

![Init](img/Captura1.png)

![Pantalla d'invitació de col·laborador](img/Captura2.png)

---

## Treball de l’Usuari 1

* Afegit l’estructura base: header, nav, home i footer.
* Commit inicial en la branca `develop`.

![Primer commit](img/Captura3.png)

![Primer push](img/Captura4.png)

---

## Treball de l’Usuari 2

### Feature: contingut HTML

* Creació de la branca `feature/contingutHTML`.
* Exemple amb `innerHTML` i `styles.css`.
* Merge a `develop`.

![Feature continguts](img/Captura5.png)

### Feature: atributs HTML

* Creació de la branca `feature/atributsHTML`.
* Exemple amb `setAttribute` i modificació de `script.js`.
* Merge a `develop`.

![Feature atributs](img/Captura6.png)

---

## Treball de l’Usuari 3

### Feature: estils CSS

* Creació de la branca `feature/estilsCSS`.
* Exemple de manipulació de classes amb `classList.toggle`.
* Merge a `develop`.

![Feature estils css](img/Captura7.png)

![Feature estils css](img/Captura8.png)

---

## Release v1.0

* Creació de la branca `release/1.0` amb `git flow`.
* Afegit `CHANGELOG.md`.
* Merge a `main` i `develop`.
* Creació de tag **v1.0**.

![Release Start](img/Captura9.png)

![Adds y commits release](img/Captura.png)

![Release finish](img/Captura10.png)

![Release Push](img/Captura11.png)

---

## Hotfix v1.0.1

* Creació de la branca `hotfix/milloresV_1_0`.
* Millora d’un exemple creat per l’Usuari 2.
* Merge a `main` i `develop`.
* Creació de tag **v1.0.1**.

![Hotfix start](img/Captura12.png)

![Hotfix](img/Captura13.png)

---

## Llistat de branques i tags

Per verificar l’estat final del repositori:

```bash
git branch -a
git tag -l
git log --graph --oneline --decorate --all
```

Aci hi ha una image de com quedaria el graph amb tots els commits, merge, rames, etc:

![Graph](img/Captura14.png)

---

## Conclusió

La pàgina web conté totes les seccions desenvolupades pels tres usuaris simulats.
S’han aplicat correctament els passos de **Git Flow**: features → release → hotfix.
