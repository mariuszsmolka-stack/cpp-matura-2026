---
layout: default
title: unordered_set i unordered_map - materiał nieobowiązkowy
---

# `unordered_set` i `unordered_map` - materiał nieobowiązkowy

> Materiał nieobowiązkowy. Najpierw dobrze opanuj `vector`, `set` i `map`.

## Krótkie wprowadzenie do problemu

Kontenery `unordered` nie gwarantują kolejności, ale przeciętnie szybko wyszukują dane.

## Wyjaśnienie idei prostym językiem

`unordered_set` przypomina `set`, a `unordered_map` przypomina `map`, ale bez uporządkowania. Kolejność elementów może być inna przy innym uruchomieniu lub w innym kompilatorze.

## Składnia

```cpp
#include <unordered_set>
#include <unordered_map>

unordered_set<int> identyfikatory;
unordered_map<string, int> licznik;
```

## Przykład 1 - sprawdzanie identyfikatora

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    unordered_set<int> identyfikatory = {101, 205, 330};

    int liczba;
    cin >> liczba;

    cout << (identyfikatory.count(liczba) ? "Jest.\n" : "Nie ma.\n");
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
205
```

Wynik:

```text
Jest.
```

</details>

## Omówienie przykładu 1

Kolejność identyfikatorów nie jest potrzebna.

## Przykład 2 - liczba różnych kluczy

```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    unordered_map<int, int> licznik;

    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        licznik[liczba]++;
    }

    cout << "Roznych: " << licznik.size() << "\n";
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
6
4 2 4 7 2 4
```

Wynik:

```text
Roznych: 3
```

</details>

Nie wypisujemy zawartości, bo kolejność nie jest gwarantowana.

## Przykład 3 - wykrywanie duplikatu

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    unordered_set<int> liczby;
    bool znalezionoDuplikat = false;

    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;

        if (liczby.count(liczba))
        {
            znalezionoDuplikat = true;
        }
        else
        {
            liczby.insert(liczba);
        }
    }

    cout << (znalezionoDuplikat ? "Duplikat.\n" : "Brak duplikatu.\n");
    return 0;
}
```
<details markdown="1">
<summary>Pokaż przykładowe dane i wynik</summary>

Dane wejściowe:

```text
5
8 3 4 8 9
```

Wynik:

```text
Duplikat.
```

</details>

## Kiedy tego użyć?

Gdy kolejność nie ma znaczenia i wykonujesz bardzo wiele wyszukiwań. Przeciętnie jest szybko, ale najgorszy przypadek może być `O(n)`.

## Kiedy wystarczy vector?

Dla małych danych zwykle wystarczy `vector` i pętla.

## Kiedy wybrać coś innego?

Gdy potrzebny jest porządek, wybierz `set` albo `map`. Gdy potrzebujesz indeksów, wybierz `vector`.

## Ćwiczenia

### Ćwiczenie 1

Sprawdź identyfikator w `unordered_set`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `count()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Kolejność nie jest potrzebna.

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    unordered_set<int> identyfikatory = {101, 205, 330};

    int liczba;
    cin >> liczba;

    cout << (identyfikatory.count(liczba) ? "Jest.\n" : "Nie ma.\n");
    return 0;
}
```

</details>
### Ćwiczenie 2

Policz liczbę różnych wartości bez wypisywania kolejności.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj `unordered_set` i `size()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Nie obiecujemy kolejności.

```cpp
#include <iostream>
#include <unordered_set>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    unordered_set<int> liczby;

    for (int i = 0; i < liczbaElementow; i++)
    {
        int liczba;
        cin >> liczba;
        liczby.insert(liczba);
    }

    cout << liczby.size() << "\n";
    return 0;
}
```

</details>
### Ćwiczenie 3

Policz różne słowa przez `unordered_map`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Nie wypisuj kluczy w ustalonej kolejności.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Kolejność kluczy nie jest częścią wyniku.

```cpp
#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

int main()
{
    int liczbaElementow;
    cin >> liczbaElementow;

    unordered_map<string, int> licznikSlow;

    for (int i = 0; i < liczbaElementow; i++)
    {
        string slowo;
        cin >> slowo;
        licznikSlow[slowo]++;
    }

    cout << "Roznych slow: " << licznikSlow.size() << "\n";
    return 0;
}
```

</details>
### Ćwiczenie 4

Pokaż, kiedy lepszy jest `set`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Jeżeli wynik ma być rosnący, użyj `set`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Wybrano set, bo potrzebny jest porządek.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    set<int> liczby = {8, 3, 8, 1};

    for (int liczba : liczby)
    {
        cout << liczba << " ";
    }

    cout << "\n";
    return 0;
}
```

</details>

## Typowe błędy

- Oczekiwanie uporządkowanej kolejności.
- Podawanie konkretnej kolejności jako gwarantowanej.
- Używanie `unordered` tam, gdzie prostszy jest `vector`.

## Podsumowanie

Kontenery `unordered` są dodatkiem do wielu wyszukiwań bez potrzeby porządku.
