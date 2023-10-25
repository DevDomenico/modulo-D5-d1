
//Cos’è ReactJS? (risposta aperta)

/*
ReactJS è una libreria JavaScript open-source sviluppata da Facebook per la creazione di interfacce utente (UI) dinamiche e reattive. 
Utilizza un approccio basato su componenti, in cui l'interfaccia utente è suddivisa in componenti riutilizzabili che possono essere facilmente composti 
per costruire applicazioni complesse.

Uno dei concetti chiave di React è il "Virtual DOM", che permette di ottimizzare gli aggiornamenti dell'interfaccia utente riducendo 
al minimo le manipolazioni dirette del DOM del browser.

React promuove la creazione di applicazioni web più manutenibili e scalabili, consentendo agli sviluppatori di gestire lo stato 
dell'applicazione in modo chiaro e di aggiornare dinamicamente l'interfaccia utente in risposta a eventi o dati in tempo reale. 
È molto popolare nella comunità di sviluppatori web ed è spesso utilizzato insieme ad altre tecnologie come JSX, Babel e Webpack 
per semplificare il flusso di lavoro di sviluppo.
*/


//ReactJS è un framework, non una libreria. (v/f)
//Falso

/*
Il file package.json contiene…
1) Informazioni non essenziali, può essere tranquillamente eliminato
2) Solamente il nome e la versione dell’applicazione
3) Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste dall’applicazione 
4) Il primo componente React caricato all’avvio
*/

// risposta: Molte informazioni utili, come ad esempio l’elenco di tutte le dipendenze richieste dall’applicazione 

//create-react-app è l’unico modo possibile per creare un’applicazione React (v/f)
/*

Falso. create-react-app è uno strumento popolare per avviare rapidamente un nuovo progetto React e configura un ambiente di sviluppo
 predefinito che semplifica l'inizio di un'applicazione React. Tuttavia, non è l'unico modo per creare un'applicazione React.
  Ci sono molte altre opzioni e approcci possibili per iniziare un progetto React:
*/

/*
Qual è il comando da lanciare nel terminale per creare una nuova create-react-app con nome “test”?
npx create-react-app test 
npm create-react-app test
npx create-react-app-test
npx create-new-react-app test
*/
//risposta: npx create-react-app test 

/*
Cos’è un componente React?
Una libreria che è necessario importare dentro l’applicazione
Una pagina ben specifica all’interno dell’applicazione
Un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione
Una landing page per l’applicazione

*/
// risposta: Un blocco di logica/contenuto riutilizzabile all’interno dell’applicazione

//Un componente React può venire creato in tre modi: come funzione, classe o interfaccia. (v/f)
/*riposta: Falso. In React, i componenti possono essere creati principalmente come funzioni o classi. 
Le interfacce, in senso tradizionale, non sono utilizzate direttamente per creare componenti React*/

/* Qual è la differenza tra componenti creati come funzione e componenti creati come classe?
I componenti creati come funzione sono più semplici da scrivere ma con meno funzionalità, mentre i componenti creati 
come classe necessitano in genere di un maggior numero di linee di codice ma possiedono più funzionalità.

I componenti creati come classe sono più semplici da scrivere ma con meno funzionalità, mentre i componenti creati come funzione
 necessitano in genere di un maggior numero di linee di codice ma possiedono più funzionalità.
 */

 /* Risposta:
 I componenti creati come classe sono più semplici da scrivere ma con meno funzionalità, mentre i componenti creati 
 come funzione necessitano in genere di un maggior numero di linee di codice ma possiedono più funzionalità.
 */

 /*Le props sono frammenti di informazione assegnati all’invocazione di un componente React, utili al fine di rendere il componente 
 dinamico e più riutilizzabile. (v/f)*/
 //risposta: vero

/*Le props possono essere passate solamente da un componente genitore ad un componente figlio, non è possibile fare il contrario (v/f)*/
/*Risposta: vero
In React, le props possono essere passate solo da un componente genitore a un componente figlio, e non il contrario.
 Le props rappresentano un meccanismo di comunicazione unidirezionale all'interno di un'applicazione React, in cui i dati vengono 
 trasmessi in basso nell'albero dei componenti, dal componente genitore ai componenti figli.*/

 /* Da dove possono venire recuperate le props all’interno di un componente React creato come classe?
Sono proprietà contenute in un oggetto accessibile attraverso i parametri della funzione
Possono essere recuperate all’interno dello oggetto ‘this’, dentro un sotto-oggetto chiamato ‘props’
Vengono applicate come proprietà dell’oggetto globale ‘window’
Vengono applicate come proprietà dell’oggetto ‘document’
*/

//risposta: Possono essere recuperate all’interno dello oggetto ‘this’, dentro un sotto-oggetto chiamato ‘props’