# Projekt idé: Hacking Royale : There can only be one

## Gruppe info: 
Gruppe 4

Mathias B.
Stanislav
Alexander
Mikkel Emil L.

## Projekt ide:
    Lav en hjemmeside, der progressivt har nogen huller (i stigende sværhedsgrad), med supplerede hints, som er baseret på OWASP top 10.
    Endgoal ville være at man skulle slette alt på databasen, (business impact).
    (Lav en forklaring på hvordan man kunne lappe diverse huller)

### Ideer til opgaver: 
- Broken Access Control for at komme ind steder der ikke er til brugeren
- SQL injection, for at finde oplysninger om database og tilsidst slette alt info
- Sensetive data exposure, ved at kunne finde nogen passwords
- Bruteforce hashede values ved at vi har password i top 10 passwords 


## Del 1 SQL Injection / Broken Access Control / Security Misconfiguration
- Login side, her skal det være muligt at oprette sig som bruger, og derved komme ind til en side til almindelige brugere, hvori brugerne kan søge efter andre brugere. 



## Del 2 Command Injection
- En side med en "DNS lookup" hvor man kan søge en url og få lidt oplysninger om denne


## Del 3 Insecure Deserialization / Code Injection / Using components with known vulnerabilities
- Simpel side, der returnere en cookie, formålet er at slukke serveren, med et serialized object som indeholder oplysninger om en user.


# (MULIGVIS)
## Del 4 Presentation af Command Injection via deserialized backdoor
- Oprette en backdoor i en applikation
- bruge netcat til at forbinde til backdoor og eksekvere commandlines.
