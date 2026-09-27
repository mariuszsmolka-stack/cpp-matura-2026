---
layout: default
title: Operacje na zbiorach
---

# Operacje na zbiorach

## Krótkie wprowadzenie do problemu

Zbiory można łączyć i porównywać. To pomaga przy grupach uczniów, kodach produktów albo literach napisów.

## Wyjaśnienie idei prostym językiem

Dla `A = {1, 2, 4, 7}` i `B = {2, 3, 4, 8}` suma to `{1, 2, 3, 4, 7, 8}`, część wspólna to `{2, 4}`, różnica `A - B` to `{1, 7}`, a różnica symetryczna to elementy tylko z jednego zbioru.

## Składnia

```cpp
if (zbiorB.count(liczba) == 1)
{
    cout << liczba << " ";
}
```

## Przykład 1 - suma zbiorów

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> zbiorA = {1, 2, 4, 7};
    set<int> zbiorB = {2, 3, 4, 8};
    set<int> suma;

    for (int liczba : zbiorA)
    {
        suma.insert(liczba);
    }

    for (int liczba : zbiorB)
    {
        suma.insert(liczba);
    }

    for (int liczba : suma)
    {
        cout << liczba << " ";
    }

    cout << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 2 3 4 7 8
```

</details>

## Omówienie przykładu 1

Dodajemy elementy obu zbiorów do trzeciego `set`.

## Przykład 2 - część wspólna

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> zbiorA = {1, 2, 4, 7};
    set<int> zbiorB = {2, 3, 4, 8};

    for (int liczba : zbiorA)
    {
        if (zbiorB.count(liczba))
        {
            cout << liczba << " ";
        }
    }

    cout << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
2 4
```

</details>

## Przykład 3 - różnica i podzbiór

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> zbiorA = {1, 2, 4, 7};
    set<int> zbiorB = {2, 3, 4, 8};

    for (int liczba : zbiorA)
    {
        if (!zbiorB.count(liczba))
        {
            cout << liczba << " ";
        }
    }

    cout << "\n";

    set<int> wymagane = {2, 4};
    bool ok = true;

    for (int liczba : wymagane)
    {
        if (!zbiorA.count(liczba))
        {
            ok = false;
        }
    }

    cout << (ok ? "Podzbior.\n" : "Braki.\n");
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
1 7
Podzbior.
```

</details>

## Kiedy tego użyć?

Gdy porównujesz dwie grupy danych.

## Kiedy wystarczy vector?

Dla kilku elementów i jednego porównania zwykłe pętle po `vector` mogą być prostsze.

## Kiedy wybrać coś innego?

Dla danych klucz => wartość wybierz `map`.

## Ćwiczenia

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Dwie listy uczestników

Dla `A = {1, 3, 5}` i `B = {3, 4}` ręcznie podaj: sumę, część wspólną, różnicę `A - B` i różnicę symetryczną. Dopasuj operację do dwóch potrzeb: „osoby zapisane na oba zajęcia” oraz „osoby zapisane na dokładnie jedne zajęcia”.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Oddziel elementy wspólne od tych należących tylko do jednej listy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Suma: `{1, 3, 4, 5}`. Część wspólna: `{3}`. Różnica `A - B`: `{1, 5}`. Różnica symetryczna: `{1, 4, 5}`. Na oba zajęcia => część wspólna. Na dokładnie jedne => różnica symetryczna.

</details>

### Ćwiczenie 2. Uzupełnij sumę

Dokończ fragment i zapisz kompletny program wypisujący rosnąco sumę zbiorów. Zastąp komentarz potrzebnymi operacjami.

```cpp
set<int> zbiorA = {2, 6};
set<int> zbiorB = {6, 9};
set<int> suma = zbiorA;
// Dołącz elementy zbiorB.
```

Powtórzony element ma wystąpić w wyniku tylko raz.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Każdy element drugiego zbioru rozpatrz niezależnie. Zbiór wynikowy sam pilnuje unikalności.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> zbiorA = {2, 6};
    set<int> zbiorB = {6, 9};
    set<int> suma = zbiorA;
    for (int liczba : zbiorB)
    {
        suma.insert(liczba);
    }
    for (int liczba : suma)
    {
        cout << liczba << " ";
    }
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Program nie pobiera danych. Wynik:

```text
2 6 9
```

</details>

### Ćwiczenie 3. Czy znaleziono część wspólną?

Fragment ma wypisywać część wspólną, ale użyto błędnego warunku:

```cpp
for (int liczba : zbiorA)
{
    if (!zbiorB.count(liczba))
    {
        cout << liczba << " ";
    }
}
```

Nazwij operację, którą faktycznie wykonuje. Popraw warunek i napisz kompletny program dla `A = {1, 2}`, `B = {2, 3}`. Jeśli część wspólna jest pusta, wypisz `Brak wspólnych.`. Przetestuj też zbiory rozłączne i pusty `A`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

W pętli już wiadomo, że liczba należy do A. Pozostaje ustalić, kiedy powinna należeć do wyniku.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Błędny fragment oblicza różnicę `A - B`. Część wspólna wymaga obecności elementu również w B.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> zbiorA = {1, 2};
    set<int> zbiorB = {2, 3};
    bool znaleziono = false;
    for (int liczba : zbiorA)
    {
        if (zbiorB.count(liczba))
        {
            cout << liczba << " ";
            znaleziono = true;
        }
    }
    if (!znaleziono)
    {
        cout << "Brak wspólnych.";
    }
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Program nie pobiera danych. Wynik:

```text
2
```

</details>

### Ćwiczenie 4. Brakujące wymagania

Dostępne kody produktów to `{2, 4, 7}`. Wczytaj liczbę wymaganych kodów `n` (`0–100`), a potem te kody. Wypisz `Komplet.`, jeśli wszystkie wymagane kody są dostępne. W przeciwnym razie wypisz brakujące kody rosnąco, każdy tylko raz. Dla pustej listy wymagań wypisz `Komplet.`. Nazwij użyte operacje na zbiorach.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Najpierw zbierz wymagania, potem sprawdź, których nie ma w dostępnych. Pusta lista wymagań nie tworzy braków.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Braki to różnica `wymagane - dostępne`. Jeśli jest pusta, wymagane stanowią podzbiór dostępnych.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> dostepne = {2, 4, 7};
    set<int> wymagane;
    int liczbaKodow;
    cin >> liczbaKodow;
    for (int indeks = 0; indeks < liczbaKodow; indeks++)
    {
        int kod;
        cin >> kod;
        wymagane.insert(kod);
    }
    bool komplet = true;
    for (int kod : wymagane)
    {
        if (!dostepne.count(kod))
        {
            cout << kod << " ";
            komplet = false;
        }
    }
    if (komplet)
    {
        cout << "Komplet.";
    }
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 4</summary>

Dane wejściowe:

```text
4
9 2 9 8
```

Wynik:

```text
8 9
```

Dane wejściowe:

```text
0
```

Wynik:

```text
Komplet.
```

Dane wejściowe:

```text
2
2 7
```

Wynik:

```text
Komplet.
```

</details>

### Ćwiczenie 5. Zmiany między dwiema listami — ćwiczenie trudniejsze

Porównaj listę zapisanych z wczoraj i dzisiaj. Wczytaj liczbę `n` i `n` wczorajszych identyfikatorów, potem liczbę `m` i `m` dzisiejszych identyfikatorów (`0–100` na każdej liście). Wypisz rosnąco osoby obecne na dokładnie jednej liście. Powtórzenia na jednej liście nie zmieniają wyniku. Gdy listy zawierają te same osoby, wypisz `Bez zmian.`. Dobierz właściwą operację na zbiorach.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Osobno znajdź osoby tylko na starej liście i tylko na nowej. Połącz oba wyniki.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Potrzebna jest różnica symetryczna. Zwykła różnica pominęłaby jeden kierunek zmian.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    int liczbaWczoraj, liczbaDzis;
    set<int> wczoraj, dzis, zmiany;
    cin >> liczbaWczoraj;
    for (int indeks = 0; indeks < liczbaWczoraj; indeks++)
    {
        int numer;
        cin >> numer;
        wczoraj.insert(numer);
    }
    cin >> liczbaDzis;
    for (int indeks = 0; indeks < liczbaDzis; indeks++)
    {
        int numer;
        cin >> numer;
        dzis.insert(numer);
    }
    for (int numer : wczoraj)
    {
        if (!dzis.count(numer)) zmiany.insert(numer);
    }
    for (int numer : dzis)
    {
        if (!wczoraj.count(numer)) zmiany.insert(numer);
    }
    if (zmiany.empty())
    {
        cout << "Bez zmian.";
    }
    else
    {
        for (int numer : zmiany) cout << numer << " ";
    }
    cout << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 5</summary>

Dane wejściowe:

```text
3
1 3 5
2
3 4
```

Wynik:

```text
1 4 5
```

Dane wejściowe:

```text
2
7 7
1
7
```

Wynik:

```text
Bez zmian.
```

Dane wejściowe:

```text
0
2
9 2
```

Wynik:

```text
2 9
```

</details>

## Typowe błędy

- Mylenie sumy zbiorów z dodawaniem liczb.
- Sprawdzanie podzbioru tylko dla pierwszego elementu.
- Mylenie `A - B` z `B - A`.

## Podsumowanie

Operacje na zbiorach to zwykle pętla i sprawdzenie `count()`.
