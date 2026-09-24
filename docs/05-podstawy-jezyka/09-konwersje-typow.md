---
layout: default
title: Konwersje typów
---

# Konwersje typów

## Cel lekcji

Zrozumiesz, czym jest konwersja typu w C++ i kiedy trzeba świadomie zmienić sposób traktowania wartości.

Po tej lekcji będziesz umieć:

- wyjaśnić, czym jest konwersja typu,
- odróżnić konwersję niejawną od jawnego rzutowania,
- użyć prostego zapisu `(double)` oraz `(int)`,
- wyjaśnić problem dzielenia `int / int`,
- zamienić wynik dzielenia liczb całkowitych na wynik rzeczywisty,
- przewidzieć, co stanie się po zamianie `double` na `int`.

## Czym jest konwersja typu?

Konwersja typu oznacza zmianę sposobu traktowania wartości przez program.

Przykład z życia: liczba `17` może oznaczać liczbę punktów. Ale gdy liczymy średnią, często potrzebujemy wyniku z częścią po kropce, na przykład `4.25`. Wtedy program musi potraktować jedną z wartości jak liczbę rzeczywistą.

W C++ trzeba uważać, bo typ wartości wpływa na wynik działania.

## Konwersja niejawna

Konwersja niejawna dzieje się automatycznie. Programista jej nie zapisuje, ale kompilator może ją wykonać.

Przykład:

```cpp
int liczba = 5;
double wynik = liczba;
```

Zmienna `liczba` ma typ `int`. Zmienna `wynik` ma typ `double`. C++ może automatycznie zapisać liczbę całkowitą jako liczbę rzeczywistą.

Wynik będzie wyglądał tak, jakby `5` stało się `5.0`.

## Jawne rzutowanie

Jawne rzutowanie oznacza, że programista wyraźnie pisze, jakiego typu chce użyć.

W tej lekcji używamy prostego zapisu:

```cpp
(double)wartosc
(int)wartosc
```

Czytamy to tak:

- potraktuj `wartosc` jako `double`,
- albo potraktuj `wartosc` jako `int`.

Taki zapis przydaje się wtedy, gdy chcemy jasno pokazać, że w tym miejscu zmieniamy typ wartości.

## Problem dzielenia liczb całkowitych

Popatrz na program:

```cpp
#include <iostream>

using namespace std;

int main()
{
    int sumaPunktow = 17;
    int liczbaOcen = 4;

    double srednia = sumaPunktow / liczbaOcen;

    cout << "Srednia: " << srednia << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Srednia: 4
```

</details>

Można się spodziewać wyniku `4.25`, ale program wypisze `4`.

Dlaczego?

```text
17 / 4 => 4
```

Najpierw wykonywane jest dzielenie dwóch liczb typu `int`. Wynik tego dzielenia też jest traktowany jak liczba całkowita. Część po kropce znika. Dopiero potem wynik `4` trafia do zmiennej `srednia` typu `double`.

Samo zapisanie wyniku w zmiennej `double` nie wystarczy, jeśli wcześniej wykonano dzielenie całkowite.

## Poprawne dzielenie z wynikiem rzeczywistym

Trzeba sprawić, aby przynajmniej jedna wartość w dzieleniu była typu `double`.

```cpp
double srednia = (double)sumaPunktow / liczbaOcen;
```

Pełny program:

```cpp
#include <iostream>

using namespace std;

int main()
{
    int sumaPunktow = 17;
    int liczbaOcen = 4;

    double srednia = (double)sumaPunktow / liczbaOcen;

    cout << "Srednia: " << srednia << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Srednia: 4.25
```

</details>

Teraz działanie wygląda tak:

```text
17.0 / 4 => 4.25
```

Zapis `(double)sumaPunktow` mówi: przed dzieleniem potraktuj `sumaPunktow` jak liczbę rzeczywistą.

## Konwersja z double na int

Czasem chcemy zamienić liczbę rzeczywistą na całkowitą.

Przykład:

```cpp
#include <iostream>

using namespace std;

int main()
{
    double cena = 19.99;
    int pelneZlote = (int)cena;

    cout << "Cena: " << cena << "\n";
    cout << "Pelne zlote: " << pelneZlote << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Cena: 19.99
Pelne zlote: 19
```

</details>

Konwersja działa tak:

```text
19.99 => 19
```

Ważne: to nie jest zaokrąglanie. Wynik nie będzie równy `20`. Część po kropce zostaje odcięta.

## Utrata danych

Przy konwersji z `double` na `int` można stracić część informacji.

`19.99` zawiera grosze. Po konwersji na `int` zostaje tylko `19`.

Dlatego taką konwersję trzeba robić świadomie. Jest przydatna, ale może zmienić wynik programu.

## Kiedy rzutowanie jest naprawdę potrzebne?

Rzutowanie jest potrzebne wtedy, gdy bez niego C++ wykona działanie inaczej, niż oczekujemy.

Najczęstszy przykład na tym poziomie to dzielenie dwóch liczb całkowitych, gdy chcemy otrzymać wynik rzeczywisty.

Nie trzeba rzutować wszystkiego. Jeżeli od początku używasz typu `double`, rzutowanie często nie jest potrzebne.

## Jak czytać taki kod?

Kod:

```cpp
double srednia = (double)sumaPunktow / liczbaOcen;
```

Można przeczytać tak:

Najpierw potraktuj `sumaPunktow` jako liczbę rzeczywistą. Potem podziel przez `liczbaOcen`. Wynik zapisz w zmiennej `srednia`.

Kod:

```cpp
int pelneZlote = (int)cena;
```

Można przeczytać tak:

Potraktuj `cena` jako liczbę całkowitą i zapisz wynik w zmiennej `pelneZlote`.

## Typowe błędy

- Oczekiwanie, że `17 / 4` da `4.25`.
- Myślenie, że typ zmiennej po lewej stronie zawsze decyduje o całym działaniu.
- Rzutowanie w złym miejscu, na przykład dopiero po wykonaniu dzielenia.
- Myślenie, że `(int)19.99` daje `20`.
- Brak świadomości, że przy zamianie `double` na `int` tracimy część po kropce.
- Używanie rzutowania tam, gdzie wystarczy dobrze dobrać typ zmiennej.
- Mylenie konwersji typu z formatowaniem liczby na ekranie.

## Ćwiczenia

### 1. Średnia dwóch liczb całkowitych

Wczytaj dwie liczby całkowite. Oblicz ich średnią jako liczbę rzeczywistą.

Dla danych:

```text
5
8
```

wynik powinien zawierać wartość:

<details markdown="1">
<summary>Pokaż oczekiwany wynik</summary>

```text
6.5
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Najpierw oblicz sumę liczb. Potem spraw, aby dzielenie nie było dzieleniem całkowitym. Możesz użyć `(double)` przy sumie.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int pierwszaLiczba;
    int drugaLiczba;

    cout << "Podaj pierwsza liczbe: ";
    cin >> pierwszaLiczba;

    cout << "Podaj druga liczbe: ";
    cin >> drugaLiczba;

    int suma = pierwszaLiczba + drugaLiczba;
    double srednia = (double)suma / 2;

    cout << "Srednia: " << srednia << "\n";

    return 0;
}
```

</details>

### 2. Cena jednej sztuki

Wczytaj całkowity koszt zakupów oraz liczbę sztuk. Oblicz cenę jednej sztuki jako liczbę rzeczywistą.

Dla danych:

```text
100
6
```

program powinien pokazać wynik z częścią ułamkową.

<details markdown="1">
<summary>Pokaż oczekiwany wynik</summary>

```text
Cena jednej sztuki: 16.6667
```

</details>

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Jeżeli obie wartości są typu `int`, zwykłe dzielenie odetnie część po kropce. Przed dzieleniem zamień koszt na `double`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    int kosztCalkowity;
    int liczbaSztuk;

    cout << "Podaj calkowity koszt: ";
    cin >> kosztCalkowity;

    cout << "Podaj liczbe sztuk: ";
    cin >> liczbaSztuk;

    double cenaJednejSztuki = (double)kosztCalkowity / liczbaSztuk;

    cout << "Cena jednej sztuki: " << cenaJednejSztuki << "\n";

    return 0;
}
```

</details>

### 3. Zamiana double na int

Utwórz zmienną typu `double` z wartością `8.75`. Zamień ją na `int` i przewidź wynik.

<details markdown="1">
<summary>Pokaż wskazówkę</summary>

Zapis `(int)wartosc` odcina część po kropce. Nie zaokrągla liczby.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>

using namespace std;

int main()
{
    double wartosc = 8.75;
    int poKonwersji = (int)wartosc;

    cout << "Przed konwersja: " << wartosc << "\n";
    cout << "Po konwersji: " << poKonwersji << "\n";

    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
Przed konwersja: 8.75
Po konwersji: 8
```

</details>

## Podsumowanie

Konwersja typu zmienia sposób traktowania wartości przez program. Przy dzieleniu dwóch liczb całkowitych wynik jest całkowity. Jeżeli chcesz otrzymać wynik rzeczywisty, trzeba przed dzieleniem potraktować jedną z wartości jako `double`. Konwersja z `double` na `int` odcina część po kropce i może spowodować utratę danych.
