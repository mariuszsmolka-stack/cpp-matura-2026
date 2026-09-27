---
layout: default
title: multiset - materiał nieobowiązkowy
---

# `multiset` - materiał nieobowiązkowy

> Materiał nieobowiązkowy. W większości prostych programów możesz nadal korzystać z `vector`.

## Krótkie wprowadzenie do problemu

`multiset` zachowuje powtórzenia i automatycznie porządkuje wartości.

## Wyjaśnienie idei prostym językiem

To podobne do `set`, ale ta sama wartość może wystąpić wiele razy.

## Składnia

```cpp
#include <set>

multiset<int> wartosci;
wartosci.insert(5);
wartosci.count(5);
wartosci.find(5);
wartosci.erase(5);
```

`erase(wartosc)` usuwa wszystkie wystąpienia. Aby usunąć jedno, użyj iteratora z `find()`.

## Przykład 1 - uporządkowane wyniki

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    multiset<int> wartosci = {12, 7, 12, 20, 7};

    for (int liczba : wartosci)
    {
        cout << liczba << " ";
    }

    cout << "\n";
    cout << wartosci.count(12) << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż wynik</summary>

```text
7 7 12 12 20
2
```

</details>

## Omówienie przykładu 1

Powtórzenia zostały zachowane i uporządkowane.

## Przykład 2 - usunięcie jednego wystąpienia

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    multiset<int> wartosci = {10, 20, 10, 30, 10};

    auto it = wartosci.find(10);
    if (it != wartosci.end())
    {
        wartosci.erase(it);
    }

    for (int liczba : wartosci)
    {
        cout << liczba << " ";
    }

    cout << "\n";

    wartosci.erase(10);

    for (int liczba : wartosci)
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
10 10 20 30
20 30
```

</details>

## Kiedy tego użyć?

Gdy powtórzenia są ważne i potrzebujesz stałego uporządkowania.

## Kiedy wystarczy vector?

Dla prostego zbierania danych `vector` jest czytelniejszy. Później można użyć `sort()`.

## Kiedy wybrać coś innego?

Bez powtórzeń użyj `set`, z kluczem użyj `map`.

## Ćwiczenia

Dane wejściowe mają opisany format. Jeśli polecenie nie wymaga odrzucenia wartości spoza zakresu, przyjmij, że spełniają podane ograniczenia. W wynikach wypisujących listy dodatkowa spacja na końcu wiersza nie ma znaczenia.

### Ćwiczenie 1. Jeden czy wszystkie?

Zapisz kolejne stany i wartości `count(4)` po każdej operacji:

```cpp
multiset<int> wyniki = {4, 2, 4};
wyniki.insert(4);
auto pozycja = wyniki.find(4);
wyniki.erase(pozycja);
wyniki.erase(4);
```

Dlaczego użycie `pozycja` jest tutaj poprawne?

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Rozróżnij przeciążenie `erase` przyjmujące iterator od wersji przyjmującej wartość.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Początkowo `{2, 4, 4}`, licznik 2. Po wstawieniu `{2, 4, 4, 4}`, licznik 3. Samo `find` niczego nie zmienia. Po usunięciu przez iterator `{2, 4, 4}`, licznik 2. Po `erase(4)` zostaje `{2}`, licznik 0. `find(4)` wskazuje istniejący element, bo wcześniej wstawiono 4.

</details>

### Ćwiczenie 2. Ile egzemplarzy?

Wczytaj `n` (`0–100`), potem `n` liczb oraz szukaną wartość. Zapisz liczby w `multiset` i wypisz liczbę wystąpień szukanej wartości. Dla pustego kontenera i dla nieobecnej wartości wypisz zero.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

W tym kontenerze wynik `count()` może być większy od jednego.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;
    multiset<int> wartosci;
    for (int indeks = 0; indeks < liczbaElementow; indeks++)
    {
        int liczba;
        cin >> liczba;
        wartosci.insert(liczba);
    }
    int szukana;
    cin >> szukana;
    cout << wartosci.count(szukana) << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 2</summary>

Dane wejściowe:

```text
4
5 2 5 5
5
```

Wynik:

```text
3
```

Dane wejściowe:

```text
0
5
```

Wynik:

```text
0
```

Dane wejściowe:

```text
1
2
5
```

Wynik:

```text
0
```

</details>

### Ćwiczenie 3. Wydaj jeden egzemplarz

Magazyn zawiera kody `{10, 10, 20}`. Błędne `magazyn.erase(kod)` wydaje wszystkie egzemplarze zamiast jednego. Napisz poprawiony program: wczytaj kod, usuń najwyżej jeden egzemplarz i wypisz `Wydano.` albo `Brak towaru.`. W drugim wierszu wypisz liczbę pozostałych egzemplarzy tego kodu. Nie używaj iteratora `end()` do usuwania.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Wyszukaj konkretne wystąpienie i sprawdź, czy wyszukiwanie się powiodło.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    multiset<int> magazyn = {10, 10, 20};
    int kod;
    cin >> kod;
    auto pozycja = magazyn.find(kod);
    if (pozycja != magazyn.end())
    {
        magazyn.erase(pozycja);
        cout << "Wydano.\n";
    }
    else
    {
        cout << "Brak towaru.\n";
    }
    cout << magazyn.count(kod) << "\n";
    return 0;
}
```

</details>

<details markdown="1">
<summary>Pokaż przykładowe dane i wynik do ćwiczenia 3</summary>

Dane wejściowe:

```text
10
```

Wynik:

```text
Wydano.
1
```

Dane wejściowe:

```text
99
```

Wynik:

```text
Brak towaru.
0
```

Dane wejściowe:

```text
20
```

Wynik:

```text
Wydano.
0
```

</details>

### Ćwiczenie 4. Wybór i test rozstrzygający

Rozważ dane `5, 3, 5`. Wybierz spośród `vector`, `set` i `multiset` kontener dla: historii ocen; różnych ocen rosnąco; wszystkich ocen stale uporządkowanych. Podaj zawartość każdego wybranego kontenera. Następnie przygotuj test, który odróżni usunięcie jednego wystąpienia 5 od usunięcia wszystkich. Wyjaśnij, dlaczego test z pojedynczą piątką nie wystarczy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Dobry test musi spowodować różne wyniki dwóch porównywanych operacji.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Historia => `vector`: `{5, 3, 5}`. Różne oceny => `set`: `{3, 5}`. Wszystkie rosnąco => `multiset`: `{3, 5, 5}`. Dla tego ostatniego usunięcie jednego 5 daje `{3, 5}`, a wszystkich => `{3}`. Przy jednej piątce obie operacje dadzą ten sam wynik, więc test nie ujawni pomyłki.

</details>

## Typowe błędy

- Mylenie `multiset` z `set`.
- Przypadkowe usunięcie wszystkich kopii przez `erase(wartosc)`.
- Używanie `multiset`, gdy wystarczy `vector`.

## Podsumowanie

`multiset` to dodatek do uporządkowanych danych z powtórzeniami.
