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

### Ćwiczenie 1

Wczytaj wyniki do `multiset` i wypisz rosnąco.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Użyj `insert()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

`multiset` zachowuje powtórzenia.

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

</details>
### Ćwiczenie 2

Policz wystąpienia podanej wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Użyj `count()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

W `multiset` wynik może być większy niż 1.

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

</details>
### Ćwiczenie 3

Usuń tylko jedno wystąpienie wartości.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Użyj `find()` i `erase(iterator)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Iterator usuwa jeden element.

```cpp
#include <iostream>
#include <set>

using namespace std;

int main()
{
    multiset<int> wartosci = {5, 5, 5, 8};

    int liczba;
    cin >> liczba;

    auto it = wartosci.find(liczba);
    if (it != wartosci.end())
    {
        wartosci.erase(it);
    }

    for (int wartosc : wartosci)
    {
        cout << wartosc << " ";
    }

    cout << "\n";
    return 0;
}
```

</details>
### Ćwiczenie 4

Uzasadnij, kiedy wystarczy `vector` dla ocen.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Kolejność ocen może być ważna.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Wybrano vector dla zachowania kolejności.

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> oceny = {5, 4, 5, 3};

    for (int liczba : oceny)
    {
        cout << liczba << " ";
    }

    cout << "\n";
    return 0;
}
```

</details>

## Typowe błędy

- Mylenie `multiset` z `set`.
- Przypadkowe usunięcie wszystkich kopii przez `erase(wartosc)`.
- Używanie `multiset`, gdy wystarczy `vector`.

## Podsumowanie

`multiset` to dodatek do uporządkowanych danych z powtórzeniami.
