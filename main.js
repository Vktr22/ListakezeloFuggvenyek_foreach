/* 
jelenítsük meg az adatainkat egy táblázatban az adatok div-ben,az urlap divben legyen egy űrlap,
amivel ilyen adatokat tudunk a táblázatba beletenni

1.) ha a táblázat név fejlécére kattintunk, akk azon mező szerint
tudjuk rendezni a táblázatot
2.) tudjuk törölni a táblázat adott sorát.
3.) legyen egy szűrőmező, ahova beírva szavakat tudunk szűrni név szerint.

Milyen függvények kellenek?

1. tablazatOsszeallit(lista)->txt /visszatérési értéke/ - összeállítja a html kódot egy szöveges formátumba
Mminden sor végén legyen egy kuka ((a lista a paramétere a txt a visszatérési értéke))
2. megjelenites(txt)->nincs - megjelenít egy html szöveget egy html elemben
3. tablazatbaTesz(lista) - összeszedi az ürlapadatokat és hozzáfűzi a listához, majd megjeleníti újra a
táblázatot. --akkor hívódik meg, ha a Submit gombra kattintunk
4. tablazatRendez() - adott mező szerint rendezi a táblázatot --akk fog meghívódni, ha a tábl név fejlécmezőjére kattintunk(ha megcsináljuk nem csak névre, akk 5-öst lehet kapni)
berendezzük a listát, és megjelenítjük újra a táblázatot
5. sorTorles(lista, index) - minden sor végén legyen egy kuka, az adott sor indexével,
erre a kukára kattintva töröljük az adott sort a listából,
és újra megjelenítjük a táblázatot a módosult listával.
6. szuresNevSzerint() - a szűrőbe írt szó alapján kilistázza azokat az adatokat a listából,
amelyekben szerepel a név mezőjébe az adott szó
*/