---
layout: default
title: Praca krokowa i funkcje
---

# Praca krokowa i funkcje

## Cel lekcji

Nauczysz się przechodzić przez program krok po kroku, wejść do funkcji i wrócić z niej do miejsca wywołania.

## Krótkie wprowadzenie do problemu

Punkt przerwania zatrzymuje program. Praca krokowa pozwala ruszać dalej małymi krokami.

Możesz wykonać następny wiersz bez wchodzenia do funkcji albo wejść do funkcji i zobaczyć, co dzieje się w jej środku.

> W tej lekcji nie musisz jeszcze samodzielnie tworzyć funkcji. Korzystamy z gotowego programu, aby nauczyć się przechodzenia przez jego wykonanie.

## Najważniejsze polecenia

W Code::Blocks 25.03 używaj poleceń z menu `Debug`:

- `Debug -> Next line` - wykonuje następny wiersz bez wchodzenia do funkcji,
- `Debug -> Step into` - wchodzi do wywoływanej funkcji,
- `Debug -> Step out` - kończy aktualną funkcję i wraca do miejsca wywołania,
- `Debug -> Continue` - kontynuuje program do następnego punktu przerwania albo końca.

Nie używamy tutaj konsoli GDB. Wystarczą polecenia z menu i okno `Watches`.

## Program do ćwiczeń

```cpp
#include <iostream>

using namespace std;

int obliczPole(int dlugosc, int szerokosc)
{
    int pole = dlugosc * szerokosc;
    return pole;
}

int main()
{
    int bokA = 5;
    int bokB = 3;

    int wynik = obliczPole(bokA, bokB);

    cout << "Pole: " << wynik << '\n';

    return 0;
}
```

## Wariant 1 - przejście nad funkcją

Ustaw punkt przerwania przy wierszu:

```cpp
int wynik = obliczPole(bokA, bokB);
```

Jeżeli użyjesz `Debug -> Next line`, debugger wykona całe wywołanie funkcji `obliczPole`, ale nie pokaże jej wnętrza krok po kroku.

Po tym kroku wykonanie przejdzie do wiersza z `cout`, a zmienna `wynik` powinna mieć wartość `15`.

## Wariant 2 - wejście do funkcji

Jeżeli na tym samym wierszu użyjesz `Debug -> Step into`, debugger wejdzie do funkcji `obliczPole`.

W oknie `Watches` argumenty powinny być widoczne w sekcji `Function arguments`:

- `dlugosc = 5`,
- `szerokosc = 3`.

Lokalna zmienna `pole` jest widoczna tylko wewnątrz funkcji `obliczPole`. Po wykonaniu instrukcji:

```cpp
int pole = dlugosc * szerokosc;
```

zmienna `pole` powinna mieć wartość `15`.

Po instrukcji `return pole;` wynik wraca do funkcji `main` i zostaje zapisany w zmiennej `wynik`.

## Jak wyjść z funkcji?

Jeżeli jesteś wewnątrz funkcji i nie chcesz przechodzić przez wszystkie pozostałe instrukcje po kolei, użyj `Debug -> Step out`.

Debugger dokończy aktualną funkcję i wróci do miejsca, z którego została wywołana.

## Kiedy tego użyć?

Używaj wejścia do funkcji, gdy podejrzewasz, że błąd powstaje w środku funkcji.

Używaj przejścia nad funkcją, gdy interesuje Cię tylko wynik jej działania.

## Kiedy wybrać coś innego?

Jeżeli problem dotyczy konkretnego miejsca w programie, ustaw punkt przerwania bliżej tego miejsca. Nie musisz krok po kroku przechodzić przez cały program od początku.

## Ćwiczenia

### Ćwiczenie 1

Przejdź przez program wiersz po wierszu od początku funkcji `main` do wypisania wyniku.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Ustaw punkt przerwania na pierwszym wierszu w funkcji `main`, a potem używaj `Debug -> Next line`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int a = 4;
    int b = 6;
    int suma = a + b;

    cout << "Suma: " << suma << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int a = 4;`,
- po wykonaniu `int a = 4;`: `a = 4`,
- po wykonaniu `int b = 6;`: `b = 6`,
- po wykonaniu `int suma = a + b;`: `suma = 10`.

</details>

### Ćwiczenie 2

Wejdź do funkcji dodającej dwie liczby i sprawdź wartości jej parametrów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Zatrzymaj program na wierszu z wywołaniem `dodaj(a, b)` i użyj `Debug -> Step into`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>

using namespace std;

int dodaj(int pierwsza, int druga)
{
    int wynik = pierwsza + druga;
    return wynik;
}

int main()
{
    int a = 7;
    int b = 8;

    int suma = dodaj(a, b);

    cout << "Suma: " << suma << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- punkt przerwania: `int suma = dodaj(a, b);`,
- po wejściu do funkcji: argumenty w sekcji `Function arguments` mają wartości `7` i `8`,
- po wykonaniu obliczenia: lokalna zmienna `wynik = 15`,
- po powrocie do `main`: `suma = 15`.

</details>

### Ćwiczenie 3

Porównaj przejście nad funkcją i wejście do funkcji. Wykonaj program dwa razy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Za pierwszym razem użyj `Debug -> Next line`. Za drugim razem użyj `Debug -> Step into`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>

using namespace std;

int podwoj(int liczba)
{
    int wynik = liczba * 2;
    return wynik;
}

int main()
{
    int wartosc = 9;
    int wynik = podwoj(wartosc);

    cout << "Wynik: " << wynik << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- przejście nad funkcją: debugger nie pokazuje wnętrza `podwoj`, ale `wynik` w `main` otrzymuje wartość `18`,
- wejście do funkcji: debugger pokazuje argument `liczba = 9` w sekcji `Function arguments`,
- wewnątrz funkcji zmienna lokalna `wynik` otrzymuje wartość `18`,
- oba warianty prowadzą do tego samego wyniku programu.

</details>

### Ćwiczenie 4

Wejdź do funkcji, a potem użyj wyjścia z funkcji, aby wrócić do `main` bez ręcznego wykonywania każdego kolejnego wiersza.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Po wejściu do funkcji użyj `Debug -> Step out`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>

using namespace std;

int obliczKoszt(int cena, int liczbaSztuk)
{
    int koszt = cena * liczbaSztuk;
    return koszt;
}

int main()
{
    int cena = 11;
    int liczbaSztuk = 5;

    int razem = obliczKoszt(cena, liczbaSztuk);

    cout << "Razem: " << razem << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- po wejściu do funkcji: `cena = 11`, `liczbaSztuk = 5` w sekcji `Function arguments`,
- po wyjściu z funkcji: wykonanie wraca do `main`,
- zmienna `razem` otrzymuje wartość `55`.

</details>

### Ćwiczenie 5

Znajdź błąd w funkcji obliczającej pole prostokąta. Program kompiluje się, ale wynik jest zły.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Wejdź do funkcji i sprawdź, jak powstaje zmienna `pole`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>

using namespace std;

int obliczPole(int dlugosc, int szerokosc)
{
    int pole = dlugosc + szerokosc;
    return pole;
}

int main()
{
    int bokA = 5;
    int bokB = 3;

    int wynik = obliczPole(bokA, bokB);

    cout << "Pole: " << wynik << '\n';

    return 0;
}
```

Oczekiwane obserwacje:

- po wejściu do funkcji: `dlugosc = 5`, `szerokosc = 3` w sekcji `Function arguments`,
- po wykonaniu obliczenia: `pole = 8`,
- oczekiwane pole prostokąta to `15`,
- błąd jest w operatorze `+`, który powinien być operatorem `*`.

Poprawna instrukcja:

```cpp
int pole = dlugosc * szerokosc;
```

</details>

## Podsumowanie

`Debug -> Next line` wykonuje wywołanie funkcji jako jeden krok. `Debug -> Step into` wchodzi do funkcji i pokazuje jej argumenty. `Debug -> Step out` pozwala wrócić do miejsca wywołania.
