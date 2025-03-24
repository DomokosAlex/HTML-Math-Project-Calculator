
function TenyGen(melyik) {

    const tenyek = [];

    switch (melyik) {
        case 1:
            const indextenyek = [
                "A nulla nem mindig létezett",
                "A prímszámok végtelenek",
                "Ha valamit kétszer 50%-kal csökkentünk, nem lesz 0%",

                "A háromszög szögeinek összege mindig 180",
                "Egy négyzet minden oldala egyenlő, és minden szöge 90°",
                "A Pitagorasz-tétel szerint a² + b² = c² egy derékszögű háromszögben",

                "A nehézségi gyorsulás a Földön átlagosan 9,81 m/s²",
                "A fény sebessége vákuumban 299 792 458 m/s",
                "Egy test tömege nem változik, de a súlya igen, ha más gravitációs térbe kerül"];

            indextenyek.forEach(e => {
                tenyek.push(e)
            });
            break;

        case 2:
            const altalmatteny = [
                "A nulla nem mindig létezett",
                "A római számokban nincs nulla",
                "A prímszámok végtelenek",

                "A 2 az egyetlen páros prímszám",
                "A százalék eredete a latin „per centum” kifejezésből jön",
                "Ha valamit kétszer 50%-kal csökkentünk, nem lesz 0%",

                "bármely számot nullával szorozva az eredmény nulla",
                "Az 1 nem prímszám",
                "A legnagyobb prímszám: A legnagyobb ismert prímszám 24,862,048 számjegyű."

            ];
            altalmatteny.forEach(e => {
                tenyek.push(e)
            });
            break;

        case 3:
            const gemetriatenyek = [
                "A háromszög szögeinek összege mindig 180",
                "Egy négyzet minden oldala egyenlő, és minden szöge 90°",
                "A Pitagorasz-tétel szerint a² + b² = c² egy derékszögű háromszögben",

                "A szabályos sokszög szögeinek összege (n - 2) * 180° ahol n az oldalak száma",
                "A háromszög külső szögeinek összege 360°",
                "A paralelogramma szemben lévő oldalai párhuzamosak és egyenlő hosszúságúak",

                "A téglalap minden szöge derékszög",
                "Egy szabályos sokszög minden szöge egyenlő",
                "A geometriában a rombusz olyan négyszög, melynek minden oldala egyenlő hosszú"

            ];

            gemetriatenyek.forEach(e => {
                tenyek.push(e)
            });
            break;
        case 4:
            const fizikateny = [
                "A nehézségi gyorsulás a Földön átlagosan 9,81 m/s²",
                "A fény sebessége vákuumban 299 792 458 m/s",
                "Egy test tömege nem változik, de a súlya igen, ha más gravitációs térbe kerül",

                "0,1-0,2 A (100-200 mA) feletti áramok már halálosak lehet",
                "Newton 1. törvénye: Egy test mozgása nem változik, ha nem hat rá külső erő",
                "Newton 2. törvénye: A test gyorsulása arányos a rá ható erővel, és fordítottan arányos a test tömegével",

                "Newton 3. törvénye: Minden erőnek van egy vele ellentétes irányú és egyenlő nagyságú hatása",
                "Zérus hőmérséklet: A nulla Kelvin (−273,15°C) az abszolút nulla hőmérséklet, ahol minden molekuláris mozgás megszűnik.",
                "Ohm törvénye: Az áramkörben az áram (I) egyenesen arányos a feszültséggel (V), és fordítottan arányos az ellenállással (R)."

            ];

            fizikateny.forEach(e => {
                tenyek.push(e)
            });
            break;

        case 5:
            const trigteny = [
                "A szög szinusza egyenlő a háromszög szemközti oldalának és az átfogónak az arányával.",
                "A szög koszinusza egyenlő a háromszög melletti oldalának és az átfogónak az arányával",
                "A szög tangensza egyenlő a szemközti oldal és a melletti oldal arányával",

                "Egy háromszögben, ha ismerjük két oldal hosszát és a köztük lévő szöget, akkor kiszámolhatjuk a harmadik oldal hosszát.",
                "A nevezetes szögek a trigonometria alapvető szögei, amelyeket gyakran használnakPL: (0, 30, 45, 60, 90)",
                "Koszinusz, szinusz, tangens függvény periodikus. A függvények értékei egy bizonyos időintervallum után ismétlődnek.",

                "A szinusz és koszinusz periódusa 360°",
                "A tangens periódusa 180°",
                "Egy háromszög oldalainak aránya a velük szemben lévő szögek szinuszának arányával egyenlő."
            ];
            trigteny.forEach(e => {
                tenyek.push(e)
            });
            break;
    }


    const felhasznalt = [];
    var szamlalo = 0;

    while (true) {

        let x = Math.floor(Math.random() * tenyek.length);
        x = Math.floor(x);

        if (!felhasznalt.includes(x)) {
            if (szamlalo < 3) {
                felhasznalt.push(x);
                szamlalo++;
            } else {
                break;
            }

        }
    }

    document.getElementById("teny1").innerHTML = tenyek[felhasznalt[0]];
    document.getElementById("teny2").innerHTML = tenyek[felhasznalt[1]];
    document.getElementById("teny3").innerHTML = tenyek[felhasznalt[2]];

}




///////////////////////////////////////////////////////////////////////////////////////6 altalanos matek
function Prim(random) {

    var num;

    if (!random) {
        num = prompt("Adjon meg egy számot: ");

    } else {
        num = Math.floor(Math.random() * 101) + 1;
    }
    var primsz = true;
    for (let i = 2; i < num - 1; i++) {

        if (num % i == 0) {
            primsz = false;
        }

    }

    if (primsz) {
        document.getElementById("prim").innerHTML = num + " egy prímszám";

    } else {

        document.getElementById("prim").innerHTML = num + " NEM egy prímszám";
    }

}

function Hatvany(random) {

    var x, y;

    if (!random) {
        x = parseInt(prompt("Adjon meg egy számot (x): "));
        y = parseInt(prompt("Adjon meg egy számot (y): "));
    } else {
        x = Math.floor(Math.random() * 5) + 1;
        y = Math.floor(Math.random() * 10) + 1;

    }

    document.getElementById("xyhatvany").innerHTML = x + "<sup>" + y + "</sup>" + " = " + x ** y;
}

function Szaz(random) {
    var x, y;

    if (!random) {
        x = parseInt(prompt("Adjon meg egy számot: "));
        y = parseInt(prompt("Adjon meg egy számot: "));

    } else {
        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 1000) + 1;

    }

    document.getElementById("szaz").innerHTML = x + "%" + " a " + y + "-nak" + " = " + Math.round(((x / 100) * y));


    //result = (x / 100) * y)

}

function Befek(random) {

    var ev, kezdpenz, szaz, ossz;

    if (!random) {
        ev = parseInt(prompt("Hány évig szeretne befektetni: "));
        kezdpenz = parseInt(prompt("Mennyivel kezd: "));
        szaz = parseInt(prompt("Hány százalékkal fog növekedni: "));


    } else {
        ev = Math.floor(Math.random() * 50) + 1;
        kezdpenz = Math.floor(Math.random() * 10000) + 1;
        szaz = Math.floor(Math.random() * 50) + 1;

    }

    ossz = kezdpenz * (Math.pow((1 + (szaz / 100)), ev));
    document.getElementById("befek").innerHTML = ev + " év múlva " + ossz.toFixed(2) + "Ft lesz az értéke";

    //A = P × (1 + (r / 100)) ** t


}

function CsokkNov(random) {


    var valtelot, valtutan;

    if (!random) {
        valtelot = parseInt(prompt("Adja meg a számot a változás előtt: "));
        valtutan = parseInt(prompt("Adja meg a számot a változás után: "));

    } else {

        valtelot = Math.floor(Math.random() * 101) + 1;
        valtutan = Math.floor(Math.random() * 101) + 1;
    }

    kulon = valtutan - valtelot;
    valtozas = ((kulon / valtelot) * 100);
    valtozas = valtelot.toFixed(2);


    if (valtozas < 0) {
        document.getElementById("szazcsoknov").innerHTML = valtelot + " => " + valtutan + "; " + Math.abs(valtozas) + "%-al csökkent";

    } else {

        document.getElementById("szazcsoknov").innerHTML = valtelot + " => " + valtutan + " " + valtozas + "%-al nőtt";
    }

    //valtozas = ((kulon / valtelot) * 100);


}

function Masod(random) {

    var a, b, c, elso, masodik;

    if (!random) {

        a = parseFloat(prompt("1. a: "));
        b = parseFloat(prompt("2. b: "));
        c = parseFloat(prompt("3. c: "));

    } else {
        a = Math.floor(Math.random() * 101) + 1;
        b = Math.floor(Math.random() * 101) + 1;
        c = Math.floor(Math.random() * 101) + 1;
    }

    var diszkrim = Math.pow(b, 2) - 4 * a * c;

    if (diszkrim > 0) {

        elso = (-b + Math.sqrt(diszkrim)) / (2 * a);
        masodik = (-b - Math.sqrt(diszkrim)) / (2 * a);

        document.getElementById("masod").innerHTML = "x1: " + elso.toFixed(2) + " " + "x2: " + masodik.toFixed(2);
    } else if (diszkrim < 0) {

        document.getElementById("masod").innerHTML = "Nincs megoldás";


    } else {
        elso = -b / (2 * a);

        document.getElementById("masod").innerHTML = "x1: " + elso.toFixed(2);

    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////geometria

function Pitagorasz(random) {


    var a, b, c;

    if (!random) {
        a = parseInt(prompt("1. Befogó (cm): "));
        b = parseInt(prompt("2. Befogó (cm): "));


    } else {
        a = Math.floor(Math.random() * 101) + 1;
        b = Math.floor(Math.random() * 101) + 1;
    }

    c = Math.sqrt(Math.pow((a), 2) + Math.pow((b), 2));
    c = c.toFixed(2);


    document.getElementById("Pitagorasz").innerHTML = "√(" + a + "<sup>" + 2 + "</sup>" + " + " + b + "<sup>" + 2 + "</sup>" + ") = " + c + "cm";
}


function HaromszTerulet(random) {

    var kep = parseInt(prompt("1. (a * b * sin(γ)) / 2\n2. (a * ma) / 2 \n3. √ (s(s-a)*(s-b)*(s-c))\n Melyik képletet szeretné használni: "));

    var a, b, fok, m, c, s;


    if (kep == 1) {
        if (!random) {

            a = parseFloat(prompt("1. a oldal (cm): "));
            b = parseFloat(prompt("2. b oldal (cm): "));
            fok = parseFloat(prompt("3. γ fok: "));


        } else {
            a = Math.floor(Math.random() * 101) + 1;
            b = Math.floor(Math.random() * 101) + 1;
            fok = Math.floor(Math.random() * 179) + 1;
        }
        var elsoans = ((a * b) * Math.sin(fok * Math.PI / 180)) / 2;
        elsoans = elsoans.toFixed(2);

        document.getElementById("harter").innerHTML = "( " + a + " * " + b + " * " + "sin (" + fok + ")" + " )" + " / " + "2" + " = " + elsoans + "cm<sup>2</sup>";

    } else if (kep == 2) {

        if (!random) {
            a = parseFloat(prompt("1. a oldal (cm): "));
            m = parseFloat(prompt("2. magasság (cm): "));


        } else {
            a = Math.floor(Math.random() * 101) + 1;
            m = Math.floor(Math.random() * 101) + 1;
        }

        var masodans = (a * m) / 2;

        document.getElementById("harter").innerHTML = "( " + a + " * " + m + " )" + " / " + "2" + " = " + masodans + "cm<sup>2</sup>";
    } else if (kep == 3) {
        if (!random) {

            a = parseFloat(prompt("1. a oldal (cm): "));
            b = parseFloat(prompt("2. b oldal (cm): "));
            c = parseFloat(prompt("2. b oldal (cm): "));

            if (!(a + b > c && a + c > b && b + c > a)) {

                document.getElementById("harter").innerHTML = "Nem valódi háromszög";
                return;
            }

        } else {


            while (true) {
                a = Math.floor(Math.random() * 101) + 1;
                b = Math.floor(Math.random() * 101) + 1;
                c = Math.floor(Math.random() * 101) + 1;

                if (a + b > c && a + c > b && b + c > a) {
                    break;
                }
            }

        }

        s = (a + b + c) / 2;
        var harmadans = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        harmadans = harmadans.toFixed(2);
        document.getElementById("harter").innerHTML = "√" + "(" + s + " * " + " (" + s + " - " + a + ") " + " * " + " (" + s + " - " + b + ") " + " * " + " (" + s + " - " + c + ") " + " = " + harmadans + "cm<sup>2</sup>";

    } else {
        document.getElementById("harter").innerHTML = "Rossz Adat";
    }


}


function VektorTavolsag(random) {

    var x1, y1, x2, y2, d;

    if (!random) {
        x1 = parseInt(prompt("x1 koordinátája: "));
        y1 = parseInt(prompt("y1 koordinátája: "));

        x2 = parseInt(prompt("x2 koordinátája: "));
        y2 = parseInt(prompt("y2 koordinátája: "));


    } else {

        x1 = Math.floor(Math.random() * 101) + 1;
        y1 = Math.floor(Math.random() * 101) + 1;

        x2 = Math.floor(Math.random() * 101) + 1;
        y2 = Math.floor(Math.random() * 101) + 1;
    }

    d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    d = d.toFixed(2);

    // d = √((x2 - x1)² + (y2 - y1)²)


    document.getElementById("VektorTavolsag").innerHTML = "√" + "((" + x2 + "-" + x1 + ")" + "<sup>2</sup>" + " + " + "(" + y2 + "-" + y1 + "))" + "<sup>2</sup>" + " = " + d;


}


function KetPontKozep(random) {

    var x1, y1, x2, y2;

    if (!random) {
        x1 = parseInt(prompt("x1 koordinátája: "));
        y1 = parseInt(prompt("y1 koordinátája: "));

        x2 = parseInt(prompt("x2 koordinátája: "));
        y2 = parseInt(prompt("y2 koordinátája: "));


    } else {

        x1 = Math.floor(Math.random() * 101) + 1;
        y1 = Math.floor(Math.random() * 101) + 1;

        x2 = Math.floor(Math.random() * 101) + 1;
        y2 = Math.floor(Math.random() * 101) + 1;
    }

    var x = (x1 + x2) / 2;
    var y = (y1 + y2) / 2;


    document.getElementById("KetPontKozep").innerHTML = "(" + x1 + "+" + x2 + ")/ 2" + " ; " + "(" + y1 + "+" + y2 + ")/ 2" + " = " + "(" + x + ";" + y + ")";

    // x = (x1 + x2) / 2, y = (y1 + y2) / 2  


}


function KetVektorKozSzog(random) {

    var x1, y1, x2, y2, fok;


    if (!random) {
        x1 = parseInt(prompt("Első vektor x1 koordinátája: "));
        y1 = parseInt(prompt("Első vektor y1 koordinátája: "));

        x2 = parseInt(prompt("Második vektor x1 koordinátája: "));
        y2 = parseInt(prompt("Második vektor y1 koordinátája: "));



    } else {

        x1 = parseInt(Math.floor(Math.random() * 101) + 1);
        y1 = parseInt(Math.floor(Math.random() * 101) + 1);

        x2 = parseInt(Math.floor(Math.random() * 101) + 1);
        y2 = parseInt(Math.floor(Math.random() * 101) + 1);

    }

    var v1 = Math.sqrt(Math.pow((x1), 2) + Math.pow((y1), 2));
    var v2 = Math.sqrt(Math.pow((x2), 2) + Math.pow((y2), 2));


    var skalarisszorz = (x1 * x2) + (y1 * y2);
    fok = skalarisszorz / (v1 * v2);
    fok = Math.acos(fok) * (180 / Math.PI);


    document.getElementById("ketvektor").innerHTML = "cos<sup>-1</sup>(" + skalarisszorz + "/" + "( " + v1.toFixed(2) + "*" + v2.toFixed(2) + " )) =" + fok.toFixed(2) + "°";


    // v1 = √(x1² + y1²) 
    // v2 = √(x2² + y2²) 
    // skalarisszorz = (x1 * x2) + (y1 * y2) 

    // cos(fok) = (skalarisszorz) / (v1 * v2) 

    // fok = acos(cos(fok)) * (180 / Math.PI) 



}

function AtlokSzama(random) {

    var n, atlok;

    if (!random) {
        n = parseInt(prompt("n oldalak száma: "));


    } else {

        n = Math.floor(Math.random() * 101) + 1;

    }

    atlok = n * (n - 3) / 2;

    document.getElementById("atlok").innerHTML = "Átlók száma: " + atlok;

    // atlok = n * (n - 3) / 2;
}


/////////////////////////////////////////////////////////////////////////////fizika


function Tavolsag(random) {

    var d, s, t;

    var valasz = parseInt(prompt("1. Sebesség\n2. Távolság \n3. Idő\n "));

    if (valasz == 1) {
        if (!random) {
            d = parseFloat(prompt("Távolság m: "));
            t = parseFloat(prompt("Idő s:  "));

        } else {

            d = Math.floor(Math.random() * 101) + 1;
            t = Math.floor(Math.random() * 101) + 1;
        }

        s = d / t;
        s *= 3.6;

        document.getElementById("tavolsag").innerHTML = d + "m, " + t + "s =>" + s.toFixed(2) + "km/óra";

    } else if (valasz == 2) {


        if (!random) {
            s = parseFloat(prompt("Sebesség km/óra: "));
            t = parseFloat(prompt("Idő s:  "));

        } else {

            s = Math.floor(Math.random() * 101) + 1;
            t = Math.floor(Math.random() * 101) + 1;

        }

        d = (s / 3.6) * t;
        document.getElementById("tavolsag").innerHTML = s + "km/óra, " + t + "s =>" + d.toFixed(2) + "m";


        // s = d / t;


    } else if (valasz == 3) {


        if (!random) {
            d = parseFloat(prompt("Távolság m: "));
            s = parseFloat(prompt("Sebesség km/óra:  "));

        } else {

            d = Math.floor(Math.random() * 101) + 1;
            s = Math.floor(Math.random() * 101) + 1;
        }

        t = d / (s / 3.6);

        document.getElementById("tavolsag").innerHTML = d + "m, " + s + "km/óra =>" + t.toFixed(2) + "s";

        // t = d / (s / 3.6); a 3.6 az meterbevaltas
    }


}
function Ero(random) {

    var f, m, a;

    var valasz = parseInt(prompt("1. Erő\n2. Gyorsulás \n3. Tömeg\n "));

    if (valasz == 1) {
        if (!random) {
            a = parseFloat(prompt("Gyorsulás m/s²: "));
            m = parseFloat(prompt("Tömeg kg:  "));

        } else {

            a = Math.floor(Math.random() * 101) + 1;
            m = Math.floor(Math.random() * 101) + 1;
        }

        f = m * a;

        document.getElementById("ero").innerHTML = a + "m/s², " + m + "kg =>" + f.toFixed(2) + "N";
    
        //f = m * a;

    } else if (valasz == 2) {


        if (!random) {
            f = parseFloat(prompt("Erő N: "));
            m = parseFloat(prompt("Tömeg kg:  "));

        } else {

            f = Math.floor(Math.random() * 101) + 1;
            m = Math.floor(Math.random() * 101) + 1;
        }

        a = f / m;

        document.getElementById("ero").innerHTML = f + "N, " + m + "kg =>" + a.toFixed(2) + "m/s²";
        
        //a = f / m;

    
    } else if (valasz == 3) {


        if (!random) {
            f = parseFloat(prompt("Erő N: "));
            a = parseFloat(prompt("Gyorsulás m/s²:  "));

        } else {

            f = Math.floor(Math.random() * 101) + 1;
            a = Math.floor(Math.random() * 101) + 1;
        }

        m = f / a;

        document.getElementById("ero").innerHTML = f + "N," + a + "m/s² =>" + m.toFixed(2) + "kg";

        // m = f / a;

    } else {

        document.getElementById("ero").innerHTML = "Rossz adat";
    }


}



function Aramero(random) {

    var V, R, I;

    var valasz = parseInt(prompt("1. Áram erősség\n2. Feszültség \n3. Ellenállás\n "));

    if (valasz == 1) {
        if (!random) {
            V = parseFloat(prompt("feszültség V: "));
            R = parseFloat(prompt("ellenállás Ω:  "));

        } else {

            V = Math.floor(Math.random() * 101) + 1;
            R = Math.floor(Math.random() * 101) + 1;
        }

        I = V / R; // keplet

        document.getElementById("aramero").innerHTML = V + "V, " + R + "Ω =>" + I.toFixed(2) + "A";
    } else if (valasz == 2) {


        if (!random) {
            I = parseFloat(prompt("Áram erősség A: "));
            R = parseFloat(prompt("ellenállás Ω:  "));

        } else {

            I = Math.floor(Math.random() * 101) + 1;
            R = Math.floor(Math.random() * 101) + 1;
        }

        V = I * R; //keplet
         
        document.getElementById("aramero").innerHTML = I + "A, " + R + "Ω =>" + V.toFixed(2) + "V";

    } else if (valasz == 3) {
        if (!random) {
            V = parseFloat(prompt("feszültség V: "));
            I = parseFloat(prompt("Áram erősség A:  "));

        } else {

            V = Math.floor(Math.random() * 101) + 1;
            I = Math.floor(Math.random() * 101) + 1;
        }

        R = V / I; //keplet

        document.getElementById("aramero").innerHTML = V + "V, " + I + "A =>" + R.toFixed(2) + "Ω";
    }


}


function HomerValt(random) {

    var c, f;
    var valasz = parseInt(prompt("1. C => F\n2. F => C"));

    if (valasz == 1) {

        if (!random) {

            c = parseFloat(prompt("Celsius: "));

        } else {

            c = Math.floor(Math.random() * 101) + 1;

        }
        f = (c * 1.8) + 32; //fahrenheitba
        document.getElementById("homer").innerHTML = c + "c " + "=>" + f.toFixed(2) + "f";

    } else if (valasz == 2) {

        if (!random) {
            f = parseFloat(prompt("Fahrenheit: "));

        } else {
            f = Math.floor(Math.random() * 101) + 1;
        }

            c = (f - 32) / 1.8; //celsius
         
        document.getElementById("homer").innerHTML = f + "f " + "=>" + c.toFixed(2) + "c";
    } else {
        document.getElementById("homer").innerHTML = "Rossz adat";
    }
}


function Kinet(random) {

    var ke, m, v;

    var valasz = parseInt(prompt("1. Kinetikus Energia\n2. Tömeg \n3. Sebesség\n "))

    if (valasz == 1) {
        if (!random) {
            m = parseFloat(prompt("Tömeg kg: "));
            v = parseFloat(prompt("Sebesség m/s:  "));

        } else {

            m = Math.floor(Math.random() * 101) + 1;
            v = Math.floor(Math.random() * 101) + 1;
        }

        ke = 0.5 * m * Math.pow(v, 2); // keplet 0.5 ay 1/2
 
        document.getElementById("kinet").innerHTML = m + "kg, " + v + "m/s =>" + ke.toFixed(2) + "J";

    } else if (valasz == 2) {


        if (!random) {
            ke = parseFloat(prompt("Kinetikus Energia: "));
            v = parseFloat(prompt("Sebesség m/s:  "));


        } else {

            ke = Math.floor(Math.random() * 101) + 1;
            v = Math.floor(Math.random() * 101) + 1;

        }

        m = (ke * 2) / Math.pow(v, 2); // keplet

        document.getElementById("kinet").innerHTML = ke + "J, " + v + "m/s =>" + m.toFixed(2) + "kg";

    } else if (valasz == 3) {
        if (!random) {
            ke = parseFloat(prompt("Kinetikus Energia: "));
            m = parseFloat(prompt("Tömeg kg: "));

        } else {

            ke = Math.floor(Math.random() * 101) + 1;
            m = Math.floor(Math.random() * 101) + 1;
        }

        v = Math.sqrt(ke / (0.5 * m)); //keplet

        document.getElementById("kinet").innerHTML = ke + "J, " + m + "kg =>" + v.toFixed(2) + "m/s";
    }


}


function Poten(random) {

    var u, m, h;

    const g = 9.81;

    var valasz = parseInt(prompt("1. Gravitációs potenciális energia\n2. Magasság \n3. Tömeg\n \ng = 9.81 m/s²"));

    if (valasz == 1) {
        if (!random) {
            m = parseFloat(prompt("Tömeg kg: "));
            h = parseFloat(prompt("Magasság m:  "));

        } else {

            m = Math.floor(Math.random() * 101) + 1;
            h = Math.floor(Math.random() * 101) + 1;
        }

        u = m * g * h; //keplet

        document.getElementById("poten").innerHTML = m + "kg, " + h + "m =>" + u.toFixed(2) + "J";

    } else if (valasz == 2) {


        if (!random) {
            u = parseFloat(prompt("Potenciális energia J: "));
            m = parseFloat(prompt("Tömeg kg:  "));


        } else {

            u = Math.floor(Math.random() * 101) + 1;
            m = Math.floor(Math.random() * 101) + 1;

        }

        h = u / (m * g); //keplet

        document.getElementById("poten").innerHTML = u + "J, " + m + "kg =>" + h.toFixed(2) + "m";

    } else if (valasz == 3) {
        if (!random) {
            u = parseFloat(prompt("Potenciális energia J: "));
            h = parseFloat(prompt("Magasság m:  "));


        } else {

            u = Math.floor(Math.random() * 101) + 1;
            h = Math.floor(Math.random() * 101) + 1;

        }

        m = u / (h * g); //keplet

        document.getElementById("poten").innerHTML = u + "J, " + h + "m =>" + m.toFixed(2) + "kg";
    }
}

/////////////////////////////////////////////////////////////////////////trigonometria

function FokRad(random) {

    var valasz = parseInt(prompt("1. Fokból Radiáns\n2. Radiánsból Fok"))
    var fok, rad;
    if (valasz == 1) {
        if (!random) {

            fok = parseFloat(prompt("Fok: "));

        } else {
            fok = Math.floor(Math.random() * 361) + 1;
        }

        rad = fok * (Math.PI / 180); //keplet

        document.getElementById("fok").innerHTML = fok + "°" + " = " + rad.toFixed(3) + "rad";

    } else if (valasz == 2) {

        if (!random) {

            rad = parseFloat(prompt("Radiáns: "));

        } else {

            rad = Math.floor(Math.random() * 4) + 1;
        }

        fok = rad * (180 / Math.PI); //keplet

        document.getElementById("fok").innerHTML = rad + "rad" + " = " + fok.toFixed(3) + "°";
    } else {
        document.getElementById("fok").innerHTML = "Rossz adat";

    }
}



function Koszinusztet(random) {

    var valasz = parseInt(prompt("1. C oldal\n2. Gamma szög"));
    var a, b, gamma, c;

    if (valasz == 1) {
        if (!random) {

            a = parseFloat(prompt("a oldal (cm): "));
            b = parseFloat(prompt("b oldal (cm): "));
            gamma = parseFloat(prompt("Gamma szög: "));

        } else {
            a = Math.floor(Math.random() * 100) + 1;
            b = Math.floor(Math.random() * 100) + 1;
            gamma = Math.floor(Math.random() * 179) + 1;

        }

        c = Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(gamma * Math.PI / 180); //keplet
        c = Math.sqrt(c);

        document.getElementById("kosz").innerHTML = a + "<sup>2</sup>" + "+" + b + "<sup>2</sup>" + "-" + "2 * " + a + " *" + b + " cos(" + gamma + "°) = " + c.toFixed(3) + "cm";

    } else if (valasz == 2) {

        if (!random) {

            a = parseFloat(prompt("a oldal: "));
            b = parseFloat(prompt("b oldal: "));
            c = parseFloat(prompt("c oldal: "));

        } else {

            while (true) {
                a = Math.floor(Math.random() * 101) + 1;
                b = Math.floor(Math.random() * 101) + 1;
                c = Math.floor(Math.random() * 101) + 1;

                if (a + b > c && a + c > b && b + c > a) {
                    break;
                }
            }
        }



        gamma = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b); //keplet
        gamma = Math.acos(gamma) * 180 / Math.PI;

        document.getElementById("kosz").innerHTML = "cos" + "<sup>-1</sup>" + "((" + a + "<sup>2</sup>" + "+" + b + "<sup>2</sup>" + "-" + c + "<sup>2</sup>)" + "/" + "(2 *" + a + "*" + b + "))" + "= " + gamma.toFixed(2) + "°";

    } else {
        document.getElementById("kosz").innerHTML = "Rossz adat";

    }

}




function SzFuggvenyek(random) {

    var valasz = parseInt(prompt("1. Sin(x)\n2. Cos(x) \n3. Tan(x)\n "));
    var ans, x, rad;

    if (!random) {

        x = parseFloat(prompt("x: "));

    } else {
        x = Math.floor(Math.random() * 361) + 1;
    }

    if (valasz == 1) {

        rad = x * (Math.PI / 180); //keplet
        ans = Math.sin(rad);

        document.getElementById("szog").innerHTML = "Sin(" + x + ")" + " = " + ans.toFixed(3);

    } else if (valasz == 2) {

        rad = x * (Math.PI / 180); //keplet
        ans = Math.cos(rad);

        document.getElementById("szog").innerHTML = "Cos(" + x + ")" + " = " + ans.toFixed(3);

    } else if (valasz == 3) {

        rad = x * (Math.PI / 180); //keplet
        ans = Math.tan(rad);

        document.getElementById("szog").innerHTML = "Tan(" + x + ")" + " = " + ans.toFixed(3);


    } else {

        document.getElementById("szog").innerHTML = "Rossz adat";
    }
}

function Inverse(random) {

    var valasz = parseInt(prompt("1. Sin⁻¹(x)\n2. Cos⁻¹(x) \n3. Tan⁻¹(x)"));
    var ans, x;

    if (!random) {

        x = parseFloat(prompt("x: "));

    } else {
        x = Math.random() * 2 + (-1);
    }
    if (valasz == 1) {

        ans = Math.asin(x) * 180 / Math.PI; //keplet

        document.getElementById("inv").innerHTML = "Sin⁻¹(" + x.toFixed(3) + ")" + " = " + ans.toFixed(3) + "°";

    } else if (valasz == 2) {

        ans = Math.acos(x) * 180 / Math.PI; //keplet

        document.getElementById("inv").innerHTML = "Cos⁻¹(" + x.toFixed(3) + ")" + " = " + ans.toFixed(3) + "°";

    } else if (valasz == 3) {

        ans = Math.atan(x) * 180 / Math.PI; //keplet

        document.getElementById("inv").innerHTML = "Tan⁻¹(" + x.toFixed(3) + ")" + " = " + ans.toFixed(3) + "°";


    } else {

        document.getElementById("inv").innerHTML = "Rossz adat";
    }
}




function Torony(random) {

    var a, fok, magassag;

    if (!random) {

        a = parseFloat(prompt("Hány méterre van a torony: "));
        fok = parseFloat(prompt("Milyen szögből látja a tornyot: "));

    } else {
        a = Math.floor(Math.random() * 101) + 1;
        fok = Math.floor(Math.random() * 91) + 1;

    }

    fok = fok * (Math.PI / 180); 

    magassag = Math.tan(fok) * a; //keplet
    document.getElementById("torony").innerHTML = "Torony magassága: " + magassag.toFixed(2) + "m";

}

function Magassag(random) {

    var a, sz, h;
    if (!random) {

        a = parseFloat(prompt("a oldal: "));
        sz = parseFloat(prompt("Szemközti szög: "));

    } else {
        a = Math.floor(Math.random() * 101) + 1;
        sz = Math.floor(Math.random() * 179) + 1;

    }

    h = a * Math.sin(sz * (Math.PI / 180)); //keplet

    document.getElementById("magass").innerHTML = a + " * sin(" + sz + "°)" + " = " + h.toFixed(2) + "m";

}