---
layout: default
title: Rozszerzone typy liczbowe
---

# Rozszerzone typy liczbowe

## Cel lekcji

Poznasz `long long`, `unsigned int`, pojęcie zakresu typu, przepełnienie, `sizeof` i `numeric_limits`.

## Krótkie wprowadzenie do problemu

Typ liczbowy ma ograniczony zakres. To znaczy, że nie przechowa każdej możliwej liczby.

Jeżeli liczba jest zbyt duża albo zbyt mała dla danego typu, wynik może być błędny. Nazywamy to przepełnieniem.

## Wyjaśnienie idei

Typ liczbowy jest jak pudełko o określonej pojemności. `int` wystarcza do wielu zadań, ale czasem potrzeba większego pudełka. Wtedy przydaje się `long long`.

`unsigned int` to typ bez znaku. Nie przechowuje wartości ujemnych. Nie jest po prostu większym `intem`.

Działania mieszające typy ze znakiem i bez znaku mogą dawać zaskakujące wyniki. Nie należy stosować `unsigned int` automatycznie tylko dlatego, że liczba ma być dodatnia.

## Składnia

```cpp
long long duzaLiczba = 3000000000LL;
unsigned int liczbaNieujemna = 25U;
sizeof(int);
numeric_limits<int>::max();
```

## Pełny przykład programu

```cpp
#include <iostream>
#include <limits>

using namespace std;

int main()
{
    cout << "Rozmiar int: " << sizeof(int) << " bajty\n";
    cout << "Najmniejszy int: " << numeric_limits<int>::min() << "\n";
    cout << "Najwiekszy int: " << numeric_limits<int>::max() << "\n";

    cout << "Rozmiar long long: " << sizeof(long long) << " bajty\n";
    cout << "Najwiekszy long long: " << numeric_limits<long long>::max() << "\n";

    unsigned int punkty = 100U;
    cout << "Punkty: " << punkty << "\n";

    return 0;
}
```

<details>
<summary>Pokaż wynik</summary>

```text
Dokładne wartości mogą zależeć od kompilatora i systemu.
Program wypisze rozmiary typów oraz ich zakresy.
```

</details>

## Omówienie programu krok po kroku

`#include <limits>` pozwala użyć `numeric_limits`.

`sizeof(int)` podaje rozmiar typu w bajtach.

`numeric_limits<int>::min()` podaje najmniejszą wartość typu `int`.

`numeric_limits<int>::max()` podaje największą wartość typu `int`.

`long long` zwykle ma większy zakres niż `int`.

`unsigned int` przechowuje tylko liczby nieujemne.

## Kiedy tego użyć?

Użyj `long long`, gdy liczysz duże wartości całkowite, na przykład duże iloczyny albo wyniki zadań algorytmicznych. `unsigned int` stosuj tylko wtedy, gdy rozumiesz, że wartość nie ma znaku i taki wybór pomaga w danym kontekście.

## Kiedy wybrać coś innego?

Do zwykłych liczników i małych liczb użyj `int`. Do liczb z częścią ułamkową użyj `double`.

## Ćwiczenia

1. Wypisz rozmiar typów `int`, `long long` i `double`.
2. Sprawdź największą wartość typu `long long`.
3. Utwórz zmienną `long long` przechowującą wynik mnożenia dwóch dużych liczb.

<details>
<summary>Pokaż wskazówkę</summary>

Do zakresów użyj `numeric_limits`, a do rozmiaru typu użyj `sizeof`.

</details>

<details>
<summary>Pokaż rozwiązanie</summary>

```cpp
#include <iostream>
#include <limits>

using namespace std;

int main()
{
    long long a = 1000000LL;
    long long b = 3000000LL;
    long long wynik = a * b;

    cout << "Rozmiar int: " << sizeof(int) << "\n";
    cout << "Rozmiar long long: " << sizeof(long long) << "\n";
    cout << "Najwiekszy long long: " << numeric_limits<long long>::max() << "\n";
    cout << "Wynik: " << wynik << "\n";

    return 0;
}
```

</details>

## Typowe błędy

- Użycie `int` do wyniku, który może być za duży.
- Myślenie, że `unsigned int` to zawsze lepszy `int`.
- Zapomnienie nagłówka `<limits>`.
- Mylenie rozmiaru typu z jego największą wartością.
- Ignorowanie przepełnienia.

## Podsumowanie

Typy liczbowe mają zakres. `long long` pomaga przy dużych liczbach całkowitych. `unsigned int` nie ma wartości ujemnych i trzeba używać go ostrożnie.
