---
layout: default
title: getline i formatowanie wyników
---

# getline i formatowanie wyników

## Cel lekcji

Nauczysz się wczytywać tekst ze spacjami oraz prosto formatować wyniki wypisywane na ekranie.

Po tej lekcji będziesz umieć:

- wyjaśnić, dlaczego `cin >> tekst` nie zawsze wystarcza,
- użyć `getline` do wczytania całej linii tekstu,
- poprawnie połączyć `cin >>` i `getline`,
- użyć `getline(cin >> ws, tekst)`,
- wypisać liczbę z dwoma miejscami po kropce,
- wypisać wartość logiczną jako `true` albo `false`.

## Problem z cin >> tekst

Na początku zobaczmy problem. Nie zaczynamy od składni, tylko od sytuacji, którą łatwo spotkać w programie.

Chcemy wczytać imię i nazwisko użytkownika.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string imieNazwisko;

    cout << "Podaj imie i nazwisko: ";
    cin >> imieNazwisko;

    cout << "Wczytano: " << imieNazwisko << "\n";

    return 0;
}
```

Jeżeli użytkownik wpisze:

```text
Jan Kowalski
```

program wypisze tylko:

```text
Wczytano: Jan
```

Dlaczego?

Operator `>>` wczytuje tekst tylko do pierwszego białego znaku. Białym znakiem może być spacja, tabulator albo przejście do nowej linii.

Dlatego `cin >> tekst` jest dobre dla jednego słowa, ale nie wystarcza dla:

- imienia i nazwiska,
- adresu,
- tytułu książki,
- zdania,
- krótkiego opisu.

## Rozwiązanie: getline

Do wczytania całej linii tekstu używamy `getline`.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string imieNazwisko;

    cout << "Podaj imie i nazwisko: ";
    getline(cin, imieNazwisko);

    cout << "Wczytano: " << imieNazwisko << "\n";

    return 0;
}
```

Jeżeli użytkownik wpisze:

```text
Jan Kowalski
```

program wypisze:

```text
Wczytano: Jan Kowalski
```

`getline` czyta całą linię aż do naciśnięcia klawisza Enter.

## Kiedy użyć cin >>, a kiedy getline?

- `cin >> liczba` stosujemy do liczb i pojedynczych wartości.
- `cin >> tekst` stosujemy do jednego słowa.
- `getline(cin, tekst)` stosujemy do całej linii tekstu ze spacjami.

Krótka zasada:

Jeżeli użytkownik może wpisać spację, użyj `getline`.

## Problem przy mieszaniu cin >> i getline

Częsty problem pojawia się wtedy, gdy najpierw wczytujemy liczbę przez `cin >>`, a potem linię tekstu przez `getline`.

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int wiek;
    string imieNazwisko;

    cout << "Podaj wiek: ";
    cin >> wiek;

    cout << "Podaj imie i nazwisko: ";
    getline(cin, imieNazwisko);

    cout << "Wiek: " << wiek << "\n";
    cout << "Imie i nazwisko: " << imieNazwisko << "\n";

    return 0;
}
```

Ten program może nie poczekać na wpisanie imienia i nazwiska.

Co się dzieje krok po kroku?

1. Użytkownik wpisuje wiek.
2. Użytkownik naciska Enter.
3. `cin >> wiek` wczytuje liczbę.
4. Znak nowej linii po Enter zostaje jeszcze do odczytania.
5. `getline` czyta ten pozostały znak nowej linii.
6. Zmienna `imieNazwisko` może stać się pusta.

Nie trzeba na tym poziomie znać wszystkich szczegółów strumieni. Wystarczy zapamiętać prostą zasadę: po `cin >>` przed `getline` często trzeba użyć `ws`.

## Rozwiązanie: getline(cin >> ws, tekst)

Poprawny zapis:

```cpp
getline(cin >> ws, imieNazwisko);
```

Pełny program:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int wiek;
    string imieNazwisko;

    cout << "Podaj wiek: ";
    cin >> wiek;

    cout << "Podaj imie i nazwisko: ";
    getline(cin >> ws, imieNazwisko);

    cout << "Wiek: " << wiek << "\n";
    cout << "Imie i nazwisko: " << imieNazwisko << "\n";

    return 0;
}
```

`ws` usuwa czekające białe znaki. Może usunąć na przykład znak nowej linii, który został po wcześniejszym `cin >>`.

Dopiero potem `getline` czyta właściwą linię tekstu.

Ten zapis jest przydatny, gdy mieszasz `cin >>` i `getline`.

Ważne: `ws` usuwa także spacje wpisane na początku tekstu.

## Jak czytać getline?

Kod:

```cpp
getline(cin, imieNazwisko);
```

Można przeczytać tak:

Wczytaj z klawiatury całą linię tekstu i zapisz ją w zmiennej `imieNazwisko`.

Kod:

```cpp
getline(cin >> ws, imieNazwisko);
```

Można przeczytać tak:

Najpierw pomiń czekające białe znaki, a potem wczytaj całą linię tekstu do zmiennej `imieNazwisko`.

## Formatowanie wyników

Formatowanie wyników dotyczy tego, jak dane wyglądają na ekranie.

Do prostego formatowania używamy nagłówka:

```cpp
#include <iomanip>
```

Najczęściej użyjemy:

- `fixed`,
- `setprecision`,
- `boolalpha`.

## Liczba z dwoma miejscami po kropce

Przykład:

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    double cena = 19.9;

    cout << fixed << setprecision(2) << cena << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
19.90
```

</details>

`fixed` oznacza zwykły zapis liczby dziesiętnej.

`setprecision(2)` oznacza dwa miejsca po kropce.

Taki zapis przydaje się przy cenach i kwotach.

## Wartość bool jako true albo false

Bez dodatkowego formatowania wartość `bool` może zostać wypisana jako `1` albo `0`.

Przykład z `boolalpha`:

```cpp
#include <iostream>

using namespace std;

int main()
{
    bool wynik = true;

    cout << boolalpha << wynik << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
true
```

</details>

`boolalpha` sprawia, że program wypisuje `true` albo `false` zamiast `1` albo `0`.

## Przykład łączący getline i formatowanie

```cpp
#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main()
{
    string nazwaProduktu;
    double cena;
    bool dostepny = true;

    cout << "Podaj nazwe produktu: ";
    getline(cin, nazwaProduktu);

    cout << "Podaj cene: ";
    cin >> cena;

    cout << "Produkt: " << nazwaProduktu << "\n";
    cout << fixed << setprecision(2);
    cout << "Cena: " << cena << " zl\n";
    cout << boolalpha;
    cout << "Dostepny: " << dostepny << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowy wynik</summary>

```text
Podaj nazwe produktu: zeszyt w kratke
Podaj cene: 4.5
Produkt: zeszyt w kratke
Cena: 4.50 zl
Dostepny: true
```

</details>

## Typowe błędy

- Użycie `cin >> tekst` do tekstu ze spacjami.
- Zapomnienie `#include <string>` przy używaniu `string`.
- Zapomnienie `#include <iomanip>` przy używaniu `setprecision`.
- Użycie `getline(cin, tekst)` od razu po `cin >> liczba` bez `ws`.
- Myślenie, że `getline` wczytuje tylko jedno słowo.
- Mylenie formatowania wyniku z konwersją typu.
- Oczekiwanie, że `setprecision(2)` zawsze działa tak samo bez `fixed`.
- Zapomnienie, że `ws` usuwa także spacje na początku tekstu.

## Ćwiczenia

### 1. Imię i nazwisko

Wczytaj imię i nazwisko w jednej zmiennej za pomocą `getline`. Następnie wypisz powitanie.

Dla danych:

```text
Jan Kowalski
```

wynik może wyglądać tak:

```text
Witaj, Jan Kowalski
```

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Utwórz zmienną typu `string`. Do wczytania całej linii użyj `getline(cin, imieNazwisko)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string imieNazwisko;

    cout << "Podaj imie i nazwisko: ";
    getline(cin, imieNazwisko);

    cout << "Witaj, " << imieNazwisko << "\n";

    return 0;
}
```

</details>

### 2. Wiek i miejscowość

Wczytaj wiek za pomocą `cin`, a potem miejscowość za pomocą `getline`. Miejscowość może zawierać spację, na przykład `Nowy Sacz`.

Dla danych:

```text
16
Nowy Sacz
```

wynik może wyglądać tak:

```text
Wiek: 16
Miejscowosc: Nowy Sacz
```

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Po `cin >> wiek` użyj `getline(cin >> ws, miejscowosc)`, aby ominąć znak nowej linii pozostawiony po Enter.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    int wiek;
    string miejscowosc;

    cout << "Podaj wiek: ";
    cin >> wiek;

    cout << "Podaj miejscowosc: ";
    getline(cin >> ws, miejscowosc);

    cout << "Wiek: " << wiek << "\n";
    cout << "Miejscowosc: " << miejscowosc << "\n";

    return 0;
}
```

</details>

### 3. Cena do dwóch miejsc po kropce

Wczytaj cenę jako `double`. Wypisz ją z dwoma miejscami po kropce.

Dla danych:

```text
19.9
```

wynik powinien zawierać:

```text
19.90
```

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Dodaj `#include <iomanip>`. Przed wypisaniem ceny użyj `fixed` oraz `setprecision(2)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    double cena;

    cout << "Podaj cene: ";
    cin >> cena;

    cout << fixed << setprecision(2);
    cout << "Cena: " << cena << " zl\n";

    return 0;
}
```

</details>

## Podsumowanie

`cin >> tekst` wczytuje tylko jedno słowo. `getline` wczytuje całą linię tekstu. Gdy wcześniej używasz `cin >>`, często potrzebny jest zapis `getline(cin >> ws, tekst)`. Do prostego formatowania wyników używamy `fixed`, `setprecision` i `boolalpha`.
