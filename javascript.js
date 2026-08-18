/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

const velkomstmelding = "Velkommen til dette kurset"
let alder = 44
let fullførtFørsteModul = true
let startetMedDisseKodespråkene = ["HTML", "CSS", "Javascript"]



/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

const totaltAntallUker = 52
let ukerFullført = 10

let ukerIgjen = totaltAntallUker - ukerFullført          // 52 - 10 = 42
let dagerGjennomført = ukerFullført * 5                  // 10 * 5 = 50
let dagerIgjen = (totaltAntallUker - ukerFullført) * 5   // (52 - 10) * 5 = 210

ukerFullført++ // Fullført en uke til, så legger til en uke. Resultatet blir 11.
ukerFullført-- // Trekker en uke fra igjen. Resultatet blir 10.
dagerGjennomført += 5 // Legger til fem nye dager. Resultatet blir 55.
dagerGjennomført -= 1 // Trekker en dag fra totalen. Resultatet blir 54.

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her
if (userName !== "" && userAge >= 18 && userIsBlocked === false) {userIsLoggedIn = true
    goToPage = "/home"
    console.log("Velkommen, " + userName + ("!") )
    } else {console.log("Du har ikke tilgang. Sjekk at navnet stemmer, at du er gammel nok, og om du har tilgangsrettigheter.")}


/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

let userMale = false;
llet userTitle = userMale === false ? "Mrs." : "Mr."
console.log(userTitle)   // "Mrs."
// Skriv koden for oppgave 5 her