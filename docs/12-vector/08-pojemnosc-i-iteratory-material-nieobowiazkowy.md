---
layout: default
title: Pojemność i iteratory - materiał nieobowiązkowy
---

# Pojemność i iteratory - materiał nieobowiązkowy

> **Materiał nieobowiązkowy**
>
> Możesz pominąć tę lekcję i przejść do następnego rozdziału.

[Przejdź do rozdziału 13 - Zbiory i kontenery asocjacyjne](../13-zbiory-i-kontenery/)

## Krótkie wprowadzenie do problemu

`vector` może mieć rozmiar widoczny dla programu oraz pojemność przygotowaną na przyszłe elementy.

## Proste wyjaśnienie idei

`size()` mówi, ile elementów jest używanych. `capacity()` mówi, ile miejsc `vector` ma przygotowanych bez kolejnego powiększania pamięci.

## Składnia

```cpp
liczby.size();
liczby.capacity();
liczby.reserve(100);
liczby.begin();
liczby.end();
```

Iterator można traktować jako sposób wskazania elementu w kontenerze.

## Przykład 1 - obserwowanie pojemności

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby;

    for (int i = 1; i <= 5; i++)
    {
        liczby.push_back(i);
        cout << "size: " << liczby.size();
        cout << ", capacity: " << liczby.capacity() << "\n";
    }

    return 0;
}
```

<details markdown="1">
<summary>Pokaż przykładowy wynik</summary>

```text
size: 1, capacity: 1
size: 2, capacity: 2
size: 3, capacity: 4
size: 4, capacity: 4
size: 5, capacity: 8
```

</details>

Wynik `capacity()` może różnić się między kompilatorami. Ważna jest idea: pojemność rośnie automatycznie.

## Omówienie programu krok po kroku

1. Program tworzy pusty `vector`.
2. Dopisuje kolejne liczby przez `push_back()`.
3. Po każdym dopisaniu wypisuje `size()` i `capacity()`.
4. `size()` rośnie o `1`.
5. `capacity()` może rosnąć skokowo.

## Przykład 2 - iteratory

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {1, 2, 3};

    for (vector<int>::iterator it = liczby.begin(); it != liczby.end(); it++)
    {
        *it = *it + 10;
    }

    for (int liczba : liczby)
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
11 12 13
```

</details>

## Kiedy tego użyć?

Ten materiał jest przydatny, gdy chcesz lepiej rozumieć, dlaczego `vector` czasem rezerwuje więcej miejsca niż aktualnie używa.

## Kiedy wybrać coś innego?

W większości podstawowych zadań wystarczy `size()`, `push_back()` i zwykłe pętle. Iteratory nie są potrzebne na początku nauki.

## Typowe błędy

- Mylenie `size()` z `capacity()`.
- Zakładanie, że `reserve()` tworzy elementy.
- Używanie iteratora po `push_back()`, `insert()` albo `erase()`, które mogły go unieważnić.
- Zapomnienie o `*it` przy odczycie wartości.
- Używanie iteratorów, gdy zwykła pętla jest prostsza.

## Ćwiczenia

### Ćwiczenie 1

Dopisuj elementy do `vector` i obserwuj `size()` oraz `capacity()`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Po każdym `push_back()` wypisz oba wyniki.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby;

    for (int i = 0; i < 6; i++)
    {
        liczby.push_back(i);
        cout << liczby.size() << " " << liczby.capacity() << "\n";
    }

    return 0;
}
```

</details>

### Ćwiczenie 2

Użyj `reserve(10)`, a potem dopisz pięć elementów.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

`reserve()` zwiększa pojemność, ale nie zmienia `size()`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby;
    liczby.reserve(10);

    for (int i = 1; i <= 5; i++) liczby.push_back(i);

    cout << "size: " << liczby.size() << "\n";
    cout << "capacity: " << liczby.capacity() << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 3

Przejdź po `vector` za pomocą iteratora i wypisz elementy.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Pętla trwa od `begin()` do `end()`. Wartość odczytujesz przez `*it`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {4, 8, 12};

    for (vector<int>::iterator it = liczby.begin(); it != liczby.end(); it++)
    {
        cout << *it << " ";
    }
    cout << "\n";

    return 0;
}
```

</details>

### Ćwiczenie 4

Zwiększ każdy element o `2` za pomocą iteratora.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Do zmiany elementu użyj `*it = *it + 2;`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> liczby = {1, 2, 3};

    for (vector<int>::iterator it = liczby.begin(); it != liczby.end(); it++)
    {
        *it = *it + 2;
    }

    for (int liczba : liczby) cout << liczba << " ";
    cout << "\n";

    return 0;
}
```

</details>

## Podsumowanie

`capacity()` pokazuje przygotowane miejsce, a `size()` liczbę używanych elementów. Iteratory są dodatkowym sposobem przechodzenia po `vector`, ale w podstawowych zadaniach zwykłe pętle są często prostsze.
