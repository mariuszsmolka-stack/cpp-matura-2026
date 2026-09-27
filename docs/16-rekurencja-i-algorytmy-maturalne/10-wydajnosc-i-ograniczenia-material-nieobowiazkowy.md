---
layout: default
title: Wydajność i ograniczenia - materiał nieobowiązkowy
---

# Wydajność i ograniczenia - materiał nieobowiązkowy

> Materiał nieobowiązkowy. Możesz pominąć tę lekcję bez utraty ciągłości materiału podstawowego.

## Problem

Rekurencja bywa czytelna, ale każde wywołanie funkcji ma koszt. Program musi zapamiętać aktywne wywołania, ich argumenty, zmienne lokalne i miejsca powrotu. Gdy wywołań jest bardzo dużo, może zabraknąć pamięci stosu.

Nie ma jednej stałej liczby wywołań, po której zawsze następuje przepełnienie stosu. Zależy to od środowiska, programu i dostępnej pamięci.

## Dwa różne problemy

Przy dużych wyrazach ciągu Fibonacciego pojawiają się dwa osobne problemy:

- algorytm może być zbyt wolny,
- typ danych może mieć zbyt mały zakres.

Dokładna wartość:

```text
F(100) = 354224848179261915075
```

nie mieści się w typowym 64-bitowym `long long`. Warto wiedzieć, że `F(92)` jeszcze mieści się w takim typie, ale `F(93)` już się nie mieści. Standardowy C++ nie ma wbudowanego całkowitego typu o dowolnie dużym zakresie.

W przykładach praktycznych w tej lekcji bezpiecznie liczymy mniejsze wartości, na przykład `F(50)`.

## Proste wyjaśnienie oznaczeń O

Zapis `O(n)` oznacza, że liczba kroków rośnie mniej więcej liniowo z `n`. Jeśli `n` rośnie dwa razy, pracy też jest około dwa razy więcej.

Zapis `O(2^n)` oznacza wzrost bardzo szybki. Każde zwiększenie `n` może prawie podwoić liczbę pracy.

Zapis `O(1)` oznacza pamięć stałą, czyli taką, która nie rośnie wraz z `n` w istotny sposób.

Zapis `O(log n)` oznacza, że liczba kroków rośnie wolno, bo w każdym kroku odrzucamy dużą część danych. Przykładem jest wyszukiwanie binarne z poprzedniej lekcji: w każdym kroku odrzuca około połowy pozostałych elementów. Dla około miliona elementów wystarcza około 20 sprawdzeń, ale warunkiem jest uporządkowanie danych.

Nie wszystkie algorytmy rekurencyjne mają tę samą złożoność. Trzeba patrzeć na to, ile wywołań powstaje i czy program powtarza te same obliczenia.

| Rozwiązanie           | Czas działania | Dodatkowa pamięć        |
| --------------------- | -------------- | ----------------------- |
| Naiwna rekurencja     | około `O(2^n)` | `O(n)` na stosie        |
| Rekurencja z pamięcią | `O(n)`         | `O(n)` na wyniki i stos |
| Pętla                 | `O(n)`         | `O(1)`                  |

## Rekurencja z pamięcią

Wartość `-1` w tablicy `pamiec` oznacza, że wynik nie został jeszcze policzony. Funkcja najpierw sprawdza, czy wynik jest już zapisany. Jeśli tak, zwraca go bez ponownego rozbijania problemu.

Poniższa wersja zapisuje w pamięci także przypadki podstawowe `0` i `1`. Dwie gałęzie obliczamy w osobnych instrukcjach celowo, aby kolejność pierwszych wywołań była jednoznaczna.

```cpp
#include <iostream>
#include <vector>

using namespace std;

long long fibMemo(int n, vector<long long> &pamiec)
{
    if (pamiec[n] != -1)
    {
        return pamiec[n];
    }

    if (n <= 1)
    {
        pamiec[n] = n;
        return pamiec[n];
    }

    long long wynikPierwszejGalezi = fibMemo(n - 1, pamiec);
    long long wynikDrugiejGalezi = fibMemo(n - 2, pamiec);

    pamiec[n] = wynikPierwszejGalezi + wynikDrugiejGalezi;
    return pamiec[n];
}

int main()
{
    int n = 50;

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
12586269025
```

</details>

Dla `n == 0` powstaje `vector` o rozmiarze `1`, więc dostęp do `pamiec[0]` jest poprawny.

## Wersja iteracyjna

Do samego obliczenia `fib(n)` pętla jest zwykle najprostsza i zużywa najmniej dodatkowej pamięci.

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
    cout << fibPetla(50) << "\n";
    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
12586269025
```

</details>

## Kiedy uważać

- Gdy rekurencja jest bardzo głęboka.
- Gdy jedno wywołanie tworzy kilka kolejnych wywołań.
- Gdy te same wyniki są liczone wielokrotnie.
- Gdy pętla jest prostsza i równie czytelna.
- Gdy argument nie zbliża się do przypadku podstawowego.
- Gdy wynik może przekroczyć zakres typu liczbowego.

## Ćwiczenia

### Ćwiczenie 1 - dwa problemy przy F(100)

Wyjaśnij, dlaczego obliczenie `F(100)` w standardowym programie z typem `long long` ma dwa problemy: wydajność prostego algorytmu i zakres typu.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Oddziel pytanie „jak szybko liczymy?” od pytania „czy wynik mieści się w typie?”.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

Prosta rekurencja jest zbyt wolna, bo wielokrotnie liczy te same wartości. Nawet jeśli użyjemy szybszej metody, pojawia się drugi problem: `F(100) = 354224848179261915075`, a ta liczba nie mieści się w typowym 64-bitowym `long long`.

</details>

### Ćwiczenie 2 - pamięć po fibMemo(6)

Załóż, że uruchamiamy `fibMemo(6, pamiec)` z tablicą wypełnioną wartościami `-1`. Jakie wartości będą zapisane w `pamiec[0]` ... `pamiec[6]` po zakończeniu obliczeń?

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Rekurencja z pamięcią obliczy każdy wynik od `0` do `6` pierwszy raz i zapisze go w tablicy.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Po zakończeniu obliczeń pamięć zawiera:

| Indeks | Wartość |
| -----: | ------: |
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |
| 6 | 8 |

Każdy z tych wyników został policzony raz i zapisany.

</details>

### Ćwiczenie 3 - które wartości są liczone pierwszy raz

Podczas obliczania `fibMemo(6, pamiec)` wypisz wartości `n`, dla których wynik trzeba obliczyć pierwszy raz.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Wyniki, które są już w pamięci, nie są obliczane ponownie.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Pierwszy raz trzeba obliczyć wartości dla:

```text
6, 5, 4, 3, 2, 1, 0
```

Potem kolejne odwołania do tych samych indeksów mogą korzystać z `pamiec[n]`.

</details>

### Ćwiczenie 4 - wybór podejścia

Dla zadania „oblicz `F(50)`” wybierz: prosta rekurencja, rekurencja z pamięcią czy pętla. Uzasadnij wybór.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Jeśli potrzebujesz tylko wyniku, nie musisz budować drzewa wywołań.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

Najlepszym wyborem jest pętla albo rekurencja z pamięcią. Pętla jest najprostsza i zużywa najmniej dodatkowej pamięci. Rekurencja z pamięcią też działa szybko, ale potrzebuje tablicy wyników i stosu wywołań.

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
