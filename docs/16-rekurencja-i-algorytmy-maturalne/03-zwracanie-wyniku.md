---
layout: default
title: Zwracanie wyniku
---

# Zwracanie wyniku

## Problem

Nie każda funkcja rekurencyjna tylko wypisuje tekst. Często ma obliczyć wynik i zwrócić go do poprzedniego wywołania. Przykładem jest suma liczb od `1` do `n`.

Przyjmujemy dziedzinę: `liczba >= 0`. Dla wartości `0` suma wynosi `0`.

## Idea

Suma od `1` do `liczba` to aktualna liczba plus suma liczb wcześniejszych:

```text
suma(4) = 4 + suma(3)
```

Przypadek podstawowy to `liczba <= 0`. Funkcja zwraca wtedy `0`, bo nie ma już czego dodawać.

## Rozwinięcie wywołań

```text
suma(4)
=> 4 + suma(3)
=> 4 + 3 + suma(2)
=> 4 + 3 + 2 + suma(1)
=> 4 + 3 + 2 + 1 + suma(0)
```

Powroty z wartościami:

```text
suma(0) => 0
suma(1) => 1
suma(2) => 3
suma(3) => 6
suma(4) => 10
```

## Kod główny

```cpp
#include <iostream>

using namespace std;

int suma(int liczba)
{
    if (liczba <= 0)
    {
        return 0;
    }

    return liczba + suma(liczba - 1);
}

int main()
{
    cout << suma(4) << "\n";
    return 0;
}
```

<details markdown="1">
<summary>Pokaż wynik</summary>

```text
10
```

</details>

## Omówienie kodu

- `suma(4)` nie zna od razu całego wyniku.
- Musi poczekać na `suma(3)`.
- `suma(3)` czeka na `suma(2)`, a tak dalej.
- `suma(0)` zwraca `0` i zaczyna etap powrotów.
- Każde wcześniejsze wywołanie dodaje swoją liczbę do wyniku otrzymanego z głębszego wywołania.

## Silnia i potęga

Silnia dla `n >= 0`:

```cpp
long long silnia(int n)
{
    if (n <= 1)
    {
        return 1;
    }

    return n * silnia(n - 1);
}
```

Potęga dla wykładnika `wykladnik >= 0`:

```cpp
long long potega(int podstawa, int wykladnik)
{
    if (wykladnik == 0)
    {
        return 1;
    }

    return podstawa * potega(podstawa, wykladnik - 1);
}
```

Te funkcje nie obsługują dowolnych argumentów ujemnych. Dodatkowo wyniki mogą przekroczyć zakres typu. `long long` ma większy zakres niż `int`, ale także jest ograniczony.

## Typowe błędy

- Brak zwrócenia wyniku w jednej z gałęzi funkcji zwracającej wartość. Problemem nie jest samo położenie słowa `return` przed wywołaniem, ale sytuacja, w której funkcja typu `int` albo `long long` dochodzi do końca bez oddania wyniku.
- Zły wynik w przypadku podstawowym, np. `0` dla silni.
- Brak określonej dziedziny argumentów.
- Zakładanie, że `long long` pomieści każdy wynik.
- Mylenie wartości zwracanej z tekstem wypisanym przez `cout`.

## Ćwiczenia

### Ćwiczenie 1 - rozwinięcie działania

Rozwiń wywołanie `suma(5)` aż do przypadku podstawowego i podaj wynik zwracany przez `suma(5)`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 1</summary>

Zapisz `5 + suma(4)`, potem rozwijaj dalej.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 1</summary>

```text
suma(5)
=> 5 + suma(4)
=> 5 + 4 + suma(3)
=> 5 + 4 + 3 + suma(2)
=> 5 + 4 + 3 + 2 + suma(1)
=> 5 + 4 + 3 + 2 + 1 + suma(0)
=> 15
```

Wartość zwracana przez `suma(5)` to `15`.

</details>

### Ćwiczenie 2 - przypadek podstawowy

Uzupełnij brakującą wartość w przypadku podstawowym:

```cpp
int suma(int liczba)
{
    if (liczba <= 0)
    {
        return ...;
    }

    return liczba + suma(liczba - 1);
}
```

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 2</summary>

Suma pustego zakresu powinna wynosić zero.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 2</summary>

Należy wpisać `0`:

```cpp
return 0;
```

Dzięki temu `suma(1)` zwraca `1 + suma(0)`, czyli `1 + 0`.

</details>

### Ćwiczenie 3 - brakujący return

Wyjaśnij błąd w funkcji:

```cpp
int suma(int liczba)
{
    if (liczba <= 0)
    {
        return 0;
    }

    liczba + suma(liczba - 1);
}
```

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 3</summary>

Funkcja typu `int` musi zwrócić wynik również w kroku rekurencyjnym.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 3</summary>

Błędna linia oblicza wartość, ale jej nie zwraca. Poprawnie:

```cpp
return liczba + suma(liczba - 1);
```

Bez `return` wynik nie zostanie przekazany do poprzedniego wywołania.

</details>

### Ćwiczenie 4 - suma liczb parzystych

Napisz funkcję `sumaParzystych(int liczba)`, która dla `liczba >= 0` zwraca sumę dodatnich liczb parzystych nie większych od `liczba`. Dla `sumaParzystych(7)` wynik ma wynosić `12`, bo `6 + 4 + 2 = 12`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 4</summary>

Jeżeli liczba jest nieparzysta, pomiń ją. Jeżeli jest parzysta, dodaj ją do wyniku mniejszego problemu.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 4</summary>

```cpp
#include <iostream>

using namespace std;

int sumaParzystych(int liczba)
{
    if (liczba <= 0)
    {
        return 0;
    }

    if (liczba % 2 != 0)
    {
        return sumaParzystych(liczba - 1);
    }

    return liczba + sumaParzystych(liczba - 2);
}

int main()
{
    cout << sumaParzystych(7) << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 5 - potęgowanie

Napisz funkcję `potega(int podstawa, int wykladnik)`, która dla `wykladnik >= 0` zwraca wartość `podstawa` podniesioną do podanej potęgi.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 5</summary>

Przypadek podstawowy to wykładnik `0`, a krok rekurencyjny zmniejsza wykładnik o `1`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 5</summary>

```cpp
#include <iostream>

using namespace std;

long long potega(int podstawa, int wykladnik)
{
    if (wykladnik == 0)
    {
        return 1;
    }

    return podstawa * potega(podstawa, wykladnik - 1);
}

int main()
{
    cout << potega(2, 5) << "\n";
    return 0;
}
```

</details>

### Ćwiczenie 6 - suma wielokrotności

Napisz funkcję `sumaWielokrotnosci(int n, int dzielnik)`, która oblicza sumę dodatnich wielokrotności liczby `dzielnik`, które nie przekraczają `n`.

Założenia:

- `n >= 0`,
- `dzielnik > 0`.

Dla `sumaWielokrotnosci(20, 6)` wynik ma wynosić `36`, bo dodatnie wielokrotności `6` nie większe niż `20` to `6`, `12` i `18`.

<details markdown="1">
<summary>Pokaż wskazówkę do ćwiczenia 6</summary>

Rozważ liczby od `n` w dół. Jeżeli `n` jest podzielne przez `dzielnik`, dodaj je do wyniku dla `n - 1`. W przeciwnym razie pomiń `n`.

</details>

<details markdown="1">
<summary>Pokaż rozwiązanie ćwiczenia 6</summary>

```cpp
#include <iostream>

using namespace std;

int sumaWielokrotnosci(int n, int dzielnik)
{
    if (n <= 0)
    {
        return 0;
    }

    if (n % dzielnik == 0)
    {
        return n + sumaWielokrotnosci(n - 1, dzielnik);
    }

    return sumaWielokrotnosci(n - 1, dzielnik);
}

int main()
{
    cout << sumaWielokrotnosci(20, 6) << "\n";
    return 0;
}
```

Dla danych z przykładu funkcja dodaje `18 + 12 + 6`, więc zwraca `36`.

</details>
