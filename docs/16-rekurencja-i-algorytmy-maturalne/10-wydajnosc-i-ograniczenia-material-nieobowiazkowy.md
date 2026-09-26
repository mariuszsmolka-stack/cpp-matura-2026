---
layout: default
title: Wydajność i ograniczenia - materiał nieobowiązkowy
---

# Wydajność i ograniczenia - materiał nieobowiązkowy

> Materiał nieobowiązkowy. Możesz pominąć tę lekcję bez utraty ciągłości materiału podstawowego.

## Problem

Rekurencja bywa bardzo czytelna, ale każde wywołanie funkcji ma koszt. Program musi zapamiętać aktywne wywołania, ich argumenty, zmienne lokalne i miejsca powrotu. Gdy wywołań jest bardzo dużo, może zabraknąć pamięci stosu.

Nie ma jednej stałej liczby wywołań, po której zawsze następuje przepełnienie stosu. Zależy to od środowiska, programu i dostępnej pamięci.

## Rekurencja liniowa i rozgałęziająca

Rekurencja liniowa tworzy zwykle jeden dalszy krok, np. `suma(n - 1)`. Głębokość rośnie mniej więcej wraz z argumentem.

Rekurencja rozgałęziająca może tworzyć kilka wywołań z jednego wywołania, np. `fib(n - 1) + fib(n - 2)`. Wtedy liczba wywołań może rosnąć bardzo szybko.

## Trzy podejścia do Fibonacciego

| Rozwiązanie                    | Czas                 | Dodatkowa pamięć       | Uwagi                               |
| ------------------------------ | -------------------- | ---------------------- | ----------------------------------- |
| prosta rekurencja Fibonacciego | bardzo szybko rośnie | stos wywołań           | wielokrotnie liczy te same wartości |
| rekurencja z pamięcią          | liniowy względem `n` | tablica wyników i stos | każdy wynik jest liczony raz        |
| pętla                          | liniowy względem `n` | stała lub niewielka    | zwykle najprostsza dla samego ciągu |

## Rekurencja z pamięcią

Wartość `-1` w tablicy `pamiec` oznacza, że wynik nie został jeszcze policzony. Funkcja najpierw sprawdza, czy wynik jest już zapisany. Jeśli tak, zwraca go bez ponownego rozbijania problemu.

```cpp
#include <iostream>
#include <vector>

using namespace std;

long long fibMemo(int n, vector<long long> &pamiec)
{
    if (n < 0)
    {
        return -1;
    }

    if (n == 0)
    {
        return 0;
    }

    if (n == 1)
    {
        return 1;
    }

    if (pamiec[n] != -1)
    {
        return pamiec[n];
    }

    pamiec[n] = fibMemo(n - 1, pamiec) + fibMemo(n - 2, pamiec);
    return pamiec[n];
}

int main()
{
    int n = 10;

    if (n < 0)
    {
        cout << "Błędne dane\n";
        return 0;
    }

    vector<long long> pamiec(n + 1, -1);
    cout << fibMemo(n, pamiec) << "\n";

    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
55
```

</details>

## Wersja iteracyjna

Do samego obliczenia `fib(n)` pętla jest zwykle najprostsza:

```cpp
#include <iostream>

using namespace std;

long long fibPetla(int n)
{
    if (n < 0)
    {
        return -1;
    }

    if (n == 0)
    {
        return 0;
    }

    long long a = 0;
    long long b = 1;

    for (int i = 2; i <= n; i++)
    {
        long long kolejny = a + b;
        a = b;
        b = kolejny;
    }

    return b;
}

int main()
{
    cout << fibPetla(10) << "\n";
    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
55
```

</details>

## Kiedy uważać

- Gdy rekurencja jest bardzo głęboka.
- Gdy jedno wywołanie tworzy kilka kolejnych wywołań.
- Gdy te same wyniki są liczone wielokrotnie.
- Gdy pętla jest prostsza i równie czytelna.
- Gdy argument nie zbliża się do przypadku podstawowego.

## Ćwiczenia

### Ćwiczenie 1 - powtarzające się obliczenia

W drzewie prostej rekurencji dla `fib(5)` wskaż, które wartości `fib(k)` pojawiają się więcej niż raz.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Rozwiń `fib(5)` na `fib(4)` i `fib(3)`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Więcej niż raz pojawiają się między innymi `fib(3)`, `fib(2)`, `fib(1)` i `fib(0)`. To pokazuje, dlaczego prosta rekurencja Fibonacciego wykonuje dużo powtarzających się obliczeń.

</details>

### Ćwiczenie 2 - liczba wywołań

Policz wszystkie wywołania prostej funkcji `fib` dla `fib(4)`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Skorzystaj z drzewa z lekcji o Fibonaccim.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Drzewo zawiera:

```text
fib(4)
fib(3), fib(2)
fib(2), fib(1), fib(1), fib(0)
fib(1), fib(0)
```

Łącznie jest `9` wywołań.

</details>

### Ćwiczenie 3 - działanie pamięci wyników

Wyjaśnij, co oznacza warunek `pamiec[n] != -1` w funkcji `fibMemo`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Wartość `-1` oznacza brak policzonego wyniku.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Warunek `pamiec[n] != -1` oznacza, że wynik dla `n` został już wcześniej obliczony i zapisany. Funkcja może go od razu zwrócić, zamiast ponownie tworzyć całe poddrzewo wywołań.

</details>

### Ćwiczenie 4 - wybór podejścia

Dla zadania „oblicz setny wyraz ciągu Fibonacciego” wybierz: prosta rekurencja, rekurencja z pamięcią czy pętla. Uzasadnij wybór.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Zastanów się, czy potrzebujesz drzewa wywołań, czy tylko wyniku.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Najlepszym wyborem jest pętla albo rekurencja z pamięcią. Prosta rekurencja wielokrotnie liczy te same wartości i będzie bardzo wolna. Jeśli potrzebujemy tylko wyniku, pętla jest najprostsza i zużywa mało dodatkowej pamięci.

</details>

### Ćwiczenie 5 - ryzyko głębokości

Dlaczego funkcja rekurencyjna licząca sumę od `1` do `1000000` może być gorszym wyborem niż pętla?

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Pomyśl o liczbie aktywnych wywołań funkcji.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

Rekurencja utworzyłaby bardzo dużo aktywnych wywołań. Każde z nich zajmuje miejsce na stosie. Może to doprowadzić do przepełnienia stosu. Pętla wykona to samo obliczenie bez tworzenia miliona zagnieżdżonych wywołań.

</details>
